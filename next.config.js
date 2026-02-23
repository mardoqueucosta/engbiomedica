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
