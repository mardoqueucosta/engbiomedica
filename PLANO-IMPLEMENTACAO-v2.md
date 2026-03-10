# Plano de Implementação v2 — Crescimento engenhariabiomedica.com

**Data:** Março 2026
**Baseado em:** Auditoria do código-fonte + avaliação crítica do plano v1 + auditoria automatizada de links
**Stack confirmada:** Next.js 14 · Railway · Resend · Upstash Redis · Cloudflare Turnstile · GA4
**Estado atual:** 87 artigos MDX, 43+ rotas, newsletter com double opt-in, busca client-side (Fuse.js), 117 testes (66 unit + 51 e2e)

**Mudanças em relação ao plano v1:**
- Reordenação de prioridades (comunidade e CTAs antes de Meta Pixel)
- Estimativas corrigidas (PDFs: 15-20h, não 8-12h)
- Distribuição social focada em 2 plataformas (Instagram + LinkedIn), não 6
- Fase 0 reduzida: auditoria de links já foi executada (script criado e rodado)
- Métricas de sucesso recalibradas com metas conservadoras e otimistas
- Risco de dependência de WhatsApp mitigado com email como canal primário

---

## Fase 0 — SEO e Conversão do Tráfego Existente (Semana 1)

> **Princípio:** antes de buscar tráfego novo, extrair mais valor do tráfego que já existe.

### ✅ 0.1 Auditoria de internal linking — CONCLUÍDA

Script `scripts/audit-internal-links.ts` criado e executado. Comandos disponíveis:
- `npm run audit:links` — relatório completo
- `npm run audit:links:json` — saída JSON para processamento
- `npm run audit:links:orphans` — apenas artigos órfãos

**Resultados da auditoria (09/03/2026):**

| Métrica | Valor inicial | Após correções (10/03) |
|---------|--------------|----------------------|
| Total de artigos | 87 | 87 |
| Links internos entre artigos | 852 | 915 (+63) ✅ |
| Links externos | 479 | 479 |
| Links quebrados | 0 ✅ | 0 ✅ |
| Média de links enviados por artigo | 9.8 | 10.5 |
| Artigos órfãos (≤ 1 link recebido) | 27 (31%) ⚠️ | 0 ✅ |
| Artigos com 0 links recebidos | 20 🔴 | 0 ✅ |

**Top 5 artigos mais linkados:**
1. `guia-engenharia-biomedica` — 129 links recebidos (hub central)
2. `anvisa-dispositivos-medicos-guia-2026` — 50
3. `quanto-ganha-engenheiro-biomedico-2026` — 37
4. `tendencias-futuro-engenharia-biomedica` — 37
5. `areas-atuacao-engenharia-biomedica` — 35

**Correções aplicadas (10/03/2026):**
- [x] 7 artigos órfãos restantes corrigidos com links contextuais naturais
- [x] 18 novos links internos adicionados em 11 artigos-fonte diferentes
- [x] Links bidirecionais criados entre artigos complementares (ex: nanotecnologia ↔ CRISPR)
- [x] Artigos corrigidos: `melhores-cursos-online-engenharia-clinica` (0→3), `engenharia-biomedica-ead` (1→4), `engenharia-genomica-crispr` (1→3), `historia-engenharia-biomedica-brasil` (1→3), `nanotecnologia-biomedica` (1→4), `neuroengenharia-bci` (1→3), `wearables-saude-brasil` (1→4)
- [x] Reexecutado `npm run audit:links` — zero órfãos confirmado

### ✅ 0.1b Limpeza de código morto — CONCLUÍDA (10/03/2026)

**Diagnóstico:** 16 páginas usavam o componente `ComingSoonPage` (placeholder genérico), mas todas já possuíam redirects 301 configurados no `next.config.js` apontando para artigos completos. A navegação (`navigation.ts`) também já apontava direto para os artigos. Os arquivos nunca eram renderizados — código morto.

**Ações executadas:**
- [x] Removidos 16 arquivos de páginas stub (6 equipamentos, 6 carreira, 2 pesquisa, 2 regulamentação)
- [x] Removido componente `src/components/ui/ComingSoonPage.tsx`
- [x] Verificado que redirects 301 no `next.config.js` continuam funcionando
- [x] Build (`next build`) passou sem erros
- [x] Zero referências restantes ao `ComingSoonPage` no código

