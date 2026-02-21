# engenhariabiomedica.com

Portal de referência sobre Engenharia Biomédica no Brasil — formação acadêmica, mercado de trabalho, regulamentação, pesquisa, startups e referências internacionais.

## Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Estilos:** Tailwind CSS 3.4 com design system customizado
- **Tipografia:** Fraunces (serif), DM Sans (sans), DM Mono (mono)
- **Ícones:** Lucide React
- **Deploy:** Railway (Docker multi-stage)

## Desenvolvimento

```bash
npm install
npm run dev
```

O servidor inicia em `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Estrutura

```
src/
├── app/           # Páginas (App Router)
│   ├── formacao/  # Graduação, pós, grade curricular
│   ├── mercado/   # Salários, áreas, empresas
│   ├── regulamentacao/  # CONFEA/CREA, ANVISA, normas
│   ├── pesquisa/  # Centros, financiamento
│   ├── startups/  # Ecossistema, hubs
│   ├── blog/      # Artigos e análises
│   ├── internacional/  # EUA, repositórios
│   └── ...
├── components/    # Componentes reutilizáveis
│   ├── layout/    # Header, Footer, Logo
│   └── ui/        # Badge, StatCard, PageHeader, SectionCard
└── data/          # Dados de navegação
```

## Licença

© 2026 engenhariabiomedica.com — Todos os direitos reservados.
