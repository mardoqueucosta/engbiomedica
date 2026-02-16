const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// ============================================
// API Routes
// ============================================

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/programa', (req, res) => {
  res.json({
    nome: 'Programa de Pós-Graduação em Engenharia Biomédica',
    sigla: 'PPGEB',
    instituicao: 'Universidade Brasil',
    coordenador: 'Prof. Dr. Mardoqueu',
    areas: [
      'Instrumentação Biomédica',
      'Processamento de Sinais e Imagens',
      'Biomecânica e Reabilitação',
      'Engenharia Clínica',
      'Ressonância Magnética Nuclear'
    ],
    contato: {
      email: 'ppgeb@universidadebrasil.edu.br',
      site: 'https://engenhariabiomedica.com'
    }
  });
});

app.get('/api/linhas-pesquisa', (req, res) => {
  res.json([
    {
      id: 1,
      titulo: 'Sensores Magnéticos para RMN',
      descricao: 'Desenvolvimento de sensores tipo Halbach para aplicações de Ressonância Magnética Nuclear na agricultura.',
      area: 'Instrumentação'
    },
    {
      id: 2,
      titulo: 'Processamento de Sinais Biomédicos',
      descricao: 'Técnicas avançadas de processamento e análise de sinais fisiológicos.',
      area: 'Sinais e Imagens'
    },
    {
      id: 3,
      titulo: 'Dispositivos de Monitoramento',
      descricao: 'Integração de tecnologias de sensoriamento com ambientes de cultivo controlado.',
      area: 'Agricultura de Precisão'
    }
  ]);
});

