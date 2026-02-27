'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Trash2, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

export function ExcluirDadosForm() {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const emailsMatch = email.length > 0 && email === confirmEmail;
  const canSubmit = emailsMatch && accepted && status !== 'loading';

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/delete-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Erro ao excluir dados.');
      }

      setStatus('success');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Erro inesperado');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="card p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-teal-500" />
        </div>
        <h2 className="text-h2 text-slate-900 mb-3">Dados excluídos</h2>
        <p className="text-body-sm text-slate-500 font-serif mb-2">
          Todos os dados associados ao email <span className="font-semibold text-slate-700">{email}</span> foram
          removidos permanentemente dos nossos sistemas.
        </p>
        <p className="text-body-sm text-slate-500 font-serif mb-6">
          Se desejar voltar a receber nossa newsletter no futuro, será necessário
          realizar uma nova inscrição.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-lg font-semibold text-sm hover:bg-primary-800 transition-colors"
        >
          Voltar ao portal
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8 text-left">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
          <Trash2 className="w-6 h-6 text-red-400" />
        </div>
        <div>
          <h2 className="text-h3 text-slate-900">Exclusão permanente de dados</h2>
          <p className="text-body-sm text-slate-500 font-serif">
            Conforme LGPD Art. 18, VI
          </p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
        <div className="flex gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-sm text-amber-800">
            <p className="font-semibold mb-1">Atenção: esta ação é irreversível</p>
            <p>
              Ao solicitar a exclusão, todos os seus dados serão apagados permanentemente,
              incluindo email, nome, preferências e histórico de inscrição. Não será possível
              recuperá-los.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="delete-email" className="block text-sm font-medium text-slate-700 mb-1">
            E-mail cadastrado
          </label>
          <input
            id="delete-email"
            type="email"
            required
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-300 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="confirm-email" className="block text-sm font-medium text-slate-700 mb-1">
            Confirme o e-mail
          </label>
          <input
            id="confirm-email"
            type="email"
            required
            placeholder="repita seu@email.com"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-300 transition-colors"
          />
          {confirmEmail.length > 0 && !emailsMatch && (
            <p className="text-xs text-red-500 mt-1">Os e-mails não coincidem.</p>
          )}
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded border-slate-300 text-red-500 focus:ring-red-300"
          />
          <span className="text-sm text-slate-600">
            Compreendo que esta ação é <strong>irreversível</strong> e que todos os meus dados
            serão apagados permanentemente.
          </span>
        </label>
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-600 text-sm mb-4">
          <XCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full px-6 py-3 bg-red-500 text-white rounded-lg font-semibold text-sm hover:bg-red-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Excluindo dados...' : 'Excluir meus dados permanentemente'}
      </button>

      <p className="text-xs text-slate-400 mt-4 text-center">
        Dúvidas? Entre em contato com o DPO:{' '}
        <a href="mailto:privacidade@engenhariabiomedica.com" className="underline">
          privacidade@engenhariabiomedica.com
        </a>
      </p>
    </form>
  );
}
