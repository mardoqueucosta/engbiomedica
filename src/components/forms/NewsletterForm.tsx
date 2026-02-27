'use client';

import { useState, useCallback, FormEvent } from 'react';
import { Turnstile } from '@/components/ui/Turnstile';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileError, setTurnstileError] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const onTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
    setTurnstileError(false);
  }, []);
  const onTurnstileExpire = useCallback(() => setTurnstileToken(''), []);
  const onTurnstileError = useCallback(() => {
    setTurnstileToken('');
    setTurnstileError(true);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName: nome, turnstileToken }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'newsletter_inscricao', {
            event_category: 'engajamento',
            event_label: 'formulario_newsletter',
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
      <div className="p-6 bg-teal-50 rounded-lg border border-teal-200">
        <p className="text-teal-800 font-medium">
          Confira seu email para confirmar a inscrição!
        </p>
        <p className="text-sm text-teal-600 mt-1">
          Enviamos um link de confirmação. Verifique também a pasta de spam.
        </p>
      </div>
    );
  }

  const isSubmitDisabled = status === 'loading';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
          Nome
        </label>
        <input
          id="name"
          type="text"
          placeholder="Seu nome (opcional)"
          value={nome}
          onChange={e => setNome(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors"
        />
      </div>
      {/* Honeypot — invisível, bots preenchem automaticamente */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={e => setHoneypot(e.target.value)}
        style={{ position: 'absolute', left: '-9999px' }}
        tabIndex={-1}
        autoComplete="off"
      />
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="seu@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors"
        />
      </div>
      <Turnstile
        onVerify={onTurnstileVerify}
        onExpire={onTurnstileExpire}
        onError={onTurnstileError}
      />
      {turnstileError && (
        <p className="text-sm text-amber-600">
          Verificação anti-spam falhou. Recarregue a página para tentar novamente.
        </p>
      )}
      <button
        type="submit"
        disabled={isSubmitDisabled}
        className="w-full px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold text-sm hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Enviando...' : 'Inscrever-se na newsletter'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}
      <p className="text-xs text-slate-400">
        Ao se inscrever, você concorda com nossa{' '}
        <a href="/privacidade" className="underline">Política de Privacidade</a>.
        Você pode cancelar a qualquer momento.
      </p>
    </form>
  );
}
