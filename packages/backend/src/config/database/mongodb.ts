/**
 * MongoDB Connection Setup (Optional)
 *
 * This file provides a placeholder for MongoDB connection setup using mongoose.
 * Uncomment and configure if you want to use MongoDB.
 *
 * Installation:
 * npm install mongoose
 *
 * Usage:
 * import { connectMongoDB, disconnectMongoDB, query } from '@/config/database/mongodb';
 * await connectMongoDB();
 *
 * // Using the query helper
 * const User = mongoose.model('User', userSchema);
 * const users = await query(() => User.find({ active: true }), 'findActiveUsers');
 *
 * await disconnectMongoDB();
 */

// Uncomment to use MongoDB with mongoose
/*
import mongoose from 'mongoose';
//import { mongoConfig } from '../database';
export const connectMongoDB = async (): Promise<typeof mongoose> => {
  if (!mongoConfig.enabled) {
    throw new Error('MongoDB is not configured. Please set MONGODB_URI or MONGO_* environment variables.');
  }

  const uri = mongoConfig.connectionString || 
    `mongodb://${mongoConfig.username && mongoConfig.password 
      ? `${mongoConfig.username}:${mongoConfig.password}@` 
      : ''}${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.database}${mongoConfig.options?.authSource ? `?authSource=${mongoConfig.options.authSource}` : ''}`;

  try {
    const connection = await mongoose.connect(uri);
    console.log('✅ MongoDB connected successfully');
    return connection;
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    throw error;
  }
};

export const disconnectMongoDB = async (): Promise<void> => {
  await mongoose.disconnect();
  console.log('MongoDB disconnected');
};

/**
 * Execute a MongoDB operation with automatic connection management and performance logging
 *
 * This helper function ensures MongoDB is connected, executes the operation,
 * logs slow operations, and handles errors consistently.
 *
 * @param operation - A function that performs the MongoDB operation (using mongoose models)
 * @param operationName - Optional name for logging purposes
 * @returns The result of the operation
 *
 * @example
 * // Using with a model
 * const User = mongoose.model('User', userSchema);
 * const users = await query(() => User.find({ active: true }), 'findActiveUsers');
 *
 * @example
 * // Using with aggregation
 * const result = await query(() => User.aggregate([
 *   { $match: { status: 'active' } },
 *   { $group: { _id: '$department', count: { $sum: 1 } } }
 * ]), 'userStats');
 */
/*
export async function query<T>(
  operation: () => Promise<T>,
  operationName?: string,
): Promise<T> {
  // Ensure connection is established
  if (mongoose.connection.readyState !== 1) {
    await connectMongoDB();
  }

  const start = Date.now();
  const opName = operationName || 'MongoDB operation';

  try {
    const result = await operation();
    const duration = Date.now() - start;

    // Log slow operations (over 1 second)
    if (duration > 1000) {
      console.warn(`Slow MongoDB operation (${duration}ms): ${opName}`);
    }

    return result;
  } catch (error) {
    console.error(`MongoDB operation error (${opName}):`, error);
    throw error;
  }
}
*/

// Placeholder exports (remove when uncommenting above)
export const connectMongoDB = async () => {
  throw new Error(
    'MongoDB connection not implemented. Uncomment the code in src/config/database/mongodb.ts'
  );
};
