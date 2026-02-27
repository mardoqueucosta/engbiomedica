import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ExcluirDadosForm } from './ExcluirDadosForm';

export const metadata: Metadata = {
  title: 'Excluir Meus Dados — Engenharia Biomédica',
  description:
    'Solicite a exclusão permanente dos seus dados pessoais conforme a LGPD Art. 18.',
  alternates: { canonical: '/excluir-dados' },
};

export default function ExcluirDadosPage() {
  return (
    <>
      <PageHeader
        overline="LGPD"
        title="Excluir meus dados"
        description="Exerça seu direito à eliminação de dados pessoais (LGPD Art. 18, VI)."
        breadcrumbs={[
          { label: 'Privacidade', href: '/privacidade' },
          { label: 'Excluir dados' },
        ]}
        centered
      />

      <section className="container-page py-10 lg:py-14">
        <div className="max-w-xl mx-auto">
          <ExcluirDadosForm />
        </div>
      </section>
    </>
  );
}
