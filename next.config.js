/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compress: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      // Redirects de rotas curtas para artigos profundos
      { source: '/formacao/graduacao', destination: '/artigos/todas-faculdades-engenharia-biomedica-brasil-ranking', permanent: true },
      { source: '/formacao/pos-graduacao', destination: '/artigos/pos-graduacao-mestrado-doutorado-engenharia-biomedica', permanent: true },
      { source: '/formacao/grade-curricular', destination: '/artigos/grade-curricular-engenharia-biomedica-5-anos', permanent: true },
      { source: '/mercado/salarios', destination: '/artigos/quanto-ganha-engenheiro-biomedico-2026', permanent: true },
      { source: '/mercado/areas-de-atuacao', destination: '/artigos/areas-atuacao-engenharia-biomedica', permanent: true },
      { source: '/regulamentacao/confea-crea', destination: '/artigos/registro-crea-engenheiro-biomedico-guia', permanent: true },
      { source: '/regulamentacao/anvisa', destination: '/artigos/anvisa-dispositivos-medicos-guia-2026', permanent: true },
      { source: '/regulamentacao/normas', destination: '/artigos/normas-tecnicas-engenharia-biomedica', permanent: true },
      { source: '/pesquisa/centros', destination: '/artigos/centros-pesquisa-engbiomedica-mapa', permanent: true },
      { source: '/eventos', destination: '/artigos/calendario-eventos-engbiomedica-saude-digital', permanent: true },
      { source: '/internacional/eua', destination: '/artigos/engenharia-biomedica-eua-comparativo', permanent: true },
      { source: '/startups', destination: '/artigos/healthtechs-mapa-brasil', permanent: true },
      { source: '/internacional', destination: '/artigos/engenharia-biomedica-eua-comparativo', permanent: true },
      // Redirects 301: artigos antigos superficiais -> novos profundos
      { source: '/artigos/o-que-faz-engenheiro-biomedico', destination: '/artigos/o-que-faz-engenheiro-biomedico-9-caminhos', permanent: true },
      { source: '/artigos/diferenca-engenharia-biomedica-biomedicina', destination: '/artigos/diferenca-biomedicina-engenharia-biomedica-guia', permanent: true },
      { source: '/artigos/grade-curricular-engenharia-biomedica', destination: '/artigos/grade-curricular-engenharia-biomedica-5-anos', permanent: true },
      { source: '/artigos/faculdades-engenharia-biomedica-brasil', destination: '/artigos/todas-faculdades-engenharia-biomedica-brasil-ranking', permanent: true },
      { source: '/artigos/nota-corte-engenharia-biomedica-sisu', destination: '/artigos/nota-corte-engenharia-biomedica-sisu-2026', permanent: true },
      { source: '/artigos/pos-graduacao-engenharia-biomedica', destination: '/artigos/pos-graduacao-mestrado-doutorado-engenharia-biomedica', permanent: true },
      { source: '/artigos/salario-engenheiro-biomedico', destination: '/artigos/quanto-ganha-engenheiro-biomedico-2026', permanent: true },
      { source: '/artigos/mercado-trabalho-engenharia-biomedica', destination: '/artigos/mercado-trabalho-engenharia-biomedica-dados', permanent: true },
      { source: '/artigos/mercado-dispositivos-medicos-brasil', destination: '/artigos/mercado-dispositivos-medicos-brasil-dados', permanent: true },
      { source: '/artigos/empresas-engenharia-biomedica-brasil', destination: '/artigos/empresas-dispositivos-medicos-brasil', permanent: true },
      { source: '/artigos/healthtechs-brasil-ecossistema', destination: '/artigos/healthtechs-mapa-brasil', permanent: true },
      { source: '/artigos/registro-crea-engenheiro-biomedico', destination: '/artigos/registro-crea-engenheiro-biomedico-guia', permanent: true },
      { source: '/artigos/anvisa-dispositivos-medicos-regulamentacao', destination: '/artigos/anvisa-dispositivos-medicos-guia-2026', permanent: true },
      { source: '/artigos/centros-pesquisa-engenharia-biomedica', destination: '/artigos/centros-pesquisa-engbiomedica-mapa', permanent: true },
      { source: '/artigos/engenharia-biomedica-eua-vs-brasil', destination: '/artigos/engenharia-biomedica-eua-comparativo', permanent: true },
      { source: '/artigos/calendario-eventos-engenharia-biomedica-2026', destination: '/artigos/calendario-eventos-engbiomedica-saude-digital', permanent: true },
      { source: '/artigos/engenharia-biomedica-vale-a-pena', destination: '/artigos/engenharia-biomedica-vale-a-pena-v2', permanent: true },
      { source: '/artigos/curso-engenharia-biomedica-o-que-esperar', destination: '/artigos/grade-curricular-engenharia-biomedica-5-anos', permanent: true },
      // Redirect 301: /especialidades -> /areas-de-atuacao (rename)
      { source: '/especialidades', destination: '/areas-de-atuacao', permanent: true },
      // Backward compat: old /especialidades/* sub-pages -> artigos
      { source: '/especialidades/engenharia-clinica', destination: '/artigos/engenharia-clinica-guia-completo', permanent: true },
      { source: '/especialidades/instrumentacao-biomedica', destination: '/artigos/instrumentacao-biomedica', permanent: true },
      { source: '/especialidades/processamento-sinais-imagens', destination: '/artigos/processamento-sinais-biomedicos-python', permanent: true },
      { source: '/especialidades/biomecanica-reabilitacao', destination: '/artigos/biomecanica-movimento-proteses', permanent: true },
      { source: '/especialidades/biomateriais-engenharia-tecidos', destination: '/artigos/biomateriais-implantes-bioimpressao', permanent: true },
      { source: '/especialidades/informatica-saude', destination: '/artigos/informatica-saude-his-prontuario', permanent: true },
      { source: '/especialidades/inteligencia-artificial-saude', destination: '/artigos/ia-saude-brasil', permanent: true },
      { source: '/especialidades/neuroengenharia', destination: '/artigos/neuroengenharia-bci', permanent: true },
      { source: '/especialidades/robotica-medica', destination: '/artigos/cirurgia-robotica-brasil', permanent: true },
      // New /areas-de-atuacao/* sub-pages -> artigos
      { source: '/areas-de-atuacao/engenharia-clinica', destination: '/artigos/engenharia-clinica-guia-completo', permanent: true },
      { source: '/areas-de-atuacao/instrumentacao-biomedica', destination: '/artigos/instrumentacao-biomedica', permanent: true },
      { source: '/areas-de-atuacao/processamento-sinais-imagens', destination: '/artigos/processamento-sinais-biomedicos-python', permanent: true },
      { source: '/areas-de-atuacao/biomecanica-reabilitacao', destination: '/artigos/biomecanica-movimento-proteses', permanent: true },
      { source: '/areas-de-atuacao/biomateriais-engenharia-tecidos', destination: '/artigos/biomateriais-implantes-bioimpressao', permanent: true },
      { source: '/areas-de-atuacao/informatica-saude', destination: '/artigos/informatica-saude-his-prontuario', permanent: true },
      { source: '/areas-de-atuacao/inteligencia-artificial-saude', destination: '/artigos/ia-saude-brasil', permanent: true },
      { source: '/areas-de-atuacao/neuroengenharia', destination: '/artigos/neuroengenharia-bci', permanent: true },
      { source: '/areas-de-atuacao/robotica-cirurgica', destination: '/artigos/cirurgia-robotica-brasil', permanent: true },
      { source: '/areas-de-atuacao/bioimpressao-3d', destination: '/artigos/engenharia-tecidos-bioimpressao-3d', permanent: true },
      { source: '/areas-de-atuacao/engenharia-genomica-crispr', destination: '/artigos/engenharia-genomica-crispr', permanent: true },
      { source: '/areas-de-atuacao/nanotecnologia-biomedica', destination: '/artigos/nanotecnologia-biomedica', permanent: true },
      { source: '/equipamentos/centro-cirurgico', destination: '/artigos/equipamentos-centro-cirurgico', permanent: true },
      { source: '/equipamentos/uti', destination: '/artigos/equipamentos-uti-guia', permanent: true },
      { source: '/equipamentos/diagnostico-imagem', destination: '/artigos/equipamentos-diagnostico-imagem', permanent: true },
      { source: '/equipamentos/manutencao-hospitalar', destination: '/artigos/manutencao-equipamentos-hospitalares', permanent: true },
      { source: '/equipamentos/gestao-parque-tecnologico', destination: '/artigos/gestao-parque-tecnologico-hospitalar', permanent: true },
      { source: '/equipamentos/indicadores-engenharia-clinica', destination: '/artigos/indicadores-engenharia-clinica-kpis', permanent: true },
      { source: '/regulamentacao/certificacao-inmetro', destination: '/artigos/certificacao-inmetro-equipamentos-medicos', permanent: true },
      { source: '/regulamentacao/software-dispositivo-medico-samd', destination: '/artigos/samd-software-dispositivo-medico', permanent: true },
      { source: '/pesquisa/publicacao-cientifica', destination: '/artigos/como-publicar-artigos-engenharia-biomedica', permanent: true },
      { source: '/pesquisa/financiamento', destination: '/artigos/editais-financiamento-pesquisa-saude', permanent: true },
      { source: '/pesquisa/ferramentas-python-matlab', destination: '/artigos/python-matlab-engenharia-biomedica', permanent: true },
      { source: '/carreira/roadmap-engenheiro-biomedico', destination: '/artigos/roadmap-carreira-engenheiro-biomedico', permanent: true },
      { source: '/carreira/certificacoes', destination: '/artigos/certificacoes-engenheiros-biomedicos', permanent: true },
      { source: '/carreira/cursos-especializacoes', destination: '/artigos/melhores-cursos-online-engenharia-clinica', permanent: true },
      { source: '/carreira/estagio-primeiro-emprego', destination: '/artigos/estagio-engenharia-biomedica-guia', permanent: true },
      { source: '/carreira/transicao-carreira', destination: '/artigos/transicao-engenharia-biomedica', permanent: true },
      { source: '/carreira/livros-engenharia-biomedica', destination: '/artigos/livros-engenharia-biomedica', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/artigos/:slug/:file(.*\\.webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path((?!_next/static|_next/image|api/).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/api/og',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/:path(icon\\.svg|favicon\\.ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=2592000',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
