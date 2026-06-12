import type { Redis } from '@upstash/redis';

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetInSeconds: number;
}

/**
 * Redis-backed sliding-window rate limiter.
 * @param redisClient  - The Upstash Redis client (may be null if Redis is unconfigured)
 * @param key          - Unique key for this action+identifier (e.g. `rl:login:127.0.0.1`)
 * @param limit        - Maximum allowed requests
 * @param windowSecs   - Time window in seconds
 */
export async function rateLimit(
  redisClient: Redis | null,
  key: string,
  limit: number,
  windowSecs: number
): Promise<RateLimitResult> {
  // If Redis is not configured, always allow (fail open)
  if (!redisClient) {
    return { allowed: true, remaining: limit, resetInSeconds: windowSecs };
  }

  try {
    const current = await redisClient.incr(key);
    if (current === 1) {
      // First request in window — set the TTL
      await redisClient.expire(key, windowSecs);
    }

    const ttl = await redisClient.ttl(key);
    const remaining = Math.max(0, limit - current);

    return {
      allowed: current <= limit,
      remaining,
      resetInSeconds: ttl > 0 ? ttl : windowSecs,
    };
  } catch (err) {
    console.error('[RateLimit Error]', err);
    // Fail open — don't block users if Redis is down
    return { allowed: true, remaining: limit, resetInSeconds: windowSecs };
  }
}

/**
 * Returns a rate-limit key scoped to an IP address.
 */
export function rateLimitKey(action: string, ip: string): string {
  return `rl:${action}:${ip}`;
}

/**
 * Returns a rate-limit key scoped to an email address.
 */
export function rateLimitKeyByEmail(action: string, email: string): string {
  return `rl:${action}:${email.toLowerCase()}`;
}
