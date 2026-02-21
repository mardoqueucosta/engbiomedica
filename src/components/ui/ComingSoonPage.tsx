import Link from 'next/link';
import { PageHeader } from './PageHeader';

interface ComingSoonPageProps {
  pillarLabel: string;
  pillarHref: string;
  sectionLabel: string;
  thirdLink?: { label: string; href: string };
}

export function ComingSoonPage({ pillarLabel, pillarHref, sectionLabel, thirdLink }: ComingSoonPageProps) {
  return (
    <>
      <PageHeader
        overline={pillarLabel}
        title={sectionLabel}
        description="Conteúdo em desenvolvimento — disponível em breve."
        breadcrumbs={[
          { label: pillarLabel, href: pillarHref },
          { label: sectionLabel },
        ]}
      />

      <section className="container-page py-10 lg:py-14">
        <div className="card p-8 max-w-2xl">
          <p className="text-body text-slate-600 font-serif mb-6">
            Este artigo está sendo desenvolvido pela equipe do engenhariabiomedica.com.
            Inscreva-se na nossa newsletter para ser notificado quando for publicado.
          </p>
          <Link
            href="/newsletter"
            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-primary-700 rounded-lg hover:bg-primary-800 transition-colors"
          >
            Receber notificação
          </Link>
        </div>

        <div className="mt-10">
          <h2 className="text-h3 text-primary-800 mb-4 font-serif">Enquanto isso, explore:</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/artigos/guia-engenharia-biomedica" className="text-primary-600 hover:text-primary-800 font-medium transition-colors">
                Guia Definitivo de Engenharia Biomédica
              </Link>
            </li>
            <li>
              <Link href="/artigos/areas-atuacao-engenharia-biomedica" className="text-primary-600 hover:text-primary-800 font-medium transition-colors">
                As 12 Áreas de Atuação
              </Link>
            </li>
            {thirdLink && (
              <li>
                <Link href={thirdLink.href} className="text-primary-600 hover:text-primary-800 font-medium transition-colors">
                  {thirdLink.label}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </section>
    </>
  );
}
