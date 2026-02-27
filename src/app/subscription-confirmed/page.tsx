import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Inscrição Confirmada — Engenharia Biomédica',
  description: 'Sua inscrição na newsletter de Engenharia Biomédica foi confirmada com sucesso.',
};

export default function SubscriptionConfirmedPage() {
  return (
    <>
      <PageHeader
        overline="Newsletter"
        title="Inscrição confirmada!"
        description="Você agora faz parte da nossa comunidade."
        breadcrumbs={[
          { label: 'Newsletter', href: '/newsletter' },
          { label: 'Confirmado' },
        ]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="max-w-xl mx-auto text-center">
          <div className="card p-8">
            <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-8 h-8 text-teal-500" />
            </div>

            <h2 className="text-h2 text-slate-900 mb-3">Tudo certo!</h2>
            <p className="text-body-sm text-slate-500 font-serif mb-4">
              Sua inscrição foi confirmada com sucesso. Você receberá nossos conteúdos
              sobre Engenharia Biomédica diretamente no seu email.
            </p>
            <p className="text-body-sm text-slate-500 font-serif mb-6">
              Enviamos no máximo 2 emails por mês. Você pode cancelar a qualquer momento
              através do link no rodapé dos nossos emails.
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold text-sm hover:bg-teal-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Explorar o portal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
