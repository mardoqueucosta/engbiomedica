# engenhariabiomedica.com

Portal do Programa de Pós-Graduação em Engenharia Biomédica (PPGEB) - Universidade Brasil.

## Stack

- **Frontend:** React 18 + Vite + Tailwind CSS
- **Backend:** Node.js + Express
- **Deploy:** Railway (via GitHub)

## Estrutura

```
engbiomedica/
├── railway.json          # Config Railway
├── package.json          # Root scripts
├── server/
│   ├── package.json
│   └── index.js          # Express (API + serve static)
└── client/
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── index.html
    └── src/
        ├── main.jsx
        ├── App.jsx
        └── index.css
```

## Desenvolvimento Local

```bash
# Instalar dependências
cd server && npm install
cd ../client && npm install

# Rodar em dev (duas janelas de terminal)
cd server && npm run dev     # API em http://localhost:3001
cd client && npm run dev     # React em http://localhost:5173
```

## Deploy no Railway

1. Push para o GitHub
2. No Railway, crie um novo projeto → "Deploy from GitHub repo"
3. Selecione o repositório
4. O `railway.json` já configura build e start automaticamente
5. Adicione custom domain: `engenhariabiomedica.com`

## API Endpoints

| Rota | Descrição |
|------|-----------|
| `GET /api/health` | Health check |
| `GET /api/programa` | Dados do programa |
| `GET /api/linhas-pesquisa` | Linhas de pesquisa |
