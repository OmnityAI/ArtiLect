// Deprecated: Drizzle/Turso client removed. Supabase is now the only database.
export {}
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from '@/db/schema';

const client = createClient({
  url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
});

export const db = drizzle(client, { schema });

export type Database = typeof db;