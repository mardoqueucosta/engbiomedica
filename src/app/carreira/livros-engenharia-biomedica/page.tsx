import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Livros Essenciais — Carreira em Engenharia Biomédica',
  description: 'Bibliografia fundamental em engenharia biomédica: livros-texto, referências técnicas e leituras recomendadas para todas as fases da carreira.',
  alternates: { canonical: '/carreira/livros-engenharia-biomedica' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Carreira"
      pillarHref="/carreira"
      sectionLabel="Livros Essenciais"
    />
  );
}
