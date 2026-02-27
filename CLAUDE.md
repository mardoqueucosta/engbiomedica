# Engenharia Biomédica - Portal

## Projeto
- Site Next.js 14 hospedado no Railway (auto-deploy via GitHub)
- Repo: https://github.com/mardoqueucosta/engbiomedica (branch: main)
- Domínio: https://engenhariabiomedica.com

## Deploy
Quando o usuário pedir "faça o deploy" ou "deploy":
1. `git add .` (exceto .env, node_modules, .next)
2. `git commit` com mensagem descritiva das alterações
3. `git push origin main`
O Railway faz o deploy automaticamente ao detectar o push.

## Git Config (este repo)
- user.name: Mardoqueu Costa
- user.email: mardo.abc@gmail.com

## Newsletter (Resend + React Email + Upstash)
### Arquivos-chave
- `/src/emails/` — Templates React Email (confirmação, boas-vindas, newsletter)
- `/src/lib/tokens.ts` — Geração/validação de tokens HMAC para double opt-in
- `/src/lib/ratelimit.ts` — Rate limiting com Upstash Redis
- `/src/app/api/subscribe/route.ts` — Inscrição com rate limiting e validação
- `/src/app/api/confirm/route.ts` — Confirmação double opt-in + criação de contato no Resend
- `/src/app/api/webhooks/resend/route.ts` — Webhook de bounce/complaint
- `/scripts/send-newsletter.ts` — Script de envio de broadcast via CLI

### Convenções
- Variáveis de Broadcast (`{{{FIRST_NAME}}}`) são passadas como props string, NUNCA escritas diretamente no JSX
- Sempre verificar `result.error` em chamadas ao Resend (SDK não lança exceções)
- API routes de email devem usar `export const runtime = 'nodejs'` (incompatível com Edge)
- Rate limit: 3 inscrições/hora por IP
- Domínio de envio: `mail.engenhariabiomedica.com`

### Newsletter Automatizada (GitHub Actions)
- **Workflow:** `.github/workflows/newsletter.yml` — cron quinzenal (terças, 10:15 BRT, semanas pares ISO)
- **Script:** `scripts/send-newsletter.ts` — seleciona artigos de artigosMeta automaticamente, dry-run, broadcast dois passos
- **Utilitário:** `scripts/article-utils.ts` — `getRecentArticles(16)`, `getArticleImage()`, `getLatestArticles(5)`
- **Template digest:** `src/emails/newsletter-digest.tsx` — destaque + lista de artigos secundários
- **Template genérico:** `src/emails/newsletter-template.tsx` — mantido para envios manuais
- **Cadência:** Semanas pares (ISO week number). Dispatch manual com `force_send` disponível.
- **Secrets GitHub:** `RESEND_API_KEY`, `RESEND_SEGMENT_ID`, `SLACK_WEBHOOK_URL`
- **Variables GitHub:** `FROM_EMAIL`, `BASE_URL`
- **Fallback:** Se não há artigos nos últimos 16 dias, usa os mais recentes do acervo
- **Execução local:** `npm run newsletter:dry` (preview) ou `npm run newsletter` (envio real)
- Broadcast usa `segmentId` (NÃO `audienceId` que é deprecated)
- Dois passos: `broadcasts.create()` (draft) → `broadcasts.send(id)`
- Variáveis broadcast no template: `{{{FIRST_NAME|leitor(a)}}}`, `{{{RESEND_UNSUBSCRIBE_URL}}}`
