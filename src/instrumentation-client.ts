import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Captura 100% dos erros, amostra 10% das transações (performance)
  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 1.0,

  // Ignora erros irrelevantes do browser
  ignoreErrors: [
    'ResizeObserver loop',
    'Non-Error promise rejection',
    'Load failed',
    'Failed to fetch',
    'NetworkError',
    'AbortError',
  ],

  // Só ativa se o DSN estiver configurado
  enabled: !!process.env.NEXT_PUBLIC_SENTRY_DSN,
});
