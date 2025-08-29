import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { newsletterSubscribers } from '@/db/schema';
import { eq, like, or } from 'drizzle-orm';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const search = searchParams.get('search');

    let query = db.select().from(newsletterSubscribers);

    if (search) {
      const searchTerm = `%${search.trim()}%`;
      query = query.where(
        or(
          like(newsletterSubscribers.name, searchTerm),
          like(newsletterSubscribers.email, searchTerm)
        )
      );
    }

    const subscribers = await query.limit(limit).offset(offset);

    return NextResponse.json(subscribers, { status: 200 });
  } catch (error) {
    console.error('GET newsletter_subscribers error:', error);
    return NextResponse.json({
      error: 'Internal server error: ' + error,
      code: 'DATABASE_ERROR'
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    // Validate required fields
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json({
        error: 'Name is required and must be a non-empty string',
        code: 'MISSING_NAME'
      }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      return NextResponse.json({
        error: 'Email is required and must be a non-empty string',
        code: 'MISSING_EMAIL'
      }, { status: 400 });
    }

    // Sanitize inputs
    const trimmedName = name.trim();
    const normalizedEmail = email.trim().toLowerCase();

    // Validate email format
    if (!EMAIL_REGEX.test(normalizedEmail)) {
      return NextResponse.json({
        error: 'Invalid email format',
        code: 'INVALID_EMAIL_FORMAT'
      }, { status: 400 });
    }

    // Check for duplicate email
    const existingSubscriber = await db.select()
      .from(newsletterSubscribers)
      .where(eq(newsletterSubscribers.email, normalizedEmail))
      .limit(1);

    if (existingSubscriber.length > 0) {
      return NextResponse.json({
        error: 'Email address is already subscribed',
        code: 'DUPLICATE_EMAIL'
      }, { status: 409 });
    }

    // Create new subscriber
    const newSubscriber = await db.insert(newsletterSubscribers)
      .values({
        name: trimmedName,
        email: normalizedEmail,
        subscribedAt: new Date().toISOString(),
        isActive: true
      })
      .returning();

    return NextResponse.json(newSubscriber[0], { status: 201 });
  } catch (error) {
    console.error('POST newsletter_subscribers error:', error);
    return NextResponse.json({
      error: 'Internal server error: ' + error,
      code: 'DATABASE_ERROR'
    }, { status: 500 });
  }
}