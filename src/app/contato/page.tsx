import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { ContatoForm } from '@/components/forms/ContatoForm';
import { Mail, MessageSquare, MapPin, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contato — Engenharia Biomédica',
  description:
    'Entre em contato com a equipe do portal engenhariabiomedica.com. Dúvidas, sugestões, parcerias e colaborações.',
  alternates: { canonical: '/contato' },
  openGraph: {
    images: [{ url: '/api/og?title=Contato%20%E2%80%94%20Engenharia%20Biom%C3%A9dica&category=Contato', width: 1200, height: 630 }],
  },
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
              <ContatoForm />
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
                mardoqueu.costa@ub.edu.br
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
              <h3 className="text-h4 text-slate-900 mb-1">Idealizador</h3>
              <p className="text-body-sm text-slate-500 font-serif">
                Mardoqueu M. Costa
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