**Nota:** As 3 páginas de auth (`/login`, `/cadastro`, `/dashboard`) foram mantidas como stubs intencionais com `robots: { index: false }` — funcionalidade planejada para fase futura.

### ✅ 0.1c Correção dos testes e2e — CONCLUÍDA (10/03/2026)

**Diagnóstico:** 7 testes de busca (`search.spec.ts`) falhavam com falsos negativos. A busca funcionava perfeitamente em produção — o problema era na infraestrutura de testes:
1. Playwright rodava contra `npm run dev` (dev server com bugs de hydration do Next.js)
2. Locators usavam `page.locator('text=/regex/')` que não encontrava elementos presentes no DOM

**Ações executadas:**
- [x] `playwright.config.ts`: Alterado para `npm run build && npm start` (production build, idêntico ao deploy)
- [x] `search.spec.ts`: Reescrito com locators robustos (`getByText()`, seletores escopados `main a[...]`, `.fixed a[...]`)
- [x] Helper `waitForHydration()` adicionado para garantir que React hidratou antes de interagir
- [x] Todos os 51 testes e2e passando (antes: 44/51)
- [x] Todos os 66 testes unitários passando

---

### 0.2 CTAs contextuais nos artigos

**Por quê:** Atualmente os artigos terminam com um CTA genérico "Gostou deste artigo? Assinar newsletter". Falta CTA contextual dentro do conteúdo — é a forma mais direta de converter leitores em inscritos. A maioria dos leitores abandona antes do final e nunca vê o CTA.

**O que fazer:**
- [ ] Criar componente `ArticleCTA.tsx` com variantes:
  - `newsletter` — Inscrição com mensagem contextual ao tema do artigo
  - `community` — Convite para a comunidade WhatsApp (após Fase 1.1)
  - `download` — Oferecer PDF relacionado ao tema (após Fase 1.2)
- [ ] Implementar lógica de exibição baseada na categoria do artigo:
  - Artigos de Formação → CTA newsletter estudantes + comunidade
  - Artigos de Carreira → CTA newsletter profissionais
  - Artigos de Regulamentação → CTA newsletter técnicos
  - Artigos de Pesquisa → CTA newsletter pesquisadores
- [ ] Inserir CTAs inline nos 20 artigos mais acessados (após seções-chave, não apenas no final)
- [ ] Adicionar CTA automático no template de artigo (`artigos/[slug]/page.tsx`) para artigos sem CTA manual

**Arquivos afetados:**
- `src/components/ui/ArticleCTA.tsx` (novo)
- `src/app/artigos/[slug]/page.tsx` (integrar componente automático)
- ~20 artigos MDX (inserir CTAs manuais nos mais acessados)

**Estimativa:** 4-5 horas

---

### 0.3 Análise Google Search Console

**Pré-requisito:** ✅ GSC já verificado (via Google Analytics) e funcionando.

**Por quê:** O GSC já está coletando dados. É preciso analisar quais termos ranqueiam, quais páginas recebem impressões sem cliques (CTR baixo = oportunidade de otimizar title/meta description), e quais queries têm volume mas nenhuma página correspondente (content gap).

**O que fazer:**
- [ ] Exportar relatório de desempenho do GSC (últimos 3 meses)
- [ ] Identificar top 20 queries por impressões
- [ ] Identificar queries com impressões altas e CTR < 3% (oportunidade de otimizar meta tags)
- [ ] Cruzar queries órfãs do GSC com artigos órfãos da auditoria de links (os 27 identificados) — artigos sem links internos E sem tráfego são prioridade de correção
- [ ] Identificar queries sem página correspondente (candidatos a novos artigos)
- [ ] Otimizar title e meta description dos 10 artigos com maior potencial de ganho de CTR
- [ ] Verificar Core Web Vitals e corrigir problemas críticos (se houver)

**Arquivos afetados:**
- Artigos MDX (ajustar frontmatter: título, resumo)
- Possíveis ajustes em `next.config.js` se houver problemas de performance

**Estimativa:** 3-4 horas

---

## Fase 1 — Captura de Audiência (Semanas 2-3)

### 1.1 Criar página `/comunidade` com link WhatsApp

**Por quê:** Nenhum canal de comunidade existe. WhatsApp é o caminho de menor fricção no Brasil. A comunidade cria retenção, gera conteúdo orgânico (perguntas que viram artigos) e fortalece a marca.

