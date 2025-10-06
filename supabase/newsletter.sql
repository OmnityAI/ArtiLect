-- Supabase SQL: newsletter_subscribers table
-- Run this in your Supabase project's SQL editor

create table if not exists public.newsletter_subscribers (
  id bigserial primary key,
  name text not null,
  email text not null unique,
  subscribed_at timestamptz not null default now(),
  is_active boolean not null default true,
  source text not null default 'website'
);

-- Helpful indexes
create index if not exists idx_newsletter_email on public.newsletter_subscribers (email);
create index if not exists idx_newsletter_subscribed_at on public.newsletter_subscribers (subscribed_at desc);

-- Row Level Security (optional: keep disabled if using service role)
alter table public.newsletter_subscribers enable row level security;

-- Basic RLS policy for anonymous inserts from the website form (optional)
-- If you want to allow client-side inserts without service key, uncomment below
-- create policy "Allow inserts from anon" on public.newsletter_subscribers
--   for insert
--   to anon
--   with check (true);
