import { D1Adapter } from '@lucia-auth/adapter-sqlite';
import { drizzle } from 'drizzle-orm/d1';

let db: any;
let adapter: D1Adapter;

export const getDb = () => {
  if (!db) {
    if (!process.env.DATABASE_ID) {
      throw new Error('DATABASE_ID environment variable is not set');
    }
    // This will be initialized in the API routes context
  }
  return db;
};

export { adapter };
