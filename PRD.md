# PRD v2.0 — engenhariabiomedica.com

**Portal de Referência sobre Engenharia Biomédica no Brasil**

| Campo | Valor |
|-------|-------|
| Versão | 2.3 |
| Data | Março 2026 |
| Autor | Mardoqueu Costa |
| Horizonte | Q2–Q3 2026 (6 meses) |
| Foco estratégico | SEO e tráfego orgânico |
| Classificação | Interno |

---

## 1. Resumo Executivo

O **engenhariabiomedica.com** é um portal de conteúdo especializado em Engenharia Biomédica, construído com Next.js 14 (App Router), TypeScript e Tailwind CSS, deployado via Docker no Railway. O projeto evoluiu de um site informativo para uma plataforma com 88 artigos técnicos, sistema de newsletter automatizada, diretório de 495 empresas, glossário, infraestrutura SEO avançada com Schema.org MedicalWebPage, e sistema de autenticação em estágio inicial.

Este PRD v2.0 substitui o documento retroativo v1.0, corrigindo dados desatualizados, expandindo a documentação de SEO (o ativo mais forte do projeto), e estabelecendo um roadmap priorizado de 6 meses com foco em crescimento orgânico.

### Snapshot do Projeto (Março 2026 — Auditado)

| Dimensão | Status Atual |
|----------|-------------|
| Código-fonte | 179 arquivos TypeScript/TSX |
| Artigos publicados | 88 artigos técnicos em 10 categorias |
| Páginas (rotas) | 43 page.tsx + 1 rota dinâmica `[slug]` |
| API Routes | 9 endpoints (subscribe, confirm, contact, OG, webhooks, auth, register, delete-data, unsubscribe) |
| Redirects 301 | 84 redirecionamentos permanentes em `next.config.js` |
| Newsletter | Automatizada quinzenal via GitHub Actions + Resend (double opt-in) |
| Deploy | Railway (Docker multi-stage, node:20-alpine) com auto-deploy via GitHub |
| Domínio | engenhariabiomedica.com |
| Analytics | Google Analytics 4 (G-HMFP981CMP) |
| Structured Data | Organization, WebSite, MedicalWebPage, FAQPage, BreadcrumbList, ImageObject, Speakable |
| Assets estáticos | 248 arquivos em `/public` |

### Proposta de Valor

O portal ocupa um nicho com **baixa concorrência e alta demanda latente**: não existe no Brasil uma fonte centralizada, atualizada e tecnicamente confiável sobre Engenharia Biomédica. Sites institucionais são desatualizados, portais de educação generalistas não dominam o tema, e fóruns são dispersos. O portal preenche esse vácuo com conteúdo aprofundado, estruturado para SEO e validado por profissional da área.

---

## 2. Público-Alvo e Personas

| Persona | Necessidade Principal | Estágio | Keywords Alvo | Conteúdo Existente | Gap |
|---------|----------------------|---------|---------------|-------------------|-----|
| Estudante pré-vestibular | Entender a profissão, notas de corte, faculdades | Topo | "engenharia biomédica vale a pena", "o que faz engenheiro biomédico" | 13 artigos Formação, guia completo | Quiz de área, comparador de cursos |
| Graduando | Grade curricular, estágio, TCC, ferramentas | Meio | "grade curricular engenharia biomédica", "estágio engenharia biomédica" | Artigos de carreira, ferramentas Python/MATLAB | Modelos de TCC, banco de estágios |
| Recém-formado | Mercado, salários, certificações, CREA | Meio | "salário engenheiro biomédico", "certificação engenharia clínica" | 18 artigos Profissão, certificações | Calculadora salarial, job board |
| Engenheiro clínico | Normas (IEC 60601, ISO 13485), manutenção, KPIs | Fundo | "manutenção preventiva hospitalar", "indicadores engenharia clínica" | 6 sub-páginas de equipamentos, artigos de regulamentação | Templates de PMP, planilhas de KPI |
| Pesquisador / Pós-graduando | Financiamento, publicação, centros de pesquisa | Fundo | "financiamento pesquisa saúde Brasil", "publicar artigo científico" | 15 artigos Pesquisa, ferramentas | Diretório de grupos de pesquisa |
| Empreendedor healthtech | Regulação ANVISA, registro de dispositivos, ecossistema | Fundo | "registro dispositivo médico ANVISA", "SaMD regulamentação" | 15 artigos Regulamentação, startups/hubs | Guia passo-a-passo de registro |

---

## 3. Arquitetura Técnica

### 3.1 Stack Tecnológico

| Camada | Tecnologia | Versão | Observações |
|--------|-----------|--------|-------------|
| Framework | Next.js (App Router) | 14.2.21 | TypeScript, output standalone |
| Runtime | Node.js | >=18 | Alpine Linux no Docker |
| Estilos | Tailwind CSS | 3.4.16 | Design system com variáveis CSS customizadas |
| Tipografia | Fraunces + DM Sans + DM Mono | — | Google Fonts com display swap |
| Ícones | Lucide React | 0.468.0 | Tree-shakeable |
| Email | Resend + React Email | 6.9.2 / 2.0.4 | Double opt-in, broadcast via segments |
| Rate Limiting | Upstash Redis | 1.36.2 / 2.0.8 | 10 req/hora por IP no subscribe |
| Anti-spam | Cloudflare Turnstile | — | Verificação server-side com fallback honeypot |
| Banco de Dados | PostgreSQL (Prisma ORM) | — | Schema para User/Account/Session/VerificationToken |
| Deploy | Railway (Docker multi-stage) | — | Auto-deploy via push no `main` |
| CI/CD | GitHub Actions | — | Newsletter automatizada quinzenal |
| Analytics | Google Analytics 4 | — | G-HMFP981CMP |
| SEO | Schema.org (JSON-LD) | — | MedicalWebPage, FAQPage, Organization, Speakable |

### 3.2 Modelo de Dados de Conteúdo

