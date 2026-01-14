import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from "@shared/schema";

// Use environment variable for database path
// On Railway/production, use /tmp or a writable directory
// For development, use local.db in the project root
const dbPath = process.env.DATABASE_PATH || 
  (process.env.NODE_ENV === 'production' ? '/tmp/production.db' : 'local.db');
const sqlite = new Database(dbPath);
export const db = drizzle(sqlite, { schema });

// Export a mock pool for compatibility with existing code
export const pool = {
  query: (text: string, params?: any[]) => {
    return sqlite.prepare(text).all(params || []);
  }
};
