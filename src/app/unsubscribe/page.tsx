import { Metadata } from 'next';
import { Suspense } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { UnsubscribeForm } from './UnsubscribeForm';

export const metadata: Metadata = {
  title: 'Cancelar inscrição — Engenharia Biomédica',
  description: 'Cancele sua inscrição na newsletter de Engenharia Biomédica.',
};

export default function UnsubscribePage() {
  return (
    <>
      <PageHeader
        overline="Newsletter"
        title="Cancelar inscrição"
        description="Gerenciamento da sua inscrição na newsletter."
        breadcrumbs={[
          { label: 'Newsletter', href: '/newsletter' },
          { label: 'Cancelar inscrição' },
        ]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="max-w-xl mx-auto text-center">
          <Suspense fallback={<div className="card p-8 text-slate-400">Carregando...</div>}>
            <UnsubscribeForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