Os artigos são armazenados como **arquivos MDX** (`.mdx`) em `src/data/artigos/`, cada um com frontmatter YAML contendo metadados e corpo HTML no campo `conteudo`. Os metadados (`ArtigoMeta`) são carregados dinamicamente em build time via `gray-matter`, lendo o frontmatter de todos os `.mdx` — sem necessidade de manutenção manual. Para adicionar um artigo, basta criar um `.mdx`.

```typescript
interface ArtigoMeta {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  categoriaVariant: 'primary' | 'teal' | 'coral' | 'amber';
  data: string;           // YYYY-MM-DD
  dataModificacao?: string;
  leitura: string;        // ex: "35 min"
  imagens?: ArtigoImagem[];
}

interface ArtigoImagem {
  src: string;
  alt: string;
  caption?: string;
}

interface Artigo {
  titulo: string;
  resumo: string;
  categoria: string;
  categoriaVariant: 'primary' | 'teal' | 'coral' | 'amber';
  data: string;
  leitura: string;
  conteudo: string | string[];
}
```

**Carregamento:** `getArtigo(slug)` lê o `.mdx` via `fs.readFileSync` + `gray-matter`; `metadata.ts` escaneia todos os `.mdx` com `fs.readdirSync` e expõe `artigosMeta` (array) e `artigosMetaMap` (Record); `generateStaticParams()` pré-renderiza todos os slugs em build time.

### 3.3 Sistema de Newsletter

Pipeline completo de email marketing:

1. **Inscrição:** Formulário com Turnstile → rate limiting (10/hora/IP) → email de confirmação com token HMAC
2. **Confirmação:** Double opt-in via `/api/confirm` → criação de contato no Resend → email de boas-vindas
3. **Envio automatizado:** GitHub Actions (cron quinzenal, terças, 10:15 BRT, semanas pares ISO) executa `scripts/send-newsletter.ts`
4. **Seleção de conteúdo:** `getRecentArticles(16)` — artigos dos últimos 16 dias; fallback para os 5 mais recentes
5. **Broadcast:** `broadcasts.create()` → `broadcasts.send(id)` usando `segmentId`
6. **Notificação:** Slack webhook após envio (sucesso/falha)
7. **Cancelamento:** `/api/unsubscribe` + página `/unsubscribe`
8. **Webhooks:** `/api/webhooks/resend` para bounce/complaint handling

**Templates React Email (4):**
- `confirm-subscription.tsx` — Email de confirmação com link de double opt-in
- `welcome.tsx` — Boas-vindas após confirmação
- `newsletter-digest.tsx` — Digest quinzenal com artigos destacados
- `newsletter-template.tsx` — Template genérico

### 3.4 Sistema de Autenticação

Schema Prisma com modelo de roles (`ADMIN`, `PROFESSOR`, `STUDENT`), integrado via NextAuth com adapter Prisma. Rotas `/login`, `/cadastro` e `/dashboard` existem. Endpoint `/api/auth/register` processa cadastro com hash de senha.

**Status:** Funcionalidade limitada — autenticação implementada mas sem features protegidas por role.

---

## 4. Infraestrutura SEO (Detalhada)

Esta é a seção central do PRD. O portal possui uma infraestrutura SEO madura que constitui seu principal ativo técnico e diferencial competitivo.

### 4.1 Structured Data (JSON-LD)

| Schema | Localização | Dados |
|--------|------------|-------|
| **Organization** | `layout.tsx` (global) | Nome, URL, logo, email, sameAs (7 redes sociais: GitHub, LinkedIn, Instagram, Facebook, YouTube, X, TikTok) |
| **WebSite** | `page.tsx` (home) | Nome, URL, descrição, idioma (pt-BR), publisher |
| **MedicalWebPage** | `artigos/[slug]/page.tsx` | Headline, descrição, datas, autor/publisher, articleSection, MedicalSpecialty, imagens, entity linking, speakable |
| **FAQPage** | `artigos/[slug]/page.tsx` (condicional) | Q&A extraídos automaticamente de seções "Perguntas frequentes" via `extract-faq.ts` |
| **BreadcrumbList** | `artigos/[slug]/page.tsx` | 3 níveis: Home → Artigos → Título do artigo |
| **ImageObject** | `artigos/[slug]/page.tsx` | Por imagem do artigo: URL, contentUrl, caption, description, dimensões (1024x576), formato WebP |
| **Speakable** | `artigos/[slug]/page.tsx` | Seletores CSS para voice search: `.text-lg.leading-relaxed`, `h2`, `.prose p:first-of-type` |

### 4.2 Entity Linking

Detecção automática de entidades no conteúdo dos artigos, adicionadas aos campos `about` e `mentions` do schema MedicalWebPage:

| Entidade | URL Oficial | sameAs |
|----------|-----------|--------|
| ANVISA | gov.br/anvisa | Wikipedia |
| FDA | fda.gov | Wikipedia |
| IEEE | ieee.org | Wikipedia |
| ABIMO | abimo.org.br | — |
| ABIMED | abimed.org.br | — |

**Processo:** O conteúdo HTML é convertido para lowercase e verificado contra as chaves do dicionário. Entidades detectadas são adicionadas ao schema como `Organization` com links `sameAs` para Wikipedia/Wikidata.

### 4.3 Sitemaps

**Sitemap principal** (`src/app/sitemap.ts`):
- 28 rotas estáticas com prioridades diferenciadas (1.0 home, 0.9 artigos, 0.7 hubs, 0.4-0.5 utilitários)
- N artigos dinâmicos (prioridade 0.8; guia principal com 0.9)
- Frequências: daily (artigos), weekly (home), monthly (hubs), yearly (estáticas)

**Image sitemap** (`src/app/image-sitemap.xml/route.ts`):
- Filtra artigos com imagens
- Gera `<image:loc>`, `<image:title>`, `<image:caption>` por imagem
- Namespace: `xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"`

### 4.4 OG Images Dinâmicas

**Rota:** `/api/og` (Edge Runtime)

