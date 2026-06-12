import { Redis } from '@upstash/redis';
import dotenv from 'dotenv';

dotenv.config();
const url = "https://willing-roughy-66142.upstash.io";
const token = "gQAAAAAAAQJeAAIgcDI5ODE3NmJhYTVmYWI0MWJjOTczZWU3MmExYjJiOTczMA";
const redis = new Redis({ url, token }) ;
async function getCache(key) {
  if (!redis) return null;
  try {
    const cached = await redis.get(key);
    if (cached) {
      return typeof cached === "string" ? JSON.parse(cached) : cached;
    }
    return null;
  } catch (error) {
    console.error("Redis Get Error:", error);
    return null;
  }
}
async function setCache(key, data, ttl = 60) {
  if (!redis) return;
  try {
    await redis.set(key, data, { ex: ttl });
  } catch (error) {
    console.error("Redis Set Error:", error);
  }
}
async function invalidateCache(key) {
  if (!redis) return;
  try {
    await redis.del(key);
  } catch (error) {
    console.error("Redis Del Error:", error);
  }
}

export { getCache as g, invalidateCache as i, redis as r, setCache as s };
