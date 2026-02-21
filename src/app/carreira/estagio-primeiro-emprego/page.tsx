import { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ui/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Estágio e Primeiro Emprego — Carreira em Engenharia Biomédica',
  description: 'Como encontrar estágios, preparar currículo, se destacar em processos seletivos e iniciar a carreira em Engenharia Biomédica.',
  alternates: { canonical: '/carreira/estagio-primeiro-emprego' },
};

export default function Page() {
  return (
    <ComingSoonPage
      pillarLabel="Carreira"
      pillarHref="/carreira"
      sectionLabel="Estágio e Primeiro Emprego"
      thirdLink={{ label: 'Empresas e Empregadores', href: '/mercado/empresas' }}
    />
  );
}
