export async function register() {
  // Temporarily disabled to diagnose 502 on Railway
  // if (process.env.NEXT_RUNTIME === 'nodejs') {
  //   await import('../sentry.server.config');
  // }
  // if (process.env.NEXT_RUNTIME === 'edge') {
  //   await import('../sentry.edge.config');
  // }
}

export const onRequestError = async (..._args: unknown[]) => {
  // Temporarily disabled to diagnose 502 on Railway
  // const Sentry = await import('@sentry/nextjs');
  // return Sentry.captureRequestError(...args);
};