- Parâmetros: `title`, `category`
- Dimensões: 1200x630 (padrão OG)
- Design: fundo azul escuro (#0f2a4a), badge teal para categoria, título branco
- Font sizing adaptativo: 52px (normal), 42px (títulos >60 chars)
- **Cache:** `max-age=86400, stale-while-revalidate=604800` (1 dia + 7 dias)

### 4.5 Estratégia de Redirects

**84 redirects 301** permanentes em `next.config.js`, organizados em 3 padrões:

| Padrão | Quantidade | Exemplo |
|--------|-----------|---------|
| Short → Deep | ~23 | `/formacao/graduacao` → `/artigos/todas-faculdades-...` |
| Old → New | ~26 | `/artigos/o-que-faz-engenheiro-biomedico` → `/artigos/...-9-caminhos` |
| Area → Hub/Article | ~35 | `/especialidades/*` → `/areas-de-atuacao/*` → `/artigos/*` |

**Propósito:** Consolidar conteúdo fragmentado em guias definitivos, melhorando topical authority e evitando canibalização de keywords.

### 4.6 Caching Multi-Camada

| Tipo de Asset | Cache-Control | TTL |
|--------------|--------------|-----|
| Imagens WebP | `public, max-age=31536000, immutable` | 1 ano |
| HTML/páginas | `public, max-age=3600, stale-while-revalidate=86400` | 1h + 1 dia |
| OG Images | `public, max-age=86400, stale-while-revalidate=604800` | 1 dia + 7 dias |
| Ícones/favicon | `public, max-age=604800, stale-while-revalidate=2592000` | 7 dias + 30 dias |

### 4.7 Configurações de Crawling

**Robots** (`src/app/robots.ts`):
- Allow: `/` (tudo permitido por padrão)
- Disallow: `/api/`, `/dashboard/`, `/login/`, `/cadastro/`
- Sitemaps: `sitemap.xml` + `image-sitemap.xml`

**Google Bot (metadata):**
- `index: true`, `follow: true`
- `maxVideoPreview: -1` (sem limite)
- `maxImagePreview: 'large'`
- `maxSnippet: -1` (sem limite)

### 4.8 Canonical URLs e Meta Tags

- **metadataBase:** `https://engenhariabiomedica.com`
- **Template de título:** `%s | Engenharia Biomédica`
- **Canonicals:** Relativos por página, resolvidos via metadataBase
- **Open Graph:** type `website` (home) / `article` (artigos), locale `pt_BR`, imagem dinâmica 1200x630
- **Twitter Card:** `summary_large_image`
- **Keywords:** 9 termos primários cobrindo curso, salário, regulamentação, profissão e mercado

### 4.9 Middleware

**`src/middleware.ts`:** Redirect `www.engenhariabiomedica.com` → `engenhariabiomedica.com` (301 permanente).

### 4.10 FAQ Automático

**`src/lib/extract-faq.ts`** extrai pares pergunta/resposta do HTML dos artigos:
1. Localiza seção `<h2>Perguntas frequentes</h2>`
2. Suporta dois formatos: `<h3>Q?</h3><p>A</p>` e `<p><strong>Q?</strong></p><p>A</p>`
3. Strip de tags HTML
4. Popula schema FAQPage condicionalmente (só se FAQ existir)

**Impacto SEO:** Habilita featured snippets no Google sem marcação manual.

---

## 5. Arquitetura de Conteúdo

### 5.1 Modelo Hub-and-Spoke

O portal organiza conteúdo em **7 hubs temáticos** que funcionam como páginas de agregação, direcionando para **88 artigos** (spokes) que contêm o conteúdo aprofundado.

```
Home (/)
├── Formação (/formacao)           → 13 artigos
├── Carreira (/carreira)            → 18 artigos + 7 sub-páginas
│   ├── /roadmap-engenheiro-biomedico
│   ├── /certificacoes
│   ├── /cursos-especializacoes
│   ├── /estagio-primeiro-emprego
│   ├── /livros-engenharia-biomedica
│   ├── /processo-seletivo
│   └── /transicao-carreira
├── Áreas de Atuação (/areas-de-atuacao) → 11 artigos
├── Equipamentos (/equipamentos)    → artigos + 6 sub-páginas
│   ├── /uti
│   ├── /centro-cirurgico
│   ├── /diagnostico-imagem
│   ├── /manutencao-hospitalar
│   ├── /gestao-parque-tecnologico
│   └── /indicadores-engenharia-clinica
├── Mercado (/mercado)              → 8 artigos + /empresas
├── Regulamentação (/regulamentacao) → 15 artigos + 2 sub-páginas
│   ├── /certificacao-inmetro
│   └── /software-dispositivo-medico-samd
├── Pesquisa (/pesquisa)            → 15 artigos + 3 sub-páginas
│   ├── /ferramentas-python-matlab
│   ├── /publicacao-cientifica
│   └── /financiamento
├── Artigos (/artigos)              → 88 artigos (listagem central)
├── Glossário (/glossario)          → 20 termos técnicos
├── Newsletter (/newsletter)        → Inscrição dedicada
└── Páginas auxiliares              → sobre, contato, privacidade, excluir-dados, recursos
```

### 5.2 Distribuição por Categoria

| Categoria | Artigos | Variant | Observações |
|-----------|---------|---------|-------------|
| Profissão | 18 | — | Maior vertical; cobre carreira, salário, certificações |
| Regulamentação | 15 | coral | ANVISA, CREA, normas técnicas, compliance |
| Pesquisa | 15 | — | Centros, financiamento, ferramentas, publicação |
| Formação | 13 | — | Universidades, grade, pós-graduação |
| Inovação | 11 | amber | Tecnologias emergentes, IA, wearables |
| Mercado | 8 | teal | Tendências, empresas, investimento |
| Guia Completo | 4 | primary | Conteúdos definitivos (35+ min de leitura) |
| Internacional | 1 | — | Repositórios acadêmicos |
| História | 1 | teal | COPPE/UFRJ 1971 até presente |
| Eventos | 1 | — | Calendário de congressos |

### 5.3 Padrão de Hub Page

Cada hub segue estrutura consistente:
1. **PageHeader** — Breadcrumbs, overline, título, descrição
2. **Stats Grid** — 4 métricas-chave (ex: "28+ Cursos de Graduação")
3. **Section Cards** — 6-12 cards com links para artigos/sub-páginas + badges de categoria
4. **Timeline** (opcional) — Progressão histórica ou contextual
5. **Intro Text** — 2-3 parágrafos de contextualização

### 5.4 Internal Linking

| Canal | Mecanismo | Cobertura |
|-------|----------|-----------|
| Header | Mega-menu com dropdowns (7 categorias, 3-13 itens cada) | Todas as páginas |
| Footer | 5 colunas temáticas com 20+ links diretos para artigos | Todas as páginas |
| Breadcrumbs | Home → Seção → Página (3 níveis, schema BreadcrumbList) | Artigos e sub-páginas |
| Hub → Artigo | Section Cards com badges e CTAs | Hub pages |
| Artigo → Newsletter | CTA box ao final de cada artigo | Todos os artigos |
| Artigo → Listagem | Link "Ver todos os artigos" com ArrowLeft | Todos os artigos |

| Artigo → Artigo | Componente "Artigos Relacionados" (até 4 da mesma categoria, grid responsivo) | Todos os artigos |

**Lacuna anterior resolvida (Março 2026):** Componente `RelatedArticles` implementado — exibe até 4 artigos da mesma categoria no final de cada artigo, com Badge, título, resumo e tempo de leitura.

---

## 6. Funcionalidades Existentes (Inventário)

### 6.1 Componentes UI

| Componente | Caminho | Finalidade |
|-----------|---------|-----------|
| Header | `components/layout/Header.tsx` | Navegação com mega-menu desktop/mobile |
| Footer | `components/layout/Footer.tsx` | Links temáticos, redes sociais, newsletter |
| Logo | `components/layout/Logo.tsx` | Identidade visual |
| Badge | `components/ui/Badge.tsx` | Tags de categoria com color variants |
| StatCard | `components/ui/StatCard.tsx` | Cards de métricas nas hub pages |
| PageHeader | `components/ui/PageHeader.tsx` | Cabeçalho padronizado com breadcrumbs |
| SectionCard | `components/ui/SectionCard.tsx` | Cards de seção temática |
| ComingSoonPage | `components/ui/ComingSoonPage.tsx` | Placeholder para páginas futuras |
| Turnstile | `components/ui/Turnstile.tsx` | Widget anti-spam Cloudflare |
| NewsletterForm | `components/forms/NewsletterForm.tsx` | Formulário de inscrição (padrão) |
| HomeNewsletterForm | `components/forms/HomeNewsletterForm.tsx` | Formulário de inscrição (home) |
| ContatoForm | `components/forms/ContatoForm.tsx` | Formulário de contato |

### 6.2 API Routes

| Endpoint | Método | Finalidade | Proteções |
|----------|--------|-----------|-----------|
| `/api/subscribe` | POST | Inscrição newsletter | Turnstile + rate limit (10/h/IP) + honeypot |
| `/api/confirm` | GET | Double opt-in | Token HMAC |
| `/api/contact` | POST | Formulário de contato | Turnstile |
| `/api/og` | GET (Edge) | Imagem OG dinâmica | Cache 1 dia |
| `/api/webhooks/resend` | POST | Bounce/complaint webhook | — |
| `/api/auth/[...nextauth]` | * | NextAuth endpoints | NextAuth |
| `/api/auth/register` | POST | Cadastro de usuário | Hash de senha |
| `/api/delete-data` | POST | Exclusão de dados (LGPD) | — |
| `/api/unsubscribe` | GET/POST | Cancelamento de newsletter | — |

### 6.3 Utilitários (`src/lib/`)

| Módulo | Finalidade |
|--------|-----------|
| `auth.ts` | Configuração NextAuth com Prisma adapter |
| `tokens.ts` | Geração e verificação de tokens HMAC |
| `ratelimit.ts` | Rate limiting via Upstash Redis |
| `turnstile.ts` | Verificação server-side do Cloudflare Turnstile |
| `prisma.ts` | Singleton do Prisma Client |
| `extract-faq.ts` | Extração de FAQ do HTML para Schema.org |

---

## 7. Dívidas Técnicas (Priorizadas por Impacto em SEO)

### P0 — Críticas (bloqueiam crescimento)

| Dívida | Impacto SEO | Ação | Status |
|--------|------------|------|--------|
| ~~Sem busca interna~~ | ~~88 artigos sem discovery~~ | ~~Implementar Fuse.js~~ | **Concluído** (Março 2026) — Fuse.js client-side com modal global Ctrl+K + busca inline na /artigos |
| ~~Artigos em `.ts` com HTML inline~~ | ~~Publicação lenta~~ | ~~Migrar para MDX com frontmatter~~ | **Concluído** (Março 2026) — 88 artigos migrados para .mdx; metadata.ts e index.ts dinamizados |

### P1 — Importantes (risco operacional)

| Dívida | Impacto SEO | Ação | Status |
|--------|------------|------|--------|
| ~~Sem testes automatizados~~ | ~~Regressão silenciosa em cada deploy~~ | ~~Vitest + Playwright~~ | **Concluído** (Março 2026) — 66 unit tests + 51 e2e tests (páginas, busca, redirects, SEO, sitemap) |
| ~~Sem monitoramento de erros~~ | ~~Páginas 500/404 despercebidas~~ | ~~Sentry para Next.js~~ | **Desabilitado** (Março 2026) — @sentry/nextjs v10 instalado e configurado, porém **causava 502 (timeout 15s) em todas as rotas no Railway**. O `withSentryConfig` injeta hooks OpenTelemetry no middleware (+83 KB) e server que travam o processo em containers com recursos limitados. Healthcheck passa, mas requests subsequentes nunca recebem resposta. Instrumentação server/edge e wrapper desabilitados; `global-error.tsx` e client SDK mantidos. DSN configurado no Railway. **Requer:** investigar compatibilidade com Railway (memória/CPU) ou migrar para Sentry client-only. |
| ~~`.env.example` incompleto~~ | ~~Apenas 4 de 12+ variáveis~~ | ~~Documentar todas~~ | **Concluído** (Março 2026) — 12 variáveis documentadas no .env.example |
| ~~Sem "Artigos Relacionados"~~ | ~~Cross-linking fraco entre artigos~~ | ~~Componente com artigos da mesma categoria~~ | **Concluído** (Março 2026) — `RelatedArticles` exibe até 4 artigos da mesma categoria ao final de cada artigo; grid responsivo 1×1/2×2 com Badge, título, resumo e tempo de leitura |

### P2 — Desejáveis (melhorias incrementais)

| Dívida | Impacto | Ação |
|--------|---------|------|
| Sem CDN explícito | 248 assets servidos pelo Railway sem edge caching | Cloudflare |
| Tailwind config duplicado | `.js` é placeholder vazio; confusão para devs | Remover `.js` |
| Prisma subutilizado | Banco provisionado para auth básico; sem uso para features de produto | Aproveitar para busca, favoritos, comentários |
| Sem métricas de conteúdo | Sem scroll depth, tempo de leitura real, compartilhamentos | GA4 custom events |
| Entity linking limitado | Apenas 5 entidades; faltam CREA, CONFEA, ISO, IEC, OMS | Expandir dicionário |

---

## 8. Estratégia SEO — Plano de 6 Meses

### 8.1 Q2 2026 (Abril–Junho): Fundação SEO

#### Mês 1 — Infraestrutura de Discovery

| Entrega | Detalhamento | Impacto Esperado |
|---------|-------------|-----------------|
| Busca interna | Pagefind (estático, zero-config para SSG) ou Fuse.js (client-side, fuzzy search) | Reduz bounce rate 5-10%; aumenta páginas/sessão |
| Monitoramento de erros | Sentry SDK para Next.js com alertas de 404/500 | Detecta páginas quebradas em <1h |
| `.env.example` completo | Documentar todas as 12+ variáveis necessárias | Reduz onboarding de novo dev de horas para minutos |
| Métricas de conteúdo | GA4 events: scroll_depth (25/50/75/100%), reading_time, share_click | Dados para priorizar conteúdo |

#### Mês 2 — Conteúdo e Internal Linking

| Entrega | Detalhamento | Impacto Esperado |
|---------|-------------|-----------------|
| +10 artigos long-tail | Keywords identificados via Google Search Console (impressões sem cliques) | +50 keywords ranqueadas |
| Glossário expandido | 20 → 50+ termos (cada termo = página indexável adicional) | +30 páginas no índice |
| Artigos Relacionados | Componente no final de cada artigo (3-5 artigos da mesma categoria) | +0.5 páginas/sessão |
| Páginas de categoria | `/artigos/categoria/[nome]` — listagem filtrada com meta dedicada | +10 landing pages indexáveis |

#### Mês 3 — Performance e Core Web Vitals

| Entrega | Detalhamento | Impacto Esperado |
|---------|-------------|-----------------|
| Auditoria Core Web Vitals | Medir LCP, INP, CLS em todas as rotas; corrigir gargalos | 100% pass rate no CWV |
| CDN para assets | Cloudflare (free tier) na frente do Railway | TTFB -50% para visitantes distantes |
| Otimização de imagens | Converter restantes para WebP; lazy loading com blur placeholder | LCP < 2.5s |
| Remover tailwind.config.js | Eliminar placeholder desnecessário | Limpeza de código |

### 8.2 Q3 2026 (Julho–Setembro): Escala e Autoridade

#### Mês 4 — Migração de Conteúdo

| Entrega | Detalhamento | Impacto Esperado |
|---------|-------------|-----------------|
| Migração para MDX | 88 artigos de `.ts` → `.mdx` com frontmatter; preservar URLs e metadata | Publicação sem deploy; contribuição externa |
| Pipeline editorial | Script de scaffolding para novo artigo; validação de frontmatter | Tempo de publicação: horas → minutos |

#### Mês 5 — Autoridade Temática

| Entrega | Detalhamento | Impacto Esperado |
|---------|-------------|-----------------|
| Entity linking expandido | +6 entidades: CREA, CONFEA, ISO, IEC, OMS, OPAS | Melhor knowledge graph recognition |
| Table of Contents | TOC automático para artigos longos (>20 min) com anchor links | Jump links no SERP; UX melhor |
| Schema Article Series | Guias multi-parte conectados via schema | Rich results para séries |
| +15 artigos | Foco em keywords com volume comprovado | Atingir 120+ artigos |

#### Mês 6 — Engajamento e Qualidade

| Entrega | Detalhamento | Impacto Esperado |
|---------|-------------|-----------------|
| Comentários | Giscus (GitHub Discussions) — gratuito, sem backend | UGC para SEO; sinais de engajamento |
| Compartilhamento social | Botões nativos (WhatsApp, LinkedIn, X, copiar link) | Amplificação orgânica |
| Testes automatizados | Vitest (unit) + Playwright (e2e: rotas críticas, redirects, newsletter) | Previne regressão SEO |
| Ferramenta interativa | Calculadora salarial ou quiz "Qual área combina comigo?" | Link bait; alta retenção |

---

## 9. KPIs e Métricas de Sucesso

### 9.1 Métricas de Tração

| KPI | Baseline (Mar/2026) | Meta Jun/2026 | Meta Set/2026 |
|-----|---------------------|--------------|--------------|
| Sessões orgânicas/mês | A medir via GA4 | 5.000 | 15.000 |
| Artigos indexados (Google) | 88 | 100 | 120+ |
| Keywords no top 10 | A medir via GSC | 50 | 150 |
| Keywords no top 100 | A medir via GSC | 200 | 500 |
| Posição média (GSC) | A medir | Top 20 | Top 10 |
| Assinantes da newsletter | A medir via Resend | 300 | 1.000 |
| Taxa de abertura newsletter | A medir | 35%+ | 30%+ |
| Backlinks (referring domains) | A medir | 15 | 30 |

### 9.2 Métricas de Engajamento

| KPI | Meta Jun/2026 | Meta Set/2026 |
|-----|--------------|--------------|
| Tempo médio na página (artigos) | > 3 min | > 3.5 min |
| Bounce rate (artigos) | < 70% | < 60% |
| Páginas por sessão | > 2.0 | > 2.5 |
| Scroll depth médio | > 50% | > 60% |
| Taxa de conversão newsletter | > 2% | > 3% |
| Recorrência (retorno em 30 dias) | > 10% | > 15% |

### 9.3 Métricas Técnicas

| KPI | Meta |
|-----|------|
| Core Web Vitals (LCP) | < 2.5s |
| Core Web Vitals (INP) | < 200ms |
| Core Web Vitals (CLS) | < 0.1 |
| Uptime | > 99.5% |
| Erros 500 em produção | 0 (monitorado via Sentry) |
| Cobertura de testes (rotas críticas) | > 80% |

---

## 10. Requisitos Não-Funcionais

| Requisito | Especificação | Status Atual |
|-----------|--------------|-------------|
| Performance | LCP < 2.5s, INP < 200ms, CLS < 0.1 | A validar |
| Disponibilidade | 99.5% uptime (Railway health check em `/`) | Implementado |
| Segurança | HTTPS, Turnstile, rate limiting (10/h/IP), tokens HMAC, honeypot | Implementado |
| LGPD | Página de privacidade, exclusão de dados, double opt-in | Implementado |
| Acessibilidade | WCAG 2.1 AA | Parcial (sem auditoria formal) |
| SEO | Schema.org completo, sitemaps, robots, canonical, OG dinâmico, 84 redirects | Implementado |
| Responsividade | Mobile-first (testado em 375px) | Implementado |
| Observabilidade | GA4 para analytics; Sentry server-side desabilitado (incompatível com Railway — causa 502 timeout); client SDK e global-error.tsx mantidos | Parcial (Março 2026) |
| Backup | Código em GitHub; banco no Railway | Parcial (sem backup automático de DB) |

---

## 11. Riscos e Mitigações

| Risco | Prob. | Impacto | Mitigação |
|-------|-------|---------|-----------|
| Regressão SEO por deploy sem testes | Alta | Alto | Implementar Playwright para testar redirects, sitemaps e schema em CI |
| Canibalização de keywords entre artigos | Média | Alto | Audit de keywords com GSC; consolidar artigos com overlap via redirects 301 |
| Conteúdo desatualizado prejudica E-E-A-T | Média | Alto | Pipeline de revisão trimestral; `dataModificacao` em metadata |
| Single point of failure (dev único) | Alta | Alto | Migrar para MDX (publicação sem dev); documentar processos; simplificar stack |
| Penalização por conteúdo thin | Baixa | Alto | Manter artigos com >1.500 palavras; expandir glossário com definições substanciais |
| Custo de Railway/Resend escala com tráfego | Média | Médio | Monitorar custos mensais; avaliar Vercel/Cloudflare Pages como alternativa |
| Dependência de Railway (single provider) | Média | Médio | Docker portabilístico; documentar processo de migração |

---

## 12. Decisões Arquiteturais (ADRs)

### ADR-001: Next.js 14 com App Router
Escolhido por SSG nativo, rotas dinâmicas, API routes integradas e ecossistema React. **Trade-off:** complexidade maior que Astro para site predominantemente estático.

### ADR-002: Artigos como MDX com frontmatter (migrado em Março 2026)
Decisão inicial era TypeScript estático para velocidade de prototipagem. **Migrado para MDX** em Março 2026: 88 artigos convertidos de `.ts` para `.mdx` com frontmatter YAML + corpo HTML. `metadata.ts` e `index.ts` dinamizados para ler frontmatter via `gray-matter`. Adicionar novo artigo requer apenas criar um `.mdx` — zero manutenção em outros arquivos.

### ADR-003: Railway + Docker multi-stage
Infraestrutura simples com auto-deploy. Output standalone reduz imagem Docker. **Trade-off:** custo potencialmente maior que serverless em escala.

### ADR-004: Resend para email
API moderna, React Email para templates, broadcasts nativos. **Trade-off:** vendor lock-in moderado.

### ADR-005: Dados de empresas em TypeScript
Consistente com abordagem de artigos. 495 entradas com categorias e metadados. **Trade-off:** mesma limitação de escala.

### ADR-006: Schema.org MedicalWebPage
Tipo específico para conteúdo biomédico, potencialmente melhor para rich results. Inclui entity linking e Speakable para voice search.

### ADR-007: Busca interna — Fuse.js (implementado Março 2026)
Escolhido **Fuse.js** (~6KB gzip) por compatibilidade com `output: 'standalone'` + Docker, fuzzy search nativo, busca accent-insensitive para PT-BR, e zero build step. Pagefind descartado por gerar índice binário incompatível com standalone output e indexar HTML completo (header, footer) gerando ruído. Algolia descartado por ser overengineering para 87 artigos. Implementação: modal global (`Ctrl+K`) via `/api/search-data` + busca inline na `/artigos` com `useArticleSearch` hook. GA4 event tracking integrado.

### ADR-008: Migração para MDX (concluída Março 2026)
MDX preserva vantagens do SSG (performance, SEO) enquanto permite edição em Markdown. Frontmatter substitui metadata.ts. Migração concluída antecipadamente (Q1 em vez de Q3). **Por que não CMS externo:** adiciona dependência, latência e custo sem benefício claro para operação de dev único. CMS será reavaliado se equipe editorial crescer.

### ADR-009: CDN (planejada Q2 2026)
Cloudflare (free tier) como proxy reverso na frente do Railway. Caching de assets estáticos no edge, proteção DDoS, e analytics adicional. **Trade-off:** complexidade de configuração DNS; cache invalidation requer purge manual ou API.

---

## Apêndice A — Mapa Completo de Rotas (43 páginas)

### Páginas Principais

| Rota | Tipo | Descrição |
|------|------|-----------|
| `/` | Página | Homepage (hero + stats + hubs + CTA) |
| `/artigos` | Página | Listagem de 88 artigos com filtro por categoria |
| `/artigos/[slug]` | Dinâmica (SSG) | Renderização de artigos individuais |
| `/newsletter` | Página | Inscrição dedicada |
| `/glossario` | Página | 20 termos técnicos |
| `/recursos` | Página | Ferramentas e referências |
| `/sobre` | Página | Sobre o portal |
| `/contato` | Página | Formulário de contato |
| `/privacidade` | Página | Política de privacidade (LGPD) |
| `/excluir-dados` | Página | Solicitação de exclusão de dados |

### Hubs e Sub-Páginas

| Rota | Tipo | Sub-páginas |
|------|------|-------------|
| `/formacao` | Hub | — (redirects para artigos) |
| `/carreira` | Hub | `/roadmap-engenheiro-biomedico`, `/certificacoes`, `/cursos-especializacoes`, `/estagio-primeiro-emprego`, `/livros-engenharia-biomedica`, `/processo-seletivo`, `/transicao-carreira` |
| `/areas-de-atuacao` | Hub | — (links para artigos) |
| `/equipamentos` | Hub | `/uti`, `/centro-cirurgico`, `/diagnostico-imagem`, `/manutencao-hospitalar`, `/gestao-parque-tecnologico`, `/indicadores-engenharia-clinica` |
| `/mercado` | Hub | `/empresas` |
| `/regulamentacao` | Hub | `/certificacao-inmetro`, `/software-dispositivo-medico-samd` |
| `/pesquisa` | Hub | `/ferramentas-python-matlab`, `/publicacao-cientifica`, `/financiamento` |
| `/startups/hubs` | Página | Ecossistema de healthtechs |
| `/internacional/repositorios` | Página | Repositórios acadêmicos |

### Autenticação e Sistema

| Rota | Tipo |
|------|------|
| `/login` | Página |
| `/cadastro` | Página |
| `/dashboard` | Página |
| `/subscription-confirmed` | Página |
| `/unsubscribe` | Página |

### API Routes

| Rota | Método | Finalidade |
|------|--------|-----------|
| `/api/subscribe` | POST | Inscrição newsletter |
| `/api/confirm` | GET | Double opt-in |
| `/api/contact` | POST | Formulário de contato |
| `/api/og` | GET (Edge) | Imagem OG dinâmica |
| `/api/webhooks/resend` | POST | Webhook bounce/complaint |
| `/api/auth/[...nextauth]` | * | NextAuth |
| `/api/auth/register` | POST | Cadastro |
| `/api/delete-data` | POST | Exclusão LGPD |
| `/api/unsubscribe` | GET/POST | Cancelamento newsletter |

---

## Apêndice B — Estrutura de Diretórios

```
engbiomedica/
├── .claude/                  # Configurações Claude Code
├── .github/workflows/        # Newsletter automatizada (cron quinzenal)
│   └── newsletter.yml
├── prisma/
│   └── schema.prisma         # User, Account, Session, VerificationToken
├── public/                   # 248 assets estáticos
│   ├── artigos/              # Imagens dos artigos (WebP)
│   ├── docentes/             # Fotos de docentes
│   └── editais/              # Editais em PDF
├── scripts/
│   ├── send-newsletter.ts    # Pipeline de envio
│   └── article-utils.ts      # Seleção de artigos recentes/últimos
├── src/
│   ├── app/                  # 43 page.tsx + 10 API routes
│   │   ├── api/              # subscribe, confirm, contact, og, search-data, webhooks, auth, delete-data, unsubscribe
│   │   ├── artigos/          # Listagem + [slug] dinâmico
│   │   ├── carreira/         # Hub + 7 sub-páginas
│   │   ├── equipamentos/     # Hub + 6 sub-páginas
│   │   ├── formacao/         # Hub
│   │   ├── mercado/          # Hub + /empresas
│   │   ├── pesquisa/         # Hub + 3 sub-páginas
│   │   ├── regulamentacao/   # Hub + 2 sub-páginas
│   │   ├── layout.tsx        # Root layout (meta, schema, fonts, GA4)
│   │   ├── sitemap.ts        # Sitemap dinâmico
│   │   ├── robots.ts         # Configuração de crawling
│   │   └── image-sitemap.xml/# Sitemap de imagens
│   ├── components/           # 14 componentes
│   │   ├── forms/            # NewsletterForm, HomeNewsletterForm, ContatoForm
│   │   ├── layout/           # Header, Footer, Logo
│   │   ├── search/           # SearchModal, ArticleSearch (Fuse.js)
│   │   └── ui/               # Badge, StatCard, PageHeader, SectionCard, Turnstile, ComingSoonPage
│   ├── data/                 # ~2.9MB de dados estáticos
│   │   ├── artigos/          # 88 artigos .mdx + metadata.ts (dinâmico) + types.ts + getArtigo.ts + index.ts
│   │   ├── empresas/         # 495 empresas
│   │   └── navigation.ts     # Estrutura de navegação (7 categorias)
│   ├── emails/               # 4 templates React Email
│   │   ├── confirm-subscription.tsx
│   │   ├── welcome.tsx
│   │   ├── newsletter-digest.tsx
│   │   └── newsletter-template.tsx
│   ├── hooks/                # 1 hook
│   │   └── useArticleSearch.ts # Hook Fuse.js com normalização PT-BR
│   ├── lib/                  # 7 utilitários
│   │   ├── auth.ts           # NextAuth config
│   │   ├── tokens.ts         # HMAC tokens
│   │   ├── ratelimit.ts      # Upstash rate limiting
│   │   ├── turnstile.ts      # Cloudflare verification
│   │   ├── prisma.ts         # Prisma singleton
│   │   ├── normalize.ts      # Remoção de diacríticos para busca
│   │   └── extract-faq.ts    # FAQ extraction para Schema.org
│   └── middleware.ts         # Redirect www → non-www (301)
├── CLAUDE.md                 # Instruções para Claude Code
├── PRD.md                    # Este documento
├── Dockerfile                # Multi-stage (node:20-alpine → standalone)
├── railway.toml              # Deploy config (healthcheck, restart policy)
├── next.config.js            # 84 redirects, standalone output, caching headers
├── tailwind.config.ts        # Design system (cores, tipografia, sombras)
├── tailwind.config.js        # Placeholder vazio (a remover)
├── tsconfig.json             # TypeScript com path aliases
└── package.json              # v2.0.0
```

---

## Apêndice C — Variáveis de Ambiente

```bash
# === Site ===
NEXT_PUBLIC_SITE_URL=https://engenhariabiomedica.com
NEXT_PUBLIC_APP_URL=https://engenhariabiomedica.com
NEXT_PUBLIC_SITE_NAME=Engenharia Biomédica

# === Analytics ===
NEXT_PUBLIC_GA_ID=G-HMFP981CMP
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=engenhariabiomedica.com  # opcional

# === Email (Resend) ===
RESEND_API_KEY=re_xxxxx
RESEND_SEGMENT_ID=seg_xxxxx
FROM_EMAIL=newsletter@mail.engenhariabiomedica.com

# === Newsletter ===
CONFIRMATION_SECRET=xxxxx  # Secret para tokens HMAC de double opt-in
BASE_URL=https://engenhariabiomedica.com

# === Anti-Spam (Cloudflare Turnstile) ===
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAACjIidY2QIogyaPR
TURNSTILE_SECRET_KEY=xxxxx

# === Rate Limiting (Upstash Redis) ===
UPSTASH_REDIS_REST_URL=https://xxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxxxx

# === Banco de Dados ===
DATABASE_URL=postgresql://user:pass@host:5432/dbname

# === Autenticação (NextAuth) ===
NEXTAUTH_URL=https://engenhariabiomedica.com
NEXTAUTH_SECRET=xxxxx

# === Notificações ===
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/xxxxx  # opcional
```

---

## Apêndice D — Checklist SEO Técnico

### Implementado

- [x] Sitemap XML dinâmico com prioridades diferenciadas
- [x] Image sitemap dedicado
- [x] Robots.ts com disallow para rotas privadas
- [x] Schema.org Organization (global)
- [x] Schema.org WebSite (home)
- [x] Schema.org MedicalWebPage (artigos)
- [x] Schema.org FAQPage (condicional, automático)
- [x] Schema.org BreadcrumbList (artigos)
- [x] Schema.org ImageObject (artigos com imagens)
- [x] Speakable specification (voice search)
- [x] Entity linking (5 entidades: ANVISA, FDA, IEEE, ABIMO, ABIMED)
- [x] OG images dinâmicas (Edge Runtime, 1200x630)
- [x] Canonical URLs em todas as páginas
- [x] Twitter Cards (summary_large_image)
- [x] 84 redirects 301 (consolidação de conteúdo)
- [x] Middleware www → non-www (301)
- [x] Cache-Control multi-camada
- [x] Fonts com display swap
- [x] Output standalone (otimização de bundle)
- [x] Mobile-first responsive (testado 375px)
- [x] Google Analytics 4

### A Implementar (Q2–Q3 2026)

- [x] Busca interna (Fuse.js — modal Ctrl+K + inline /artigos, accent-insensitive, GA4 tracking)
- [x] Componente "Artigos Relacionados" (RelatedArticles — até 4 artigos da mesma categoria, grid responsivo)
- [ ] Páginas de categoria (`/artigos/categoria/[nome]`)
- [ ] Table of Contents automático para artigos longos
- [ ] Core Web Vitals audit e otimização
- [ ] CDN (Cloudflare)
- [ ] Expansão de entity linking (+6 entidades)
- [ ] Schema Article Series
- [ ] Métricas de conteúdo (scroll depth, reading time)
- [ ] Glossário expandido (20 → 50+ termos)
- [x] Testes automatizados (Vitest 66 unit + Playwright 51 e2e — páginas, busca, 21 redirects, sitemap, SEO, Schema.org)
- [x] ~~Monitoramento de erros (@sentry/nextjs v10)~~ — **server-side desabilitado** (causa 502 timeout no Railway); client SDK e global-error.tsx mantidos; requer investigação de compatibilidade
- [x] `.env.example` completo (12 variáveis: site, analytics, Sentry, newsletter, HMAC, Redis, Turnstile)
- [ ] Botões de compartilhamento social
- [ ] Sistema de comentários (Giscus)

---

## Apêndice E — Histórico de Versões

| Versão | Data | Autor | Alterações |
|--------|------|-------|-----------|
| 1.0 | Março 2026 | Mardoqueu Costa | Documento retroativo inicial |
| 2.0 | Março 2026 | Mardoqueu Costa | Reescrita completa: dados auditados do código-fonte, SEO expandido como seção principal, roadmap 6 meses priorizado, variáveis de ambiente documentadas, mapa de 43 rotas, checklist SEO |
| 2.1 | Março 2026 | Mardoqueu Costa | Migração completa: 88 artigos .ts → .mdx; metadata.ts e index.ts dinamizados; busca interna com Fuse.js (modal Ctrl+K + inline /artigos); remoção de travessões; TikTok no footer; ADRs 002/007/008 atualizados |
| 2.2 | Março 2026 | Mardoqueu Costa | Testes automatizados (Vitest 66 unit + Playwright 51 e2e); Sentry v10 para monitoramento de erros; .env.example completo com 12 variáveis; global-error.tsx; P1 concluído (3/4 itens) |
| 2.3 | Março 2026 | Mardoqueu Costa | Componente "Artigos Relacionados" (RelatedArticles); Sentry server-side desabilitado — `withSentryConfig` + instrumentação OpenTelemetry causavam 502 timeout (15s) em todas as rotas no Railway (healthcheck passava mas requests travavam); wrapper e instrumentation comentados, client SDK e global-error.tsx mantidos; P1 concluído (4/4 itens) |