**Importante:** Email deve ser o canal primário de captura. WhatsApp é complementar — o risco de perder a comunidade (ban, mudança de regras) é real. Sempre coletar email antes de direcionar para o WhatsApp.

**O que fazer:**
- [ ] Criar Comunidade WhatsApp (não grupo simples — suporta até 2.000 membros com subgrupos)
  - Subgrupo 1: Estudantes e Vestibulandos
  - Subgrupo 2: Profissionais e Engenheiros Clínicos
  - Subgrupo 3: Pesquisa e Pós-graduação
- [ ] Criar página `src/app/comunidade/page.tsx` com:
  - Explicação da comunidade e benefícios
  - **Formulário de email obrigatório** antes de revelar o link do WhatsApp (captura primeiro)
  - Regras de participação
  - Schema markup `Organization` com `memberOf`
  - Meta tags e OG image dedicados
- [ ] Adicionar link no footer (`Footer.tsx`) — ícone WhatsApp + "Comunidade"
- [ ] Adicionar link na navegação principal (`navigation.ts`)
- [ ] Adicionar CTA de comunidade nos 10 artigos mais populares (via `ArticleCTA.tsx` da Fase 0.2)

**Arquivos afetados:**
- `src/app/comunidade/page.tsx` (novo)
- `src/components/layout/Footer.tsx` (adicionar link)
- `src/data/navigation.ts` (adicionar item)

**Estimativa:** 4-5 horas

---

### 1.2 Criar primeiro lead magnet (MVP)

**Por quê:** O site tem conteúdo excelente mas nenhum ativo para download. PDFs são a moeda de troca mais eficiente para capturar emails em nicho educacional.

**Abordagem MVP:** Criar **1 PDF manual** de alta qualidade para validar demanda antes de investir em pipeline automatizado. O artigo `guia-engenharia-biomedica.mdx` (35 min de leitura) é o candidato ideal — é o mais completo e atende todos os públicos.

**O que fazer:**
- [ ] Criar o PDF "Guia Completo de Carreira em Engenharia Biomédica" manualmente:
  - Extrair conteúdo do artigo-fonte
  - Formatar com branding do site (logo, cores, rodapé com URL)
  - Ferramenta: Google Docs → Exportar PDF, ou Canva (template profissional)
  - Incluir CTA no final do PDF: newsletter + comunidade WhatsApp
- [ ] Salvar em `/public/downloads/guia-carreira-engenharia-biomedica.pdf`
- [ ] Criar rota API `/api/download/route.ts` que:
  - Recebe email + Turnstile token
  - Valida e registra email no Resend (tag `lead-magnet`)
  - Retorna URL do PDF
- [ ] Criar componente `DownloadGate.tsx` — formulário email + Turnstile → libera PDF
- [ ] Inserir CTA de download no artigo-fonte e nos 5 artigos mais relacionados

**PDFs futuros (após validar demanda):**

| PDF | Artigo-fonte | Público | Prioridade |
|-----|-------------|---------|------------|
| Mapa das Faculdades — Ranking 2026 | `todas-faculdades-engenharia-biomedica-brasil.mdx` | Vestibulandos | Alta |
| Checklist: Como se Registrar no CREA | `registro-crea-engenheiro-biomedico.mdx` | Recém-formados | Média |
| Roadmap de Carreira — Engenheiro Biomédico | `roadmap-carreira-engenheiro-biomedico.mdx` | Graduandos | Média |
| Guia de Normas: ISO 13485 + IEC 60601 | `iso-13485-dispositivos-medicos.mdx` + `iec-60601-norma-equipamentos.mdx` | Profissionais | Média |

**Critério para automatizar:** Se o primeiro PDF gerar > 50 downloads em 30 dias, criar script `scripts/generate-pdf.ts` para pipeline automatizado.

**Arquivos afetados:**
- `public/downloads/guia-carreira-engenharia-biomedica.pdf` (novo)
- `src/app/api/download/route.ts` (novo)
- `src/components/forms/DownloadGate.tsx` (novo)
- Artigos MDX (adicionar CTA de download)

**Estimativa:** 6-8 horas (PDF manual + gate + API)

---

### 1.3 Segmentar newsletter por interesse

**Por quê:** Segmento único no Resend (`c91bcb50-...`) para audiências muito diferentes (vestibulandos vs. profissionais regulatórios) reduz relevância e aumenta unsubscribe rate.