const artigos = [
  {
    id: 1,
    slug: 'o-que-e-engenharia-biomedica',
    titulo: 'O que é Engenharia Biomédica?',
    resumo: 'Uma introdução completa à Engenharia Biomédica, seus campos de atuação e como essa área transforma a saúde através da tecnologia.',
    conteudo: `A Engenharia Biomédica é uma área multidisciplinar que aplica princípios de engenharia e ciências exatas para resolver problemas em medicina e biologia. É uma das áreas que mais cresce no mundo, impulsionada pela crescente demanda por tecnologias de saúde mais eficientes e acessíveis.\n\n## Campos de Atuação\n\nO engenheiro biomédico pode atuar em diversas frentes, desde o desenvolvimento de equipamentos médicos até a criação de próteses inteligentes e sistemas de diagnóstico por imagem. Entre as principais áreas estão:\n\n- **Instrumentação Biomédica**: Desenvolvimento de sensores e equipamentos para diagnóstico e monitoramento.\n- **Processamento de Sinais e Imagens**: Análise de sinais fisiológicos (ECG, EEG, EMG) e imagens médicas.\n- **Biomecânica**: Estudo das forças que atuam sobre o corpo humano e desenvolvimento de próteses e órteses.\n- **Engenharia Clínica**: Gestão de tecnologias em ambientes hospitalares.\n- **Engenharia de Reabilitação**: Tecnologias assistivas para pessoas com deficiência.\n\n## Por que estudar Engenharia Biomédica?\n\nA área oferece a oportunidade única de combinar o rigor da engenharia com o propósito de melhorar vidas. O mercado de trabalho é amplo e está em constante expansão, tanto na indústria quanto na pesquisa acadêmica.\n\nO PPGEB da Universidade Brasil forma pesquisadores preparados para os desafios dessa área fascinante, com laboratórios equipados e parcerias com instituições de referência.`,
    autor: 'Prof. Dr. Mardoqueu',
    categoria: 'Introdução',
    data: '16 Fev 2026',
    leitura: '5 min'
  },
  {
    id: 2,
    slug: 'sensores-halbach-rmn-baixo-campo',
    titulo: 'Sensores Halbach para RMN de Baixo Campo',
    resumo: 'Uma revisão sobre o desenvolvimento de arranjos magnéticos tipo Halbach e suas aplicações em sistemas de ressonância magnética nuclear portáteis para análise não destrutiva.',
    conteudo: `Os arranjos magnéticos tipo Halbach representam uma das soluções mais elegantes para a geração de campos magnéticos homogêneos sem a necessidade de eletroímãs supercondutores. Essa tecnologia tem permitido o desenvolvimento de sistemas de RMN portáteis e acessíveis.\n\n## O que é um arranjo Halbach?\n\nUm arranjo Halbach é uma configuração especial de ímãs permanentes onde a orientação da magnetização varia de forma contínua, concentrando o campo magnético em um dos lados do arranjo enquanto o cancela no outro. Isso resulta em campos mais intensos e homogêneos com menor volume de material magnético.\n\n## Aplicações em RMN\n\nNa Ressonância Magnética Nuclear, os arranjos Halbach permitem:\n\n- **Sistemas portáteis**: Equipamentos que podem ser levados ao campo para análise de solos e produtos agrícolas.\n- **Custo reduzido**: Eliminam a necessidade de criogenia e infraestrutura complexa.\n- **Análise não destrutiva**: Permitem avaliar a qualidade de alimentos e materiais sem danificá-los.\n\n## Pesquisa no PPGEB\n\nNosso grupo de pesquisa tem desenvolvido protótipos de sensores Halbach otimizados para aplicações agrícolas, em parceria com a ESALQ/USP e a Embrapa.`,
    autor: 'Prof. Dr. Mardoqueu',
    categoria: 'Instrumentação',
    data: '15 Fev 2026',
    leitura: '7 min'
  },
  {
    id: 3,
    slug: 'machine-learning-diagnostico-imagem',
    titulo: 'Machine Learning no Diagnóstico por Imagem',
    resumo: 'Como técnicas de aprendizado de máquina estão revolucionando o processamento de imagens médicas e auxiliando no diagnóstico precoce de patologias.',
    conteudo: `O uso de inteligência artificial no diagnóstico por imagem é uma das revoluções mais significativas da medicina moderna. Algoritmos de deep learning conseguem identificar padrões em imagens médicas com precisão comparável — e em alguns casos superior — à de especialistas humanos.\n\n## Como funciona?\n\nRedes neurais convolucionais (CNNs) são treinadas com milhares de imagens médicas rotuladas por especialistas. O modelo aprende a identificar características visuais associadas a diferentes condições, como tumores, fraturas ou lesões.\n\n## Aplicações práticas\n\n- **Radiologia**: Detecção automática de nódulos pulmonares em tomografias.\n- **Dermatologia**: Classificação de lesões cutâneas a partir de fotografias.\n- **Oftalmologia**: Análise de imagens de retina para detecção de retinopatia diabética.\n- **Patologia**: Análise de lâminas histológicas digitalizadas.\n\n## Desafios\n\nApesar dos avanços, ainda existem desafios importantes como a necessidade de grandes volumes de dados anotados, a interpretabilidade dos modelos e a validação clínica rigorosa antes da implementação em ambiente hospitalar.`,
    autor: 'Equipe PPGEB',
    categoria: 'Inteligência Artificial',
    data: '10 Fev 2026',
    leitura: '6 min'
  }
];

app.get('/api/artigos', (req, res) => {
  const resumos = artigos.map(({ conteudo, ...rest }) => rest);
  res.json(resumos);
});

app.get('/api/artigos/:slug', (req, res) => {
  const artigo = artigos.find(a => a.slug === req.params.slug);
  if (!artigo) return res.status(404).json({ error: 'Artigo não encontrado' });
  res.json(artigo);
});

// ============================================
// Serve React build em produção
// ============================================

const clientBuildPath = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(clientBuildPath));

// SPA fallback - qualquer rota não-API serve o index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on 0.0.0.0:${PORT}`);
  console.log(`📁 Serving static files from ${clientBuildPath}`);
});
