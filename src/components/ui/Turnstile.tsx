'use client';

import { useEffect, useRef, useCallback } from 'react';

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

interface TurnstileProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: (errorCode?: string) => void;
}

export function Turnstile({ onVerify, onExpire, onError }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const mountedRef = useRef(true);

  const renderWidget = useCallback(() => {
    if (!containerRef.current || !window.turnstile) return;

    // Remove existing widget before re-rendering
    if (widgetIdRef.current) {
      window.turnstile.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    }

    if (!mountedRef.current) return;

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
      callback: (token: string) => onVerify(token),
      'expired-callback': () => onExpire?.(),
      'error-callback': (errorCode: string) => {
        console.error('[TURNSTILE] Widget error:', errorCode);
        onError?.(errorCode);
      },
      retry: 'auto',
      'retry-interval': 3000,
      theme: 'light',
      size: 'normal',
    });
  }, [onVerify, onExpire, onError]);

  useEffect(() => {
    mountedRef.current = true;
    let intervalId: ReturnType<typeof setInterval> | null = null;

    const scriptExists = document.querySelector('script[src*="challenges.cloudflare.com/turnstile"]');

    if (!scriptExists) {
      // Load Turnstile script with onload callback
      const callbackName = 'onTurnstileLoad';
      window[callbackName] = () => {
        if (mountedRef.current) renderWidget();
      };

      const script = document.createElement('script');
      script.src = `https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=${callbackName}`;
      script.async = true;
      document.head.appendChild(script);
    } else if (window.turnstile) {
      // Script already loaded and ready
      renderWidget();
    } else {
      // Script exists but still loading — poll until ready
      intervalId = setInterval(() => {
        if (window.turnstile) {
          if (intervalId) clearInterval(intervalId);
          intervalId = null;
          if (mountedRef.current) renderWidget();
        }
      }, 100);
    }

    // Unified cleanup for all paths
    return () => {
      mountedRef.current = false;
      if (intervalId) clearInterval(intervalId);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget]);

  return <div ref={containerRef} />;
}
