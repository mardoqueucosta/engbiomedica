export interface Empresa {
  nome: string;
  stand: string;
  categoriaId: string;
}

export interface CategoriaEmpresa {
  id: string;
  nome: string;
  badgeVariant: 'primary' | 'teal' | 'coral' | 'amber' | 'slate';
  descricao: string;
}
