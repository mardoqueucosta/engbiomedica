'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { XCircle, ArrowLeft, CheckCircle, Mail } from 'lucide-react';

export function UnsubscribeForm() {
  const searchParams = useSearchParams();
  const emailParam = searchParams.get('email') || '';

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleUnsubscribe() {
    if (!emailParam) {
      setErrorMsg('Email não identificado. Use o link do email da newsletter.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailParam }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Erro ao cancelar inscrição');
      }

      setStatus('success');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Erro inesperado');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="card p-8">
        <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-teal-500" />
        </div>
        <h2 className="text-h2 text-slate-900 mb-3">Inscrição cancelada</h2>
        <p className="text-body-sm text-slate-500 font-serif mb-6">
          Você não receberá mais emails da nossa newsletter.
          Sentiremos sua falta! Caso mude de ideia, pode se inscrever
          novamente a qualquer momento.
        </p>
        <Link
          href="/newsletter"
          className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold text-sm hover:bg-teal-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para a newsletter
        </Link>
      </div>
    );
  }

  return (
    <div className="card p-8">
      <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-5">
        <Mail className="w-8 h-8 text-red-400" />
      </div>

      <h2 className="text-h2 text-slate-900 mb-3">Deseja cancelar?</h2>

      {emailParam ? (
        <p className="text-body-sm text-slate-500 font-serif mb-6">
          Você está cancelando a inscrição do email{' '}
          <span className="font-semibold text-slate-700">{emailParam}</span>.
          Após confirmar, você não receberá mais nossa newsletter.
        </p>
      ) : (
        <p className="text-body-sm text-slate-500 font-serif mb-6">
          Use o link de cancelamento presente no rodapé dos emails da newsletter.
        </p>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-600 text-sm mb-4 justify-center">
          <XCircle className="w-4 h-4" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 text-slate-600 rounded-lg font-semibold text-sm hover:bg-slate-50 transition-colors"
        >
          Manter inscrição
        </Link>
        {emailParam && (
          <button
            onClick={handleUnsubscribe}
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg font-semibold text-sm hover:bg-red-600 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Cancelando...' : 'Confirmar cancelamento'}
          </button>
        )}
      </div>
    </div>
  );
}
