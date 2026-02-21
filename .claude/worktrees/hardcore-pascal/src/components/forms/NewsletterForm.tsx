'use client';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function NewsletterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'newsletter_inscricao', {
        event_category: 'engajamento',
        event_label: 'formulario_newsletter',
      });
    }

    // TODO: integrar com serviço de e-mail (Mailchimp, Resend, etc.)
    alert('Inscrição realizada com sucesso! Você receberá nosso próximo envio.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
          Nome
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder="Seu nome"
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
          className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors"
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold text-sm hover:bg-teal-600 transition-colors"
      >
        Inscrever-se na newsletter
      </button>
    </form>
  );
}
