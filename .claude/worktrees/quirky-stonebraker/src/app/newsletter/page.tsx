import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { NewsletterForm } from '@/components/forms/NewsletterForm';
import { ArrowLeft, Mail, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Newsletter — Engenharia Biomédica',
  description:
    'Receba artigos, dados de mercado, eventos e oportunidades sobre Engenharia Biomédica diretamente no seu e-mail. Gratuito e sem spam.',
  alternates: { canonical: '/newsletter' },
  openGraph: {
    images: [{ url: '/api/og?title=Newsletter%20%E2%80%94%20Engenharia%20Biom%C3%A9dica&category=Newsletter', width: 1200, height: 630 }],
  },
};

export default function NewsletterPage() {
  return (
    <>
      <PageHeader
        overline="Newsletter"
        title="Fique por dentro da Engenharia Biomédica"
        description="Artigos, dados de mercado, eventos e oportunidades — direto no seu e-mail, gratuitamente."
        breadcrumbs={[{ label: 'Newsletter' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="max-w-xl mx-auto">
          {/* Form card */}
          <div className="card p-8">
            <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
              <Mail className="w-6 h-6 text-primary-600" />
            </div>

            <h2 className="text-h2 text-slate-900 mb-2">Inscreva-se gratuitamente</h2>
            <p className="text-body-sm text-slate-500 font-serif mb-6">
              Enviamos no máximo 2 e-mails por mês com o melhor conteúdo sobre a área. Sem spam — cancele quando quiser.
            </p>

            <NewsletterForm />
          </div>

          {/* Benefits */}
          <div className="mt-8 space-y-3">
            <h3 className="text-h4 text-slate-700 mb-3">O que você vai receber:</h3>
            {[
              'Análises de mercado e dados salariais atualizados',
              'Guias práticos sobre carreira e regulamentação',
              'Novos cursos, eventos e oportunidades na área',
              'Tendências em healthtech e dispositivos médicos',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span className="text-body-sm text-slate-600 font-serif">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao portal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
