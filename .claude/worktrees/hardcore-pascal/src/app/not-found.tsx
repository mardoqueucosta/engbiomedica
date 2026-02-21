import Link from 'next/link';
import { Home, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionCard } from '@/components/ui/SectionCard';
import { mainNavigation } from '@/data/navigation';

export default function NotFound() {
  return (
    <>
      <PageHeader
        overline="Erro 404"
        title="Página não encontrada"
        description="A página que você procura não existe ou foi movida. Use os links abaixo para navegar pelo portal."
        centered
      />

      <section className="container-page py-10 lg:py-14">
        <h2 className="text-h2 text-primary-800 mb-6 font-serif">
          Explore o portal
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mainNavigation.map((item) => (
            <SectionCard
              key={item.href}
              icon={item.icon!}
              title={item.label}
              description={item.description!}
              href={item.href}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-lg font-semibold text-sm hover:bg-primary-800 transition-colors"
          >
            <Home className="w-4 h-4" />
            Voltar para o início
          </Link>
          <Link
            href="/artigos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold text-sm hover:bg-teal-600 transition-colors"
          >
            Ler artigos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
