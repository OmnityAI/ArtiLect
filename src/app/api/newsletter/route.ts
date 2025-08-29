// src/app/api/newsletter/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/db'
import { newsletterSubscribers } from '@/db/schema'
import { eq, like, or, desc } from 'drizzle-orm'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    // sanitize pagination
    const limitRaw = Number(searchParams.get('limit'))
    const offsetRaw = Number(searchParams.get('offset'))
    const limit = Number.isFinite(limitRaw) ? Math.min(Math.max(1, limitRaw), 100) : 10
    const offset = Number.isFinite(offsetRaw) ? Math.max(0, offsetRaw) : 0

    const search = searchParams.get('search')?.trim() ?? ''
    const searchTerm = search ? `%${search}%` : null

    // base query (order newest first if you have subscribedAt)
    const base = db
      .select()
      .from(newsletterSubscribers)
      .orderBy(desc(newsletterSubscribers.subscribedAt))

    // conditionally add WHERE without mutating the builder (avoids Drizzle type mismatch)
    const filtered = searchTerm
      ? base.where(
          or(
            like(newsletterSubscribers.name, searchTerm),
            like(newsletterSubscribers.email, searchTerm)
          )
        )
      : base

    const rows = await filtered.limit(limit).offset(offset).all()

    return NextResponse.json(rows, { status: 200 })
  } catch (error) {
    console.error('GET newsletter_subscribers error:', error)
    return NextResponse.json(
      { error: 'Internal server error', code: 'DATABASE_ERROR' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const name = typeof body?.name === 'string' ? body.name.trim() : ''
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''

    if (!name) {
      return NextResponse.json(
        { error: 'Name is required and must be a non-empty string', code: 'MISSING_NAME' },
        { status: 400 }
      )
    }

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required and must be a non-empty string', code: 'MISSING_EMAIL' },
        { status: 400 }
      )
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format', code: 'INVALID_EMAIL_FORMAT' },
        { status: 400 }
      )
    }

    // duplicate check (use .get() for a single row)
    const existing = await db
      .select()
      .from(newsletterSubscribers)
      .where(eq(newsletterSubscribers.email, email))
      .get()

    if (existing) {
      return NextResponse.json(
        { error: 'Email address is already subscribed', code: 'DUPLICATE_EMAIL' },
        { status: 409 }
      )
    }

    // insert (keep these fields only if they exist in your schema)
    const inserted = await db
      .insert(newsletterSubscribers)
      .values({
        name,
        email,
        subscribedAt: new Date().toISOString(),
        isActive: true,
      })
      .returning()

    return NextResponse.json(inserted[0], { status: 201 })
  } catch (error) {
    console.error('POST newsletter_subscribers error:', error)
    return NextResponse.json(
      { error: 'Internal server error', code: 'DATABASE_ERROR' },
      { status: 500 }
    )
  }
}
