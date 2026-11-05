import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import type { Docente } from '@/data/ppgeb';
import { slugDoDocente } from '@/data/ppgeb-perfis';

function DocenteCard({ d }: { d: Docente }) {
  const slug = slugDoDocente(d.nome);
  const pagina = slug ? `/ppgeb/docentes/${slug}` : null;
  const foto = (
    <Image
      src={d.foto}
      alt={d.nome}
      width={80}
      height={80}
      className="rounded-full object-cover w-[80px] h-[80px] flex-shrink-0"
      unoptimized
    />
  );
  return (
    <div className="card p-5">
      <div className="flex items-center gap-4 mb-3">
        {pagina ? <Link href={pagina} className="flex-shrink-0">{foto}</Link> : foto}
        <div className="min-w-0">
          <h3 className="text-h3 text-slate-900 leading-tight">
            {pagina ? (
              <Link href={pagina} className="hover:text-primary-700 transition-colors">
                {d.nome}
              </Link>
            ) : (
              d.nome
            )}
          </h3>
          {d.coordenador && <Badge variant="teal">Coordenador</Badge>}
          {d.tipo === 'colaborador' && <Badge variant="slate">Colaborador</Badge>}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-3 text-body-sm">
        {d.email && (
          <a
            href={`mailto:${d.email}`}
            className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            {d.email}
          </a>
        )}
        <a
          href={d.lattes}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-teal-700 hover:text-teal-800 transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Currículo Lattes
        </a>
      </div>

      <details className="group">
        <summary className="text-body-sm text-primary-600 cursor-pointer hover:text-primary-700 transition-colors font-medium list-none flex items-center gap-1">
          <span className="group-open:hidden">Ver resumo</span>
          <span className="hidden group-open:inline">Ocultar resumo</span>
        </summary>
        <p className="text-body-sm text-slate-500 font-serif mt-2 leading-relaxed">{d.resumo}</p>
      </details>

      {pagina && (
        <Link
          href={pagina}
          className="mt-4 inline-flex items-center gap-1.5 text-body-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors"
        >
          Página do laboratório
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}

/**
 * Grade de docentes do PPGEB. Com `agrupar`, separa permanentes e colaboradores
 * em dois blocos; sem ele, mostra todos juntos (permanentes primeiro).
 */
export function DocentesGrid({ docentes, agrupar = false }: { docentes: Docente[]; agrupar?: boolean }) {
  const permanentes = docentes.filter((d) => d.tipo === 'permanente');
  const colaboradores = docentes.filter((d) => d.tipo === 'colaborador');

  if (!agrupar) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {[...permanentes, ...colaboradores].map((d) => (
          <DocenteCard key={d.nome} d={d} />
        ))}
      </div>
    );
  }

  return (
    <div className="mb-12">
      <h3 className="text-overline uppercase text-teal-700 tracking-[0.12em] mb-3">
        Docentes permanentes ({permanentes.length})
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {permanentes.map((d) => (
          <DocenteCard key={d.nome} d={d} />
        ))}
      </div>
      <h3 className="text-overline uppercase text-teal-700 tracking-[0.12em] mb-3">
        Docentes colaboradores ({colaboradores.length})
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {colaboradores.map((d) => (
          <DocenteCard key={d.nome} d={d} />
        ))}
      </div>
    </div>
  );
}
