import { Redis } from '@upstash/redis';
import dotenv from 'dotenv';

dotenv.config();

const url =
  import.meta.env?.UPSTASH_REDIS_REST_URL || process.env.UPSTASH_REDIS_REST_URL;
const token =
  import.meta.env?.UPSTASH_REDIS_REST_TOKEN ||
  process.env.UPSTASH_REDIS_REST_TOKEN;

// Initialize Redis only if URL and token are provided
export const redis = url && token ? new Redis({ url, token }) : null;

/**
 * Helper function to safely get data from Redis cache.
 * If Redis is not configured, it returns null and forces a DB query.
 */
export async function getCache<T>(key: string): Promise<T | null> {
  if (!redis) return null;
  try {
    const cached = await redis.get<T>(key);
    // Upstash automatically parses JSON
    if (cached) {
      return typeof cached === 'string' ? JSON.parse(cached) : cached;
    }
    return null;
  } catch (error) {
    console.error('Redis Get Error:', error);
    return null; // Fallback to DB on error
  }
}

/**
 * Helper function to safely set data in Redis cache.
 * @param key The cache key
 * @param data The data to cache
 * @param ttl Time to live in seconds (default: 60s)
 */
export async function setCache(
  key: string,
  data: any,
  ttl: number = 60
): Promise<void> {
  if (!redis) return;
  try {
    // Upstash automatically stringifies objects
    await redis.set(key, data, { ex: ttl });
  } catch (error) {
    console.error('Redis Set Error:', error);
  }
}

/**
 * Helper function to invalidate a cache key
 */
export async function invalidateCache(key: string): Promise<void> {
  if (!redis) return;
  try {
    await redis.del(key);
  } catch (error) {
    console.error('Redis Del Error:', error);
  }
}
