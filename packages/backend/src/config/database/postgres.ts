/**
 * PostgreSQL Connection Setup (Optional)
 *
 * This file provides a placeholder for PostgreSQL connection setup.
 * Uncomment and configure if you want to use PostgreSQL.
 *
 * Installation:
 * npm install pg
 * npm install --save-dev @types/pg
 *
 * Usage:
 * import { query } from '@/config/database/postgres';
 * const result = await query('SELECT * FROM users WHERE id = $1', [1]);
 */

// Uncomment to use PostgreSQL
/*
import { Pool, PoolClient, QueryResult } from 'pg';
//import { postgresConfig } from '../database';
let pool: Pool | null = null;

export const createPostgresConnection = async (): Promise<Pool> => {
  if (!postgresConfig.enabled) {
    throw new Error('PostgreSQL is not configured. Please set DATABASE_URL or POSTGRES_* environment variables.');
  }

  if (!pool) {
    pool = new Pool({
      connectionString: postgresConfig.connectionString,
      host: postgresConfig.host,
      port: postgresConfig.port,
      database: postgresConfig.database,
      user: postgresConfig.username,
      password: postgresConfig.password,
      ...(postgresConfig.options as any),
    });

    pool.on('connect', () => {
      console.log('✓ Database pool connected');
    });

    pool.on('error', (err) => {
      console.error('Unexpected error on idle PostgreSQL client', err);
    });
  }

  return pool;
};

export const getPostgresClient = async (): Promise<PoolClient> => {
  const connection = await createPostgresConnection();
  return connection.connect();
};

export const closePostgresConnection = async (): Promise<void> => {
  if (pool) {
    await pool.end();
    pool = null;
  }
};

/**
 * Execute a SQL query with automatic connection management
 *
 * This helper function automatically gets a client from the pool,
 * executes the query, logs slow queries, and releases the client back to the pool.
 *
 * @param text - SQL query string
 * @param params - Query parameters (optional)
 * @returns Query result
 *
 * @example
 * const result = await query('SELECT * FROM users WHERE id = $1', [1]);
 * const users = result.rows;
 */
/*
export async function query(
  text: string,
  params?: any[],
): Promise<QueryResult> {
  const start = Date.now();
  const client = await getPostgresClient();

  try {
    const result = await client.query(text, params);
    const duration = Date.now() - start;

    // Log slow queries (over 1 second)
    if (duration > 1000) {
      console.warn(`Slow query (${duration}ms):`, text);
    }

    return result;
  } catch (error) {
    console.error('Query error:', error);
    throw error;
  } finally {
    client.release();
  }
}
*/

// Placeholder exports (remove when uncommenting above)
export const createPostgresConnection = async () => {
  throw new Error(
    'PostgreSQL connection not implemented. Uncomment the code in src/config/database/postgres.ts'
  );
};
