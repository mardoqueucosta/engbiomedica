export interface Disciplina {
  nome: string;
  carga: string;
  creditos: number;
  descricao: string;
}

export interface Curso {
  slug: string;
  nome: string;
  subtitulo: string;
  tipo: 'mestrado' | 'doutorado';
  descricao: string;
  descricaoLonga: string;
  duracao: string;
  cargaTotal: string;
  creditos: number;
  vagas: number;
  modalidade: string;
  turma: string;
  inicioAulas: string;
  disciplinas: Disciplina[];
  diferenciais: string[];
  moodleSlug: string;
}

export const cursos: Curso[] = [
  {
    slug: 'mestrado-engenharia-biomedica',
    nome: 'Mestrado em Engenharia Biomédica',
    subtitulo: 'Programa de Pós-Graduação',
    tipo: 'mestrado',
    descricao: 'Formação de pesquisadores com domínio de métodos científicos e tecnologias aplicadas à saúde. Dissertação obrigatória.',
    descricaoLonga: 'O Mestrado em Engenharia Biomédica forma pesquisadores e profissionais de excelência na interface entre engenharia, tecnologia e ciências da saúde. O programa desenvolve competências em métodos científicos avançados, instrumentação biomédica, processamento de sinais biológicos e tecnologias aplicadas à saúde. Ao final do curso, o aluno apresenta uma dissertação com contribuição original à área.',
    duracao: '24 meses',
    cargaTotal: '330h',
    creditos: 22,
    vagas: 30,
    modalidade: 'Presencial + EAD',
    turma: '2026.1',
    inicioAulas: 'Março 2026',
    disciplinas: [
      { nome: 'Metodologia Científica e do Ensino Superior', carga: '60h', creditos: 4, descricao: 'Pesquisa científica, redação acadêmica e práticas pedagógicas' },
      { nome: 'Métodos Matemáticos para Análise de Dados', carga: '60h', creditos: 4, descricao: 'Estatística, álgebra linear e aprendizado de máquina' },
      { nome: 'Fundamentos de Citologia e Histologia', carga: '45h', creditos: 3, descricao: 'Estrutura celular, microscopia e engenharia de tecidos' },
      { nome: 'Bioestatística', carga: '60h', creditos: 4, descricao: 'Estatística aplicada à pesquisa biomédica' },
      { nome: 'Princípios de Fisiologia e Eletrofisiologia', carga: '60h', creditos: 4, descricao: 'Sinais bioelétricos, ECG, EEG e EMG' },
      { nome: 'Bioética', carga: '30h', creditos: 2, descricao: 'Ética na pesquisa científica e prática profissional' },
    ],
    diferenciais: [
      'Corpo docente com experiência internacional',
      'Laboratórios de instrumentação biomédica e processamento de sinais',
      'Parcerias com hospitais e centros de pesquisa',
      'Programa reconhecido pela CAPES',
      'Possibilidade de bolsas de estudo',
      'Ambiente de pesquisa interdisciplinar',
    ],
    moodleSlug: 'mestrado',
  },
  {
    slug: 'doutorado-engenharia-biomedica',
    nome: 'Doutorado em Engenharia Biomédica',
    subtitulo: 'Programa de Pós-Graduação',
    tipo: 'doutorado',
    descricao: 'Formação de pesquisadores autônomos com capacidade de gerar conhecimento original na fronteira da engenharia biomédica.',
    descricaoLonga: 'O Doutorado em Engenharia Biomédica forma pesquisadores autônomos capazes de gerar conhecimento original na fronteira entre engenharia e ciências da saúde. O programa aprofunda competências em pesquisa avançada, inovação tecnológica e liderança científica. O doutorando desenvolve uma tese com contribuição inédita e relevante para a área.',
    duracao: '48 meses',
    cargaTotal: '330h',
    creditos: 22,
    vagas: 15,
    modalidade: 'Presencial + EAD',
    turma: '2026.1',
    inicioAulas: 'Março 2026',
    disciplinas: [
      { nome: 'Tópicos Avançados em Engenharia Biomédica', carga: '60h', creditos: 4, descricao: 'Bioinstrumentação, IA em saúde e nanotecnologia' },
      { nome: 'Métodos Matemáticos para Análise de Dados', carga: '60h', creditos: 4, descricao: 'Estatística, álgebra linear e aprendizado de máquina' },
      { nome: 'Fundamentos de Citologia e Histologia', carga: '45h', creditos: 3, descricao: 'Estrutura celular, microscopia e engenharia de tecidos' },
      { nome: 'Bioestatística', carga: '60h', creditos: 4, descricao: 'Estatística aplicada à pesquisa biomédica' },
      { nome: 'Princípios de Fisiologia e Eletrofisiologia', carga: '60h', creditos: 4, descricao: 'Sinais bioelétricos, ECG, EEG e EMG' },
      { nome: 'Seminários em Engenharia Biomédica', carga: '30h', creditos: 2, descricao: 'Comunicação científica e análise crítica' },
    ],
    diferenciais: [
      'Linhas de pesquisa na fronteira do conhecimento',
      'Acesso a infraestrutura de pesquisa avançada',
      'Colaborações internacionais ativas',
      'Programa reconhecido pela CAPES',
      'Possibilidade de estágio doutoral no exterior',
      'Formação para carreira acadêmica e P&D',
    ],
    moodleSlug: 'doutorado',
  },
];

export function getCurso(slug: string): Curso | undefined {
  return cursos.find((c) => c.slug === slug);
}

export function getAllCursoSlugs(): string[] {
  return cursos.map((c) => c.slug);
}