**O que fazer:**
- [ ] Definir 4 segmentos no Resend:
  - `estudantes` — Vestibular, graduação, TCC, estágio
  - `profissionais` — Mercado, salários, certificações, carreira
  - `tecnicos` — Equipamentos, manutenção, engenharia clínica
  - `pesquisadores` — Publicações, financiamento, pós-graduação
- [ ] Atualizar `NewsletterForm.tsx` e `HomeNewsletterForm.tsx`:
  - Adicionar campo de seleção de interesse (dropdown simples, não checkboxes — menor fricção)
  - Enviar interesse junto com email no POST `/api/subscribe`
- [ ] Atualizar `/api/subscribe/route.ts`:
  - Receber campo `interesse`
  - Criar contato no Resend com tag correspondente
- [ ] Atualizar template `confirm-subscription.tsx` para mencionar o segmento escolhido
- [ ] Atualizar script `send-newsletter.ts` para suportar envio segmentado

**Arquivos afetados:**
- `src/components/forms/NewsletterForm.tsx`
- `src/components/forms/HomeNewsletterForm.tsx`
- `src/app/api/subscribe/route.ts`
- `src/emails/confirm-subscription.tsx`
- `scripts/send-newsletter.ts`

**Estimativa:** 4-6 horas

---

## Fase 2 — Distribuição Social (Semanas 4-5)

> **Princípio:** focar em 2 plataformas onde o público-alvo está (Instagram para estudantes, LinkedIn para profissionais), não dispersar em 6.

### 2.1 Geração de rascunhos para Instagram e LinkedIn

**Por quê:** 91 artigos publicados e zero distribuição nas redes. Mas gerar posts para 6 plataformas simultaneamente é insustentável para operação solo. Focar em 2 plataformas com linguagens muito diferentes: Instagram (visual, casual, estudantes) e LinkedIn (profissional, dados, tomadores de decisão).

**O que fazer:**
- [ ] Criar script `scripts/generate-social-posts.ts` que para cada artigo gera:
  - **Instagram:** Texto do post (resumo acessível + 10-15 hashtags + CTA para link na bio) + sugestão de formato (carousel de 5-7 slides ou imagem única)
  - **LinkedIn:** Post nativo longo (300-500 palavras, sem link no corpo, link no 1o comentário) + 3-5 hashtags profissionais
- [ ] Salvar outputs em `content/social/[slug]/` (um diretório por artigo com `instagram.md` e `linkedin.md`)
- [ ] Gerar rascunhos para os 20 artigos prioritários primeiro (alto potencial: próteses, salários, IA, cirurgia robótica, mercado de trabalho)
- [ ] Criar comando `npm run social` que processa artigos novos
- [ ] Integrar no workflow `npm run publish`

**Importante:** Os rascunhos são ponto de partida, não posts finais. Revisar e adaptar antes de publicar. IA gera ~70% do post, humano refina os 30% restantes.

**Arquivos afetados:**
- `scripts/generate-social-posts.ts` (novo)
- `content/social/` (novo diretório)
- `package.json` (novo script `social`)

**Estimativa:** 5-7 horas

---

### 2.2 Calendário editorial simplificado

**Por quê:** Sem calendário, a consistência morre em 2 semanas. Mas um calendário para 6 plataformas é overengineering neste estágio.

**O que fazer:**
- [ ] Criar `CALENDARIO-EDITORIAL.md` com:
  - **Cadência realista:** Instagram 5x/semana, LinkedIn 3x/semana
  - Tipos de conteúdo por dia da semana:
    - Segunda: dado/estatística (ex: "Salário médio de um engenheiro biomédico em 2026")
    - Terça: dica de carreira (ex: "3 certificações que valorizam seu currículo")
    - Quarta: equipamento/tecnologia (ex: "Como funciona um tomógrafo")
    - Quinta: regulamentação/norma (ex: "O que muda com a nova RDC da ANVISA")
    - Sexta: curiosidade/viral (ex: "Prótese biônica controlada pelo cérebro")
  - Framework de repurposing: artigo → carousel Instagram → post LinkedIn → CTA newsletter
- [ ] Mapear os 91 artigos existentes para posts futuros (backlog de ~180+ posts)
- [ ] Priorizar os 20 artigos com maior potencial de engajamento
- [ ] Escolher ferramenta de agendamento (Buffer free tier: 3 canais, 10 posts/canal agendados)

**Estimativa:** 3-4 horas (planejamento)

