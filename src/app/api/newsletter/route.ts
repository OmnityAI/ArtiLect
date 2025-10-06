// src/app/api/newsletter/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabaseServer'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function GET(request: NextRequest) {
  try {
    const supabase = await getSupabaseAdmin()
    if (!supabase) {
      return NextResponse.json(
        { error: 'Supabase not configured', code: 'SUPABASE_MISSING' },
        { status: 500 }
      )
    }
    const { searchParams } = new URL(request.url)

    // sanitize pagination
    const limitRaw = Number(searchParams.get('limit'))
    const offsetRaw = Number(searchParams.get('offset'))
    const limit = Number.isFinite(limitRaw) ? Math.min(Math.max(1, limitRaw), 100) : 10
    const offset = Number.isFinite(offsetRaw) ? Math.max(0, offsetRaw) : 0

    const search = searchParams.get('search')?.trim() ?? ''
    const searchTerm = search ? `%${search}%` : null

    let query = supabase
      .from('newsletter_subscribers')
      .select('*')
      .order('subscribed_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (searchTerm) {
      // OR ilike on name or email
      query = query.or(`name.ilike.${searchTerm},email.ilike.${searchTerm}`)
    }

    const { data: rows, error } = await query
    if (error) {
      console.error('GET newsletter_subscribers supabase error:', error)
      return NextResponse.json(
        { error: 'Database error', code: 'DATABASE_ERROR' },
        { status: 500 }
      )
    }

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
    const supabase = await getSupabaseAdmin()
    if (!supabase) {
      return NextResponse.json(
        { error: 'Supabase not configured', code: 'SUPABASE_MISSING' },
        { status: 500 }
      )
    }
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

    // insert into Supabase, handle duplicates
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert({
        name,
        email,
        subscribed_at: new Date().toISOString(),
        is_active: true,
        source: 'website',
      })
      .select()
      .single()

    if (error) {
      const msg = (error as any)?.message?.toLowerCase?.() || ''
      if (msg.includes('duplicate') || (error as any)?.code === '23505') {
        return NextResponse.json(
          { error: 'Email address is already subscribed', code: 'DUPLICATE_EMAIL' },
          { status: 409 }
        )
      }
      console.error('POST newsletter_subscribers supabase error:', error)
      return NextResponse.json(
        { error: 'Internal server error', code: 'DATABASE_ERROR' },
        { status: 500 }
      )
    }

    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    console.error('POST newsletter_subscribers error:', error)
    return NextResponse.json(
      { error: 'Internal server error', code: 'DATABASE_ERROR' },
      { status: 500 }
    )
  }
}
