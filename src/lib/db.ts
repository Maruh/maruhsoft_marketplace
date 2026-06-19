import argon2 from 'argon2';
import { readFileSync } from 'node:fs';
import path from 'node:path';

import { BetterSqlite3Adapter } from '@lucia-auth/adapter-sqlite';

const MIGRATIONS_PATH = path.join(process.cwd(), 'migrations', '001_init.sql');

let adapter: any | null = null;

function getOrCreateBetterSqlite3Adapter() {
  if (adapter) return adapter;

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Database = require('better-sqlite3');

  const dbFile = process.env.SQLITE_FILE || path.join(process.cwd(), '.dev.sqlite');
  const db = new Database(dbFile);

  // Initialize schema (idempotent via IF NOT EXISTS)
  const sql = readFileSync(MIGRATIONS_PATH, 'utf8');
  db.exec(sql);

  // adapter-sqlite v3 uses tableNames: { user, session }
  // plus Lucia's schema expects standard column names.
  // We'll map our schema by using Lucia adapter defaults.
  adapter = new BetterSqlite3Adapter(db, {
    user: 'users',
    session: 'user_session',
  });


  return adapter;
}

export function getAdapter() {
  // Keep production swapping easy later (D1Adapter can be implemented there).
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Production D1Adapter wiring not implemented yet.');
  }

  return getOrCreateBetterSqlite3Adapter();
}

export const adapterInstance = getAdapter();

export async function hashPassword(password: string) {
  return argon2.hash(password);
}