---

### 2.3 Instalar Meta Pixel

**Por quê:** Com distribuição social ativa (Fase 2.1/2.2), o Meta Pixel passa a ter valor real — rastreia visitantes vindos do Instagram/Facebook para retargeting futuro. Sem tráfego social, o pixel apenas duplicaria dados já capturados pelo GA4.

**O que fazer:**
- [ ] Criar conta no Meta Business Suite (se não existir)
- [ ] Gerar o Pixel ID no Meta Events Manager
- [ ] Criar componente `MetaPixel.tsx` em `src/components/layout/`
- [ ] Adicionar ao `layout.tsx` junto ao GA4 existente
- [ ] Configurar eventos: `PageView` (automático), `Lead` (ao assinar newsletter), `ViewContent` (ao ler artigo), `CompleteRegistration` (ao entrar na comunidade)
- [ ] Verificar no Meta Pixel Helper (extensão Chrome)

**Arquivos afetados:**
- `src/components/layout/MetaPixel.tsx` (novo)
- `src/app/layout.tsx` (adicionar componente)
- `.env.local` (adicionar `NEXT_PUBLIC_META_PIXEL_ID`)

**Estimativa:** 1-2 horas

---

## Fase 3 — Backlinks e Autoridade (Semanas 6-8)

### 3.1 Kit de parceria para universidades

**Por quê:** 27 universidades com cursos de Eng. Biomédica = 27 potenciais backlinks `.edu.br` (os mais valiosos para SEO). Nenhum foi abordado até agora.

**O que fazer:**
- [ ] Criar página `/parceiros` com:
  - Proposta de valor para coordenadores de curso
  - Badge/selo "Recurso recomendado" que universidades podem exibir (imagem embed com link)
  - Formulário de contato específico para parcerias acadêmicas
  - Oferta de guest posts de professores/pesquisadores
- [ ] Criar email-template de abordagem para coordenadores:
  - Apresentar o portal e o perfil do fundador (Pós-doutor USP)
  - Oferecer conteúdo exclusivo (entrevistas com professores do programa)
  - Solicitar inclusão como recurso recomendado no site do curso
- [ ] Criar lista das 27 universidades com dados de contato dos coordenadores
- [ ] Preparar 3 propostas de guest post já escritas como amostra
- [ ] Começar abordagem pelas 5 universidades com programas mais novos (mais receptivas) e onde o autor tem rede

**Arquivos afetados:**
- `src/app/parceiros/page.tsx` (novo)
- Documentos de outreach (fora do código)

**Estimativa:** 6-8 horas

---

### 3.2 Submissão a diretórios e associações

**Por quê:** SBEB, ABIMO, CONFEA — um backlink dessas entidades vale mais que 100 backlinks genéricos.

**O que fazer:**
- [ ] Listar e submeter em cada associação:
  - SBEB (Sociedade Brasileira de Engenharia Biomédica)
  - ABIMO (Associação Brasileira da Indústria de Dispositivos Médicos)
  - CONFEA/CREA (Conselho Federal/Regional de Engenharia)
  - ABIMED (Associação Brasileira da Indústria de Alta Tecnologia de Produtos para Saúde)
  - INEP (Instituto Nacional de Estudos e Pesquisas Educacionais)
- [ ] Atualizar o Currículo Lattes do autor com link para o portal
- [ ] Cadastrar o portal no Google Scholar (para artigos técnicos)
- [ ] Submeter para diretórios de recursos educacionais brasileiros
- [ ] Buscar menções existentes ao site sem link (brand mentions → link building)

**Estimativa:** 4-6 horas (trabalho manual, não código)

---

## Fase 4 — Monetização e Recorrência (Semanas 9-12)

### 4.1 Criar página `/cursos` (curadoria + afiliação)

**Por quê:** Página de alta intenção comercial. Estudantes e profissionais buscam cursos ativamente. Potencial de receita via links de afiliados. Mais fácil de manter que vagas (cursos mudam com menor frequência).

**O que fazer:**
- [ ] Criar `src/data/cursos.ts` com dados estruturados:
  - Nome, plataforma, preço, duração, nível, categoria, link (afiliado onde disponível)
  - Categorias: graduação, pós-graduação, cursos livres, certificações
