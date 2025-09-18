import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from "@shared/schema.sqlite";

// For local development, use SQLite
const sqlite = new Database('local.db');
export const db = drizzle(sqlite, { schema });

// Export a mock pool for compatibility with existing code
export const pool = {
  query: (text: string, params?: any[]) => {
    return sqlite.prepare(text).all(params || []);
  }
};
