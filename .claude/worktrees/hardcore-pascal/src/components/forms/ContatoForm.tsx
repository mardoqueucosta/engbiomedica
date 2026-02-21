'use client';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function ContatoForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'contato_envio', {
        event_category: 'engajamento',
        event_label: 'formulario_contato',
      });
    }

    // TODO: integrar envio real (API, e-mail service, etc.)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

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
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
          Assunto
        </label>
        <select
          id="subject"
          required
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
          className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="px-6 py-3 bg-primary-700 text-white rounded-lg font-semibold text-sm hover:bg-primary-800 transition-colors"
      >
        Enviar mensagem
      </button>
    </form>
  );
}
