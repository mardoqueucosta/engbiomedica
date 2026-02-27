'use client';

import { useState, FormEvent } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function HomeNewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName: '' }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'newsletter_inscricao', {
            event_category: 'engajamento',
            event_label: 'formulario_home',
          });
        }
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Erro ao processar inscrição.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Erro de conexão. Tente novamente.');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-4 bg-teal-900/30 rounded-lg border border-teal-700 max-w-md mx-auto">
        <p className="text-teal-200 font-medium text-sm">
          Confira seu email para confirmar a inscrição!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="seu@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg bg-primary-900 border border-primary-700 text-white placeholder-primary-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold text-sm hover:bg-teal-600 transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? 'Enviando...' : 'Inscrever-se'}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-sm text-red-400 mt-2">{errorMsg}</p>
      )}
    </div>
  );
}
