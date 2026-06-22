/**
 * Retries a database operation on failure.
 * Specifically useful for Neon serverless Postgres which may timeout on cold starts.
 */
export async function withRetry<T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  baseDelayMs: number = 1000
): Promise<T> {
  let attempt = 0;
  while (attempt < maxRetries) {
    try {
      return await operation();
    } catch (error: any) {
      attempt++;
      if (attempt >= maxRetries) {
        throw error;
      }
      
      const message = error?.message || String(error);
      console.warn(`[DB RETRY] Operation failed (${message}). Retrying attempt ${attempt}/${maxRetries - 1}...`);
      
      // Exponential backoff
      const delay = baseDelayMs * Math.pow(2, attempt - 1);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw new Error('Unreachable code in withRetry');
}
