import dotenv from 'dotenv';

dotenv.config();

/**
 * Database Configuration
 *
 * This file provides optional database connection configurations.
 * Uncomment and configure the database you want to use, or leave commented to ignore.
 */

export interface DatabaseConfig {
  enabled: boolean;
  type: 'postgresql' | 'mongodb' | 'none';
  connectionString?: string;
  host?: string;
  port?: number;
  database?: string;
  username?: string;
  password?: string;
  options?: Record<string, unknown>;
}

export interface RedisConfig {
  enabled: boolean;
  host?: string;
  port?: number;
  password?: string;
  db?: number;
}

const getEnv = (key: string, defaultValue?: string): string | undefined => {
  return process.env[key] || defaultValue;
};

/**
 * PostgreSQL Configuration
 *
 * Usage:
 * 1. Install: npm install pg
 * 2. Set DATABASE_URL or individual connection parameters
 * 3. Import and use: import { postgresConfig } from '@/config/database'
 */
export const postgresConfig: DatabaseConfig = {
  enabled: !!getEnv('DATABASE_URL') || !!(getEnv('POSTGRES_HOST') && getEnv('POSTGRES_DB')),
  type: 'postgresql',
  connectionString: getEnv('DATABASE_URL'),
  host: getEnv('POSTGRES_HOST', 'localhost'),
  port: parseInt(getEnv('POSTGRES_PORT', '5432') || '5432', 10),
  database: getEnv('POSTGRES_DB', 'webapp_db'),
  username: getEnv('POSTGRES_USER', 'postgres'),
  password: getEnv('POSTGRES_PASSWORD'),
  options: {
    ssl: getEnv('POSTGRES_SSL') === 'true' ? { rejectUnauthorized: false } : false,
  },
};

/**
 * MongoDB Configuration
 *
 * Usage:
 * 1. Install: npm install mongodb or mongoose
 * 2. Set MONGODB_URI or individual connection parameters
 * 3. Import and use: import { mongoConfig } from '@/config/database'
 */
export const mongoConfig: DatabaseConfig = {
  enabled: !!getEnv('MONGODB_URI') || !!(getEnv('MONGO_HOST') && getEnv('MONGO_DB')),
  type: 'mongodb',
  connectionString: getEnv('MONGODB_URI'),
  host: getEnv('MONGO_HOST', 'localhost'),
  port: parseInt(getEnv('MONGO_PORT', '27017') || '27017', 10),
  database: getEnv('MONGO_DB', 'webapp_db'),
  username: getEnv('MONGO_USER'),
  password: getEnv('MONGO_PASSWORD'),
  options: {
    authSource: getEnv('MONGO_AUTH_SOURCE', 'admin'),
  },
};

/**
 * Redis Configuration
 *
 * Usage:
 * 1. Install: npm install redis or ioredis
 * 2. Set REDIS_URL or individual connection parameters
 * 3. Import and use: import { redisConfig } from '@/config/database'
 */
export const redisConfig: RedisConfig = {
  enabled: !!getEnv('REDIS_URL') || !!getEnv('REDIS_HOST'),
  host: getEnv('REDIS_HOST', 'localhost'),
  port: parseInt(getEnv('REDIS_PORT', '6379') || '6379', 10),
  password: getEnv('REDIS_PASSWORD'),
  db: parseInt(getEnv('REDIS_DB', '0') || '0', 10),
};

/**
 * Get active database configuration
 * Returns the first enabled database config, or null if none are enabled
 */
export const getActiveDatabase = (): DatabaseConfig | null => {
  if (postgresConfig.enabled) return postgresConfig;
  if (mongoConfig.enabled) return mongoConfig;
  return null;
};

/**
 * Check if any database is configured
 */
export const isDatabaseEnabled = (): boolean => {
  return postgresConfig.enabled || mongoConfig.enabled;
};

/**
 * Check if Redis is configured
 */
export const isRedisEnabled = (): boolean => {
  return redisConfig.enabled;
};
