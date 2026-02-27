import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

let _ratelimit: Ratelimit | null = null;

export function getSubscribeRatelimit() {
  if (!_ratelimit) {
    _ratelimit = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(3, '1 h'), // 3 inscrições por hora por IP
      prefix: 'ratelimit:subscribe',
    });
  }
  return _ratelimit;
}
