import { test, expect } from '@playwright/test';

/**
 * Amostra representativa dos 97 redirects 301 configurados no next.config.js.
 * Testar todos seria lento — verificamos os mais críticos de cada categoria.
 */
const redirectSamples = [
  // Rotas curtas → artigos
  { from: '/formacao/graduacao', to: '/artigos/todas-faculdades-engenharia-biomedica-brasil-ranking' },
  { from: '/mercado/salarios', to: '/artigos/quanto-ganha-engenheiro-biomedico-2026' },
  { from: '/regulamentacao/anvisa', to: '/artigos/anvisa-dispositivos-medicos-guia-2026' },
  { from: '/eventos', to: '/artigos/calendario-eventos-engbiomedica-saude-digital' },
  { from: '/startups', to: '/artigos/healthtechs-mapa-brasil' },

  // Artigos antigos → novos
  { from: '/artigos/o-que-faz-engenheiro-biomedico', to: '/artigos/o-que-faz-engenheiro-biomedico-9-caminhos' },
  { from: '/artigos/salario-engenheiro-biomedico', to: '/artigos/quanto-ganha-engenheiro-biomedico-2026' },
  { from: '/artigos/faculdades-engenharia-biomedica-brasil', to: '/artigos/todas-faculdades-engenharia-biomedica-brasil-ranking' },

  // /especialidades → /areas-de-atuacao e artigos
  { from: '/especialidades', to: '/areas-de-atuacao' },
  { from: '/especialidades/engenharia-clinica', to: '/artigos/engenharia-clinica-guia-completo' },
  { from: '/especialidades/robotica-medica', to: '/artigos/cirurgia-robotica-brasil' },

  // /areas-de-atuacao/* → artigos
  { from: '/areas-de-atuacao/engenharia-clinica', to: '/artigos/engenharia-clinica-guia-completo' },
  { from: '/areas-de-atuacao/inteligencia-artificial-saude', to: '/artigos/ia-saude-brasil' },

  // /equipamentos/* → artigos
  { from: '/equipamentos/centro-cirurgico', to: '/artigos/equipamentos-centro-cirurgico' },
  { from: '/equipamentos/uti', to: '/artigos/equipamentos-uti-guia' },

  // /carreira/* → artigos
  { from: '/carreira/roadmap-engenheiro-biomedico', to: '/artigos/roadmap-carreira-engenheiro-biomedico' },
  { from: '/carreira/certificacoes', to: '/artigos/certificacoes-engenheiros-biomedicos' },

  // /pesquisa/* → artigos
  { from: '/pesquisa/centros', to: '/artigos/centros-pesquisa-engbiomedica-mapa' },
  { from: '/pesquisa/publicacao-cientifica', to: '/artigos/como-publicar-artigos-engenharia-biomedica' },

  // /regulamentacao/* → artigos
  { from: '/regulamentacao/confea-crea', to: '/artigos/registro-crea-engenheiro-biomedico-guia' },
  { from: '/regulamentacao/normas', to: '/artigos/normas-tecnicas-engenharia-biomedica' },
];

test.describe('Redirects 301', () => {
  for (const { from, to } of redirectSamples) {
    test(`${from} → ${to}`, async ({ request }) => {
      const response = await request.get(from, {
        maxRedirects: 0,
      });

      // Next.js pode retornar 307 ou 308 em dev, 301 em produção
      // Em desenvolvimento, aceitar 301, 307 ou 308
      expect([301, 307, 308]).toContain(response.status());

      const location = response.headers()['location'];
      expect(location).toBeTruthy();
      // O location pode ser relativo ou absoluto
      expect(location).toContain(to);
    });
  }
});

test.describe('Redirects levam a páginas que funcionam', () => {
  // Testar que os destinos dos redirects carregam corretamente (amostra menor)
  const destinationSamples = [
    '/artigos/todas-faculdades-engenharia-biomedica-brasil-ranking',
    '/artigos/quanto-ganha-engenheiro-biomedico-2026',
    '/artigos/engenharia-clinica-guia-completo',
    '/areas-de-atuacao',
  ];

  for (const dest of destinationSamples) {
    test(`destino ${dest} retorna 200`, async ({ request }) => {
      const response = await request.get(dest);
      expect(response.status()).toBe(200);
    });
  }
});
