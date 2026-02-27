import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

export const subscribeRatelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, '1 h'), // 3 inscrições por hora por IP
  prefix: 'ratelimit:subscribe',
});
