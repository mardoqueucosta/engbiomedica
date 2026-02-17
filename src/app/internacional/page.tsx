import { Metadata } from 'next';
import Link from 'next/link';
import { Globe2, Database } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { StatCard } from '@/components/ui/StatCard';

export const metadata: Metadata = {
  title: 'Referência Internacional — Engenharia Biomédica',
  description:
    'Panorama da Engenharia Biomédica nos EUA como benchmark internacional: mercado de US$ 188–256 bilhões, 400+ programas ABET e repositórios acadêmicos globais.',
  alternates: { canonical: '/internacional' },
  openGraph: {
    images: [{ url: '/api/og?title=Refer%C3%AAncia%20Internacional%20%E2%80%94%20Engenharia%20Biom%C3%A9dica&category=Internacional', width: 1200, height: 630 }],
  },
};

export default function InternacionalPage() {
  return (
    <>
      <PageHeader
        overline="Internacional"
        title="Referência EUA e Internacional"
        description="O ecossistema norte-americano como benchmark: formação, mercado, regulação FDA, financiamento e os principais repositórios acadêmicos globais."
        breadcrumbs={[{ label: 'Internacional' }]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <StatCard number="US$ 256 bi" label="Mercado Medtech EUA" accent />
          <StatCard number="400+" label="Programas ABET" />
          <StatCard number="1.250+" label="Dispositivos IA (FDA)" />
          <StatCard number="US$ 7,5 bi" label="VC Medtech 2024" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mb-12">
          <Link href="/artigos/engenharia-biomedica-eua-vs-brasil" className="card p-6 group block">
            <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center mb-3 group-hover:bg-primary-100 transition-colors">
              <Globe2 className="w-5 h-5 text-primary-600" />
            </div>
            <h2 className="text-h3 text-slate-900 mb-1 group-hover:text-primary-700 transition-colors">
              Panorama EUA
            </h2>
            <p className="text-body-sm text-slate-500 font-serif">
              Formação acadêmica (acreditação ABET), mercado de US$ 188–256 bilhões, regulação FDA, venture capital e hubs de inovação.
            </p>
          </Link>
          <Link href="/internacional/repositorios" className="card p-6 group block">
            <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-3 group-hover:bg-teal-100 transition-colors">
              <Database className="w-5 h-5 text-teal-600" />
            </div>
            <h2 className="text-h3 text-slate-900 mb-1 group-hover:text-primary-700 transition-colors">
              Repositórios Acadêmicos
            </h2>
            <p className="text-body-sm text-slate-500 font-serif">
              PubMed, Scopus, IEEE Xplore, Web of Science e outros repositórios essenciais para pesquisa em Engenharia Biomédica.
            </p>
          </Link>
        </div>

        <h2 className="text-h2 text-primary-800 mb-4">
          Brasil × EUA em Números
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-body-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 pr-4 text-h4 text-slate-900">Indicador</th>
                <th className="text-left py-3 px-4 text-h4 text-slate-900">Brasil</th>
                <th className="text-left py-3 pl-4 text-h4 text-slate-900">EUA</th>
              </tr>
            </thead>
            <tbody className="font-serif text-slate-600">
              <tr className="border-b border-slate-100">
                <td className="py-3 pr-4">Cursos de graduação</td>
                <td className="py-3 px-4">28+</td>
                <td className="py-3 pl-4">400+ (ABET-acreditados)</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 pr-4">Duração da graduação</td>
                <td className="py-3 px-4">5 anos</td>
                <td className="py-3 pl-4">4 anos (BS)</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 pr-4">Mercado de dispositivos</td>
                <td className="py-3 px-4">R$ 26,1 bi</td>
                <td className="py-3 pl-4">US$ 188–256 bi</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 pr-4">Regulação</td>
                <td className="py-3 px-4">ANVISA (RDC 751/2022)</td>
                <td className="py-3 pl-4">FDA (510(k), PMA, De Novo)</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 pr-4">Registro profissional</td>
                <td className="py-3 px-4">CONFEA/CREA</td>
                <td className="py-3 pl-4">PE License (NCEES)</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 pr-4">Healthtechs</td>
                <td className="py-3 px-4">1.919</td>
                <td className="py-3 pl-4">Dezenas de milhares</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">VC em Medtech (2024)</td>
                <td className="py-3 px-4">~US$ 254 mi (LatAm)</td>
                <td className="py-3 pl-4">US$ 7,5 bi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
