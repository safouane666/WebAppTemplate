/**
 * Redis Connection Setup (Optional)
 *
 * This file provides a placeholder for Redis connection setup.
 * Uncomment and configure if you want to use Redis.
 *
 * Option 1: Using redis (recommended)
 * Installation:
 * npm install redis
 *
 * Option 2: Using ioredis
 * Installation:
 * npm install ioredis
 *
 * Usage with redis:
 * import { getRedisClient } from '@/config/database/redis';
 * const client = await getRedisClient();
 *
 * Usage with ioredis:
 * import { getRedisClient } from '@/config/database/redis';
 * const client = getRedisClient();
 */

// Uncomment to use Redis with 'redis' package (recommended)
/*
import { createClient, RedisClientType } from 'redis';
import { redisConfig } from '../database';
let redisClient: RedisClientType | null = null;

export const getRedisClient = async (): Promise<RedisClientType> => {
  if (!redisConfig.enabled) {
    throw new Error('Redis is not configured. Please set REDIS_URL or REDIS_* environment variables.');
  }

  if (!redisClient) {
    const url = process.env.REDIS_URL || 
      `redis://${redisConfig.password ? `:${redisConfig.password}@` : ''}${redisConfig.host}:${redisConfig.port}/${redisConfig.db || 0}`;

    redisClient = createClient({
      url,
    });

    redisClient.on('error', (err) => {
      console.error('Redis Client Error', err);
    });

    redisClient.on('connect', () => {
      console.log('✅ Redis connected successfully');
    });

    await redisClient.connect();
  }

  return redisClient;
};

export const closeRedisConnection = async (): Promise<void> => {
  if (redisClient) {
    await redisClient.quit();
    redisClient = null;
    console.log('Redis disconnected');
  }
};
*/

// Uncomment to use Redis with ioredis
/*
import Redis from 'ioredis';

let redisClient: Redis | null = null;

export const getRedisClient = (): Redis => {
  if (!redisConfig.enabled) {
    throw new Error('Redis is not configured. Please set REDIS_URL or REDIS_* environment variables.');
  }

  if (!redisClient) {
    redisClient = new Redis({
      host: redisConfig.host,
      port: redisConfig.port,
      password: redisConfig.password,
      db: redisConfig.db,
      retryStrategy: (times) => {
        const delay = Math.min(times * 50, 2000);
        return delay;
      },
    });

    redisClient.on('connect', () => {
      console.log('✅ Redis connected successfully');
    });

    redisClient.on('error', (err) => {
      console.error('Redis Client Error', err);
    });
  }

  return redisClient;
};

export const closeRedisConnection = async (): Promise<void> => {
  if (redisClient) {
    redisClient.disconnect();
    redisClient = null;
    console.log('Redis disconnected');
  }
};
*/

// Placeholder export (remove when implementing)
export const getRedisClient = async () => {
  throw new Error(
    'Redis connection not implemented. Uncomment the code in src/config/database/redis.ts'
  );
};
