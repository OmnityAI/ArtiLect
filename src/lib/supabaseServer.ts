export type { SupabaseClient } from '@supabase/supabase-js'

// Dynamically create a server-side Supabase client when needed.
// Avoids build-time failures if the module or env vars are missing locally.
export async function getSupabaseAdmin() {
  const SUPABASE_URL = process.env.SUPABASE_URL
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) return null
  const { createClient } = await import('@supabase/supabase-js')
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { 'X-Client-Info': 'artilect-website' } },
  })
}
