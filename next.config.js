/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compress: true,
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAACjIidY2QIogyaPR',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'engenhariabiomedica.com',
      },
    ],
  },
  async redirects() {
    return [
      // Redirects de rotas curtas para artigos profundos
      { source: '/formacao/graduacao', destination: '/artigos/todas-faculdades-engenharia-biomedica-brasil-ranking', statusCode: 301 },
      { source: '/formacao/pos-graduacao', destination: '/artigos/pos-graduacao-mestrado-doutorado-engenharia-biomedica', statusCode: 301 },
      { source: '/formacao/grade-curricular', destination: '/artigos/grade-curricular-engenharia-biomedica-5-anos', statusCode: 301 },
      { source: '/mercado/salarios', destination: '/artigos/quanto-ganha-engenheiro-biomedico-2026', statusCode: 301 },
      { source: '/mercado/areas-de-atuacao', destination: '/artigos/areas-atuacao-engenharia-biomedica', statusCode: 301 },
      { source: '/regulamentacao/confea-crea', destination: '/artigos/registro-crea-engenheiro-biomedico-guia', statusCode: 301 },
      { source: '/regulamentacao/anvisa', destination: '/artigos/anvisa-dispositivos-medicos-guia-2026', statusCode: 301 },
      { source: '/regulamentacao/normas', destination: '/artigos/normas-tecnicas-engenharia-biomedica', statusCode: 301 },
      { source: '/equipamentos/manutencao', destination: '/artigos/manutencao-equipamentos-hospitalares', statusCode: 301 },
      { source: '/carreira/como-comecar', destination: '/artigos/roadmap-carreira-engenheiro-biomedico', statusCode: 301 },
      { source: '/areas/engenharia-clinica', destination: '/artigos/engenharia-clinica-guia-completo', statusCode: 301 },
      { source: '/pesquisa/centros', destination: '/artigos/centros-pesquisa-engbiomedica-mapa', statusCode: 301 },
      { source: '/eventos', destination: '/artigos/calendario-eventos-engbiomedica-saude-digital', statusCode: 301 },
      { source: '/internacional/eua', destination: '/artigos/engenharia-biomedica-eua-comparativo', statusCode: 301 },
      { source: '/startups', destination: '/artigos/healthtechs-mapa-brasil', statusCode: 301 },
      { source: '/internacional', destination: '/artigos/engenharia-biomedica-eua-comparativo', statusCode: 301 },
      // Redirects 301: artigos antigos superficiais -> novos profundos
      { source: '/artigos/o-que-faz-engenheiro-biomedico', destination: '/artigos/o-que-faz-engenheiro-biomedico-9-caminhos', statusCode: 301 },
      { source: '/artigos/diferenca-engenharia-biomedica-biomedicina', destination: '/artigos/diferenca-biomedicina-engenharia-biomedica-guia', statusCode: 301 },
      { source: '/artigos/grade-curricular-engenharia-biomedica', destination: '/artigos/grade-curricular-engenharia-biomedica-5-anos', statusCode: 301 },
      { source: '/artigos/faculdades-engenharia-biomedica-brasil', destination: '/artigos/todas-faculdades-engenharia-biomedica-brasil-ranking', statusCode: 301 },
      { source: '/artigos/nota-corte-engenharia-biomedica-sisu', destination: '/artigos/nota-corte-engenharia-biomedica-sisu-2026', statusCode: 301 },
      { source: '/artigos/pos-graduacao-engenharia-biomedica', destination: '/artigos/pos-graduacao-mestrado-doutorado-engenharia-biomedica', statusCode: 301 },
      { source: '/artigos/salario-engenheiro-biomedico', destination: '/artigos/quanto-ganha-engenheiro-biomedico-2026', statusCode: 301 },
      { source: '/artigos/mercado-trabalho-engenharia-biomedica', destination: '/artigos/mercado-trabalho-engenharia-biomedica-dados', statusCode: 301 },
      { source: '/artigos/mercado-dispositivos-medicos-brasil', destination: '/artigos/mercado-dispositivos-medicos-brasil-dados', statusCode: 301 },
      { source: '/artigos/empresas-engenharia-biomedica-brasil', destination: '/artigos/empresas-dispositivos-medicos-brasil', statusCode: 301 },
      { source: '/artigos/healthtechs-brasil-ecossistema', destination: '/artigos/healthtechs-mapa-brasil', statusCode: 301 },
      { source: '/artigos/registro-crea-engenheiro-biomedico', destination: '/artigos/registro-crea-engenheiro-biomedico-guia', statusCode: 301 },
      { source: '/artigos/anvisa-dispositivos-medicos-regulamentacao', destination: '/artigos/anvisa-dispositivos-medicos-guia-2026', statusCode: 301 },
      { source: '/artigos/anvisa-dispositivos-medicos-guia', destination: '/artigos/anvisa-dispositivos-medicos-guia-2026', statusCode: 301 },
      { source: '/artigos/assuntos-regulatorios-dispositivos-medicos', destination: '/artigos/anvisa-dispositivos-medicos-guia-2026', statusCode: 301 },
      { source: '/artigos/anvisa-aprova-sistema-para-rastreamento-e-identificacao-de-d', destination: '/artigos/anvisa-aprova-sistema-de-rastreamento-e-identificacao-de-dis', statusCode: 301 },
      { source: '/artigos/centros-pesquisa-engenharia-biomedica', destination: '/artigos/centros-pesquisa-engbiomedica-mapa', statusCode: 301 },
      { source: '/artigos/engenharia-biomedica-eua-vs-brasil', destination: '/artigos/engenharia-biomedica-eua-comparativo', statusCode: 301 },
      { source: '/artigos/calendario-eventos-engenharia-biomedica-2026', destination: '/artigos/calendario-eventos-engbiomedica-saude-digital', statusCode: 301 },
      { source: '/artigos/engenharia-biomedica-vale-a-pena', destination: '/artigos/engenharia-biomedica-vale-a-pena-v2', statusCode: 301 },
      { source: '/artigos/curso-engenharia-biomedica-o-que-esperar', destination: '/artigos/grade-curricular-engenharia-biomedica-5-anos', statusCode: 301 },
      // Redirect 301: /especialidades -> /areas-de-atuacao (rename)
      { source: '/especialidades', destination: '/areas-de-atuacao', statusCode: 301 },
      // Backward compat: old /especialidades/* sub-pages -> artigos
      { source: '/especialidades/engenharia-clinica', destination: '/artigos/engenharia-clinica-guia-completo', statusCode: 301 },
      { source: '/especialidades/instrumentacao-biomedica', destination: '/artigos/instrumentacao-biomedica', statusCode: 301 },
      { source: '/especialidades/processamento-sinais-imagens', destination: '/artigos/processamento-sinais-biomedicos-python', statusCode: 301 },
      { source: '/especialidades/biomecanica-reabilitacao', destination: '/artigos/biomecanica-movimento-proteses', statusCode: 301 },
      { source: '/especialidades/biomateriais-engenharia-tecidos', destination: '/artigos/biomateriais-implantes-bioimpressao', statusCode: 301 },
      { source: '/especialidades/informatica-saude', destination: '/artigos/informatica-saude-his-prontuario', statusCode: 301 },
      { source: '/especialidades/inteligencia-artificial-saude', destination: '/artigos/ia-saude-brasil', statusCode: 301 },
      { source: '/especialidades/neuroengenharia', destination: '/artigos/neuroengenharia-bci', statusCode: 301 },
      { source: '/especialidades/robotica-medica', destination: '/artigos/cirurgia-robotica-brasil', statusCode: 301 },
      // New /areas-de-atuacao/* sub-pages -> artigos
      { source: '/areas-de-atuacao/engenharia-clinica', destination: '/artigos/engenharia-clinica-guia-completo', statusCode: 301 },
      { source: '/areas-de-atuacao/instrumentacao-biomedica', destination: '/artigos/instrumentacao-biomedica', statusCode: 301 },
      { source: '/areas-de-atuacao/processamento-sinais-imagens', destination: '/artigos/processamento-sinais-biomedicos-python', statusCode: 301 },
      { source: '/areas-de-atuacao/biomecanica-reabilitacao', destination: '/artigos/biomecanica-movimento-proteses', statusCode: 301 },
      { source: '/areas-de-atuacao/biomateriais-engenharia-tecidos', destination: '/artigos/biomateriais-implantes-bioimpressao', statusCode: 301 },
      { source: '/areas-de-atuacao/informatica-saude', destination: '/artigos/informatica-saude-his-prontuario', statusCode: 301 },
      { source: '/areas-de-atuacao/inteligencia-artificial-saude', destination: '/artigos/ia-saude-brasil', statusCode: 301 },
      { source: '/areas-de-atuacao/neuroengenharia', destination: '/artigos/neuroengenharia-bci', statusCode: 301 },
      { source: '/areas-de-atuacao/robotica-cirurgica', destination: '/artigos/cirurgia-robotica-brasil', statusCode: 301 },
      { source: '/areas-de-atuacao/bioimpressao-3d', destination: '/artigos/engenharia-tecidos-bioimpressao-3d', statusCode: 301 },
      { source: '/areas-de-atuacao/engenharia-genomica-crispr', destination: '/artigos/engenharia-genomica-crispr', statusCode: 301 },
      { source: '/areas-de-atuacao/nanotecnologia-biomedica', destination: '/artigos/nanotecnologia-biomedica', statusCode: 301 },
      { source: '/equipamentos/centro-cirurgico', destination: '/artigos/equipamentos-centro-cirurgico', statusCode: 301 },
      { source: '/equipamentos/uti', destination: '/artigos/equipamentos-uti-guia', statusCode: 301 },
      { source: '/equipamentos/diagnostico-imagem', destination: '/artigos/equipamentos-diagnostico-imagem', statusCode: 301 },
      { source: '/equipamentos/manutencao-hospitalar', destination: '/artigos/manutencao-equipamentos-hospitalares', statusCode: 301 },
      { source: '/equipamentos/gestao-parque-tecnologico', destination: '/artigos/gestao-parque-tecnologico-hospitalar', statusCode: 301 },
      { source: '/equipamentos/indicadores-engenharia-clinica', destination: '/artigos/indicadores-engenharia-clinica-kpis', statusCode: 301 },
      { source: '/regulamentacao/certificacao-inmetro', destination: '/artigos/certificacao-inmetro-equipamentos-medicos', statusCode: 301 },
      { source: '/regulamentacao/software-dispositivo-medico-samd', destination: '/artigos/samd-software-dispositivo-medico', statusCode: 301 },
      { source: '/pesquisa/publicacao-cientifica', destination: '/artigos/como-publicar-artigos-engenharia-biomedica', statusCode: 301 },
      { source: '/pesquisa/financiamento', destination: '/artigos/editais-financiamento-pesquisa-saude', statusCode: 301 },
      { source: '/pesquisa/ferramentas-python-matlab', destination: '/artigos/python-matlab-engenharia-biomedica', statusCode: 301 },
      { source: '/carreira/roadmap-engenheiro-biomedico', destination: '/artigos/roadmap-carreira-engenheiro-biomedico', statusCode: 301 },
      { source: '/carreira/certificacoes', destination: '/artigos/certificacoes-engenheiros-biomedicos', statusCode: 301 },
      { source: '/carreira/cursos-especializacoes', destination: '/artigos/melhores-cursos-online-engenharia-clinica', statusCode: 301 },
      { source: '/carreira/estagio-primeiro-emprego', destination: '/artigos/estagio-engenharia-biomedica-guia', statusCode: 301 },
      { source: '/carreira/transicao-carreira', destination: '/artigos/transicao-engenharia-biomedica', statusCode: 301 },
      { source: '/carreira/livros-engenharia-biomedica', destination: '/artigos/livros-engenharia-biomedica', statusCode: 301 },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self'",
              "img-src 'self' https: data:",
              "frame-src https://challenges.cloudflare.com",
              "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://challenges.cloudflare.com https://*.upstash.io",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
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
        source: '/artigos/:slug/:file(.*\\.avif)',
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
