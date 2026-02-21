import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, FileCheck, BookOpen } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Regulamentação — Engenharia Biomédica',
  description: 'Regulamentação profissional (CONFEA/CREA), dispositivos médicos (ANVISA) e normas técnicas (IEC 60601, ISO 13485) da Engenharia Biomédica no Brasil.',
  alternates: { canonical: '/regulamentacao' },
  openGraph: {
    images: [{ url: '/api/og?title=Regulamenta%C3%A7%C3%A3o%20%E2%80%94%20Engenharia%20Biom%C3%A9dica&category=Regulamenta%C3%A7%C3%A3o', width: 1200, height: 630 }],
  },
};

const sections = [
  { title: 'CONFEA/CREA', desc: 'Registro profissional, atribuições e competências do engenheiro biomédico.', href: '/artigos/registro-crea-engenheiro-biomedico', icon: Shield },
  { title: 'ANVISA', desc: 'Regulação de dispositivos médicos: classes de risco, registro e tecnovigilância.', href: '/artigos/anvisa-dispositivos-medicos-regulamentacao', icon: FileCheck },
  { title: 'Normas Técnicas', desc: 'IEC 60601, ISO 13485, ISO 14971 e legislação fundamental.', href: '/artigos/normas-tecnicas-engenharia-biomedica', icon: BookOpen },
];

export default function RegulamentacaoPage() {
  return (
    <>
      <PageHeader
        overline="Regulamentação"
        title="O arcabouço regulatório da Engenharia Biomédica"
        description="A profissão é regulamentada pelo CONFEA/CREA desde 2008 e foi reconhecida pelo Ministério do Trabalho em 2022. Dispositivos médicos seguem a ANVISA e normas internacionais."
        breadcrumbs={[{ label: 'Regulamentação' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="grid gap-4 lg:grid-cols-3 mb-12">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="card p-6 group block">
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center mb-3 group-hover:bg-primary-100 transition-colors">
                <s.icon className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-h3 text-slate-900 mb-1 group-hover:text-primary-700 transition-colors">{s.title}</h2>
              <p className="text-body-sm text-slate-500 font-serif">{s.desc}</p>
            </Link>
          ))}
        </div>

        <div className="p-6 rounded-xl bg-coral-100 border border-coral-300">
          <h3 className="text-h4 text-coral-500 mb-2">Engenheiro Biomédico ≠ Biomédico</h3>
          <p className="text-body-sm text-slate-700 font-serif">
            São profissões distintas. O <strong>Biomédico</strong> é regulamentado pela Lei 6.684/1979 e fiscalizado pelo CFBM/CRBM (profissional de saúde — análises clínicas, imagenologia). O <strong>Engenheiro Biomédico</strong> é regulamentado como modalidade de engenharia sob a Lei 5.194/1966 e fiscalizado pelo CONFEA/CREA (profissional de engenharia na interface com a saúde).
          </p>
        </div>
      </section>
    </>
  );
}
