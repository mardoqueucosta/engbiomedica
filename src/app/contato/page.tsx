import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { Mail, MessageSquare, MapPin, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contato — Engenharia Biomédica',
  description:
    'Entre em contato com a equipe do portal engenhariabiomedica.com. Dúvidas, sugestões, parcerias e colaborações.',
};

export default function ContatoPage() {
  return (
    <>
      <PageHeader
        overline="Contato"
        title="Fale conosco"
        description="Tem dúvidas, sugestões ou quer colaborar com o portal? Entre em contato."
        breadcrumbs={[{ label: 'Contato' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl">
          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h2 className="text-h2 text-slate-900 mb-5">Envie sua mensagem</h2>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Nome
                    </label>
                    <input
                      id="name"
                      type="text"
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
            </div>
          </div>

          {/* Sidebar info */}
          <div className="space-y-4">
            <div className="card p-5">
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center mb-3">
                <Mail className="w-5 h-5 text-primary-600" />
              </div>
              <h3 className="text-h4 text-slate-900 mb-1">E-mail</h3>
              <p className="text-body-sm text-slate-500 font-serif">
                contato@engenhariabiomedica.com
              </p>
            </div>

            <div className="card p-5">
              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-3">
                <MessageSquare className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-h4 text-slate-900 mb-1">Sugestões</h3>
              <p className="text-body-sm text-slate-500 font-serif">
                Quer sugerir um tema, corrigir uma informação ou indicar um termo para o glossário? Use o formulário ao lado.
              </p>
            </div>

            <div className="card p-5">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-h4 text-slate-900 mb-1">Origem</h3>
              <p className="text-body-sm text-slate-500 font-serif">
                PPGEB — Universidade Brasil
                <br />
                Em parceria com ESALQ/USP
              </p>
            </div>

            <div className="mt-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar ao portal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
