async function rateLimit(redisClient, key, limit, windowSecs) {
  if (!redisClient) {
    return { allowed: true, remaining: limit, resetInSeconds: windowSecs };
  }
  try {
    const current = await redisClient.incr(key);
    if (current === 1) {
      await redisClient.expire(key, windowSecs);
    }
    const ttl = await redisClient.ttl(key);
    const remaining = Math.max(0, limit - current);
    return {
      allowed: current <= limit,
      remaining,
      resetInSeconds: ttl > 0 ? ttl : windowSecs
    };
  } catch (err) {
    console.error("[RateLimit Error]", err);
    return { allowed: true, remaining: limit, resetInSeconds: windowSecs };
  }
}
function rateLimitKey(action, ip) {
  return `rl:${action}:${ip}`;
}

export { rateLimitKey as a, rateLimit as r };
