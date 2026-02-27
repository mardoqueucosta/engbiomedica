'use client';

import { useState, useCallback, FormEvent } from 'react';
import { CheckCircle } from 'lucide-react';
import { Turnstile } from '@/components/ui/Turnstile';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function ContatoForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const onTurnstileVerify = useCallback((token: string) => setTurnstileToken(token), []);
  const onTurnstileExpire = useCallback(() => setTurnstileToken(''), []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message, website: honeypot, turnstileToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Erro ao enviar mensagem.');
      }

      setStatus('success');
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'contato_envio', {
          event_category: 'engajamento',
          event_label: 'formulario_contato',
        });
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Erro inesperado.');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-teal-500" />
        </div>
        <h3 className="text-h3 text-slate-900 mb-2">Mensagem enviada!</h3>
        <p className="text-body-sm text-slate-500 font-serif">
          Obrigado pelo contato. Responderemos o mais breve possível.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            Nome
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors"
          />
        </div>
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
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors"
          />
        </div>
      </div>
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ position: 'absolute', left: '-9999px' }}
        tabIndex={-1}
        autoComplete="off"
      />
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
          Assunto
        </label>
        <select
          id="subject"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors"
        >
          <option value="">Selecione um assunto</option>
          <option value="duvida">Dúvida sobre conteúdo</option>
          <option value="sugestao">Sugestão de tema ou melhoria</option>
          <option value="parceria">Parceria ou colaboração</option>
          <option value="correcao">Correção de informação</option>
          <option value="glossario">Sugerir termo para o glossário</option>
          <option value="outro">Outro</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          Mensagem
        </label>
        <textarea
          id="message"
          rows={5}
          required
          placeholder="Escreva sua mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors resize-none"
        />
      </div>
      <Turnstile onVerify={onTurnstileVerify} onExpire={onTurnstileExpire} />
      {status === 'error' && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 bg-primary-700 text-white rounded-lg font-semibold text-sm hover:bg-primary-800 transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar mensagem'}
      </button>
    </form>
  );
}
