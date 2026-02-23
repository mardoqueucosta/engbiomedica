import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Publicação Científica — Pesquisa — Engenharia Biomédica',
  description: 'Guia de publicação científica para pesquisadores e pós-graduandos em Engenharia Biomédica no Brasil: revistas, fator de impacto e boas práticas.',
  alternates: { canonical: '/pesquisa/publicacao-cientifica' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Pesquisa"
      pillarHref="/pesquisa"
      sectionLabel="Publicação Científica"
      thirdLink={{ label: 'Centros de Pesquisa', href: '/artigos/centros-pesquisa-engbiomedica-mapa' }}
    />
  );
}
