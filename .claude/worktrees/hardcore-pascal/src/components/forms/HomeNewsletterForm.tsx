'use client';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function HomeNewsletterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'newsletter_inscricao', {
        event_category: 'engajamento',
        event_label: 'formulario_home',
      });
    }

    // TODO: integrar com serviço de e-mail (Mailchimp, Resend, etc.)
    alert('Inscrição realizada com sucesso! Você receberá nosso próximo envio.');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        required
        placeholder="seu@email.com"
        className="flex-1 px-4 py-3 rounded-lg bg-primary-900 border border-primary-700 text-white placeholder-primary-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold text-sm hover:bg-teal-600 transition-colors"
      >
        Inscrever-se
      </button>
    </form>
  );
}