- [ ] Criar página `src/app/cursos/page.tsx` com:
  - Listagem por categoria com filtros
  - Avaliação breve de cada curso (1-2 frases)
  - Schema markup `Course` para cada item
  - CTA: "Não encontrou o curso ideal? Fale com a comunidade"
- [ ] Adicionar à navegação principal e footer

**Arquivos afetados:**
- `src/app/cursos/page.tsx` (novo)
- `src/data/cursos.ts` (novo)
- `src/data/navigation.ts`
- `src/components/layout/Footer.tsx`

**Estimativa:** 6-8 horas

---

### 4.2 Criar página `/vagas` (agregador de oportunidades)

**Por quê:** Alto valor para o público + alta recorrência de visitas + potencial de monetização futura.

**Abordagem realista:** Curadoria manual não escala. Começar com embed de vagas do LinkedIn (filtro "engenharia biomédica" + "engenharia clínica") e seção de vagas destacadas atualizada semanalmente.

**O que fazer:**
- [ ] Criar página `src/app/vagas/page.tsx` com:
  - Seção "Vagas em Destaque" (5-10 vagas curadas manualmente, atualizadas semanalmente)
  - Embed ou links diretos para busca filtrada no LinkedIn Jobs, Catho, InfoJobs
  - Filtros simples: área (clínica/pesquisa/indústria), tipo (CLT/PJ/estágio)
  - CTA: "Receba vagas por email" → newsletter segmento `profissionais`
  - CTA: "Publique uma vaga" → formulário de contato (monetização futura)
- [ ] Adicionar à navegação principal e footer
- [ ] Considerar automação futura apenas se tráfego justificar (>500 visitas/mês na página)

**Arquivos afetados:**
- `src/app/vagas/page.tsx` (novo)
- `src/data/navigation.ts`
- `src/components/layout/Footer.tsx`

**Estimativa:** 5-7 horas

---

## Resumo de Prioridades (Revisado)

| Fase | Ação | Impacto | Esforço | Semana | Status |
|------|------|---------|---------|--------|--------|
| 0 | ~~Auditoria internal linking~~ | Alto (SEO on-page) | ~~4-6h~~ | 1 | ✅ Script criado e executado |
| 0 | ~~Corrigir artigos órfãos~~ | Alto (SEO on-page) | ~~2-3h~~ | 1 | ✅ 7 órfãos corrigidos, 18 links adicionados |
| 0 | ~~Limpeza código morto~~ | Baixo (manutenção) | ~30min | 1 | ✅ 17 arquivos removidos (16 stubs + ComingSoonPage) |
| 0 | ~~Correção testes e2e~~ | Médio (CI/CD) | ~2h | 1 | ✅ 51/51 e2e + 66/66 unit passando |
| 0 | CTAs contextuais nos artigos | Alto (conversão) | 4-5h | 1 | 🔲 Pendente |
| 0 | Análise Google Search Console | Alto (decisões data-driven) | 3-4h | 1 | 🔲 Pendente |
| 1 | Comunidade WhatsApp + página | Alto (engajamento) | 4-5h | 2 | 🔲 Pendente |
| 1 | Lead magnet MVP (1 PDF) | Alto (captura de emails) | 6-8h | 2-3 | 🔲 Pendente |
| 1 | Segmentação newsletter | Médio (relevância) | 4-6h | 3 | 🔲 Pendente |
| 2 | Posts Instagram + LinkedIn | Alto (distribuição) | 5-7h | 4 | 🔲 Pendente |
| 2 | Calendário editorial | Alto (consistência) | 3-4h | 4 | 🔲 Pendente |
| 2 | Meta Pixel | Médio (retargeting) | 1-2h | 5 | 🔲 Pendente |
| 3 | Kit parceria universidades | Alto (backlinks .edu.br) | 6-8h | 6-7 | 🔲 Pendente |
| 3 | Submissão a diretórios | Alto (autoridade) | 4-6h | 7-8 | 🔲 Pendente |
| 4 | Página de cursos | Médio (monetização) | 6-8h | 9-10 | 🔲 Pendente |
| 4 | Página de vagas | Médio (recorrência) | 5-7h | 11-12 | 🔲 Pendente |

**Esforço total estimado:** ~56-74 horas ao longo de 12 semanas (~5-6h/semana)

---

## Métricas de Sucesso (3 meses após início)

