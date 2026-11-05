/**
 * Conteúdo à direita da capa azul (PageHeader).
 * As capas não usam imagens tiradas dos artigos (esquemas e infográficos não funcionam ali);
 * só o PPGEB mostra as fotos dos docentes.
 */
import { docentes } from '@/data/ppgeb';
import type { ImagemPalco } from '@/components/ui/PalcoImagens';

/** Fotos dos docentes do PPGEB (até 10), para a capa das páginas do programa. */
export function fotosDocentes(quantidade = 10): ImagemPalco[] {
  return docentes.slice(0, quantidade).map((d) => ({ src: d.foto, alt: d.nome }));
}
