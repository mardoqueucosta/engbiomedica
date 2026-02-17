/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
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
      { source: '/formacao/graduacao', destination: '/artigos/faculdades-engenharia-biomedica-brasil', permanent: true },
      { source: '/formacao/pos-graduacao', destination: '/artigos/pos-graduacao-engenharia-biomedica', permanent: true },
      { source: '/formacao/grade-curricular', destination: '/artigos/grade-curricular-engenharia-biomedica', permanent: true },
      { source: '/mercado/salarios', destination: '/artigos/salario-engenheiro-biomedico', permanent: true },
      { source: '/mercado/areas-de-atuacao', destination: '/artigos/areas-atuacao-engenharia-biomedica', permanent: true },
      { source: '/regulamentacao/confea-crea', destination: '/artigos/registro-crea-engenheiro-biomedico', permanent: true },
      { source: '/regulamentacao/anvisa', destination: '/artigos/anvisa-dispositivos-medicos-regulamentacao', permanent: true },
      { source: '/regulamentacao/normas', destination: '/artigos/normas-tecnicas-engenharia-biomedica', permanent: true },
      { source: '/pesquisa/centros', destination: '/artigos/centros-pesquisa-engenharia-biomedica', permanent: true },
      { source: '/eventos', destination: '/artigos/calendario-eventos-engenharia-biomedica-2026', permanent: true },
      { source: '/internacional/eua', destination: '/artigos/engenharia-biomedica-eua-vs-brasil', permanent: true },
      { source: '/startups', destination: '/artigos/healthtechs-brasil-ecossistema', permanent: true },
      { source: '/internacional', destination: '/mercado', permanent: true },
    ];
  },
  async headers() {
    return [
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