| Metrica | Atual | Meta Conservadora | Meta Otimista |
|---------|-------|-------------------|---------------|
| Inscritos newsletter | ~desconhecido | 200-300 | 500-800 |
| Downloads do PDF | 0 | 50-100 | 200-300 |
| Membros WhatsApp | 0 | 50-100 | 200-300 |
| Posts publicados (redes) | ~0 | 60 (Instagram + LinkedIn) | 100+ |
| Seguidores Instagram | ~0 | 300-500 | 1.000+ |
| Seguidores LinkedIn | ~0 | 200-400 | 800+ |
| Backlinks .edu.br | 0 | 2-3 | 5+ |
| Tráfego orgânico/mês | <1.000 | 2.000-3.000 | 5.000-8.000 |
| CTR médio (GSC) | ~desconhecido | +20% vs. baseline | +40% vs. baseline |

---

## Dependências e Riscos

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| WhatsApp bane comunidade ou muda regras | Média | Alto | Email é canal primário; sempre coletar email antes de direcionar ao WhatsApp; backup de membros |
| Meta Pixel exige conta Business verificada | Baixa | Baixo | Criar conta com antecedência (verificação leva 2-5 dias); adiado para Fase 2 |
| PDF não gera downloads suficientes | Média | Baixo | MVP com 1 PDF valida demanda antes de investir em pipeline automatizado |
| Universidades não respondem | Alta | Médio | Começar pelas 5 com programas mais novos; usar rede do autor; oferecer valor primeiro (guest post do professor) |
| Consistência de posts é exigente | Alta | Alto | Batch content: gerar 2-4 semanas de posts de uma vez; agendar com Buffer; focar em 2 plataformas, não 6 |
| Segmentação adiciona fricção ao formulário | Média | Médio | Campo de interesse opcional (não obrigatório); default para "geral" se não selecionado |
| Curadoria manual de vagas não escala | Alta | Baixo | Começar com embed/links para plataformas externas; automatizar apenas se tráfego justificar |

---

## O que NÃO fazer agora

- **Tráfego pago** — Sem lead magnets validados e audiência social, anúncios queimam dinheiro. Reavaliar após Fase 2.
- **6 plataformas sociais simultâneas** — TikTok e YouTube Shorts exigem produção de vídeo, não apenas texto. Adicionar após dominar Instagram + LinkedIn.
- **Pipeline automatizado de PDFs** — Validar demanda com 1 PDF manual primeiro. Automatizar apenas se >50 downloads em 30 dias.
- **Discord/Slack** — WhatsApp primeiro por ser menor fricção no Brasil. Comunidade tech depois quando houver massa crítica (>500 membros).
- **App mobile** — O site é responsivo; app não agrega valor neste estágio.
- **Plataforma de cursos própria** — Curadoria de cursos externos primeiro; produção própria só com audiência consolidada (>2.000 inscritos newsletter).
- **Podcast** — Alto esforço de produção, baixo retorno inicial para operação solo.
- **Scraping de vagas** — Risco legal e de manutenção. Links para plataformas externas são suficientes.

---

## Critérios de Go/No-Go entre Fases

| Transição | Critério para avançar |
|-----------|----------------------|
| Fase 0 → Fase 1 | 20 artigos órfãos corrigidos; CTAs inseridos nos top 20 artigos; relatório de GSC analisado |
| Fase 1 → Fase 2 | Comunidade criada com >10 membros; PDF com >10 downloads; newsletter segmentada funcionando |
| Fase 2 → Fase 3 | >20 posts publicados; cadência mantida por 2+ semanas; Meta Pixel instalado e rastreando |
| Fase 3 → Fase 4 | >3 universidades abordadas; >1 backlink .edu.br confirmado |

---

## Stack e Ferramentas Necessárias

| Ferramenta | Uso | Custo |
|-----------|-----|-------|
| Resend (já ativo) | Email marketing + newsletter segmentada | Free tier (3.000 emails/mês) |
| Upstash Redis (já ativo) | Rate limiting | Free tier |
| Cloudflare Turnstile (já ativo) | Anti-spam em formulários | Gratuito |
| GA4 (já ativo) | Analytics | Gratuito |
| Google Search Console (✅ verificado) | Dados de busca e performance | Gratuito |
| Meta Business Suite | Meta Pixel + insights | Gratuito |
| Buffer | Agendamento de posts sociais | Free tier (3 canais, 10 posts) |
| Canva / Google Docs | Criação de PDFs (MVP) | Gratuito |
| WhatsApp Business | Comunidade | Gratuito |
