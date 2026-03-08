import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ArticleSearch } from '@/components/search/ArticleSearch';
import { listaArtigos } from '@/data/artigos';

export const metadata: Metadata = {
  title: 'Artigos',
  description:
    'Artigos, análises e guias sobre tendências, carreira e inovação em Engenharia Biomédica no Brasil.',
  alternates: {
    canonical: '/artigos',
  },
  openGraph: {
    images: [
      {
        url: '/api/og?title=Artigos+e+An%C3%A1lises&category=Portal',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ArtigosPage() {
  return (
    <>
      <PageHeader
        overline="Artigos"
        title="Artigos e Análises"
        description="Tendências, guias práticos e análises de mercado sobre Engenharia Biomédica no Brasil e no mundo."
        breadcrumbs={[{ label: 'Artigos' }]}
      />
      <ArticleSearch articles={JSON.parse(JSON.stringify(listaArtigos))} />
    </>
  );
}
