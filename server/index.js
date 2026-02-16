const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// ============================================
// API Routes
// ============================================

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/programa', (req, res) => {
  res.json({
    nome: 'Programa de Pós-Graduação em Engenharia Biomédica',
    sigla: 'PPGEB',
    instituicao: 'Universidade Brasil',
    coordenador: 'Prof. Dr. Mardoqueu',
    areas: [
      'Instrumentação Biomédica',
      'Processamento de Sinais e Imagens',
      'Biomecânica e Reabilitação',
      'Engenharia Clínica',
      'Ressonância Magnética Nuclear'
    ],
    contato: {
      email: 'ppgeb@universidadebrasil.edu.br',
      site: 'https://engenhariabiomedica.com'
    }
  });
});

app.get('/api/linhas-pesquisa', (req, res) => {
  res.json([
    {
      id: 1,
      titulo: 'Sensores Magnéticos para RMN',
      descricao: 'Desenvolvimento de sensores tipo Halbach para aplicações de Ressonância Magnética Nuclear na agricultura.',
      area: 'Instrumentação'
    },
    {
      id: 2,
      titulo: 'Processamento de Sinais Biomédicos',
      descricao: 'Técnicas avançadas de processamento e análise de sinais fisiológicos.',
      area: 'Sinais e Imagens'
    },
    {
      id: 3,
      titulo: 'Dispositivos de Monitoramento',
      descricao: 'Integração de tecnologias de sensoriamento com ambientes de cultivo controlado.',
      area: 'Agricultura de Precisão'
    }
  ]);
});

// ============================================
// Serve React build em produção
// ============================================

const clientBuildPath = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(clientBuildPath));

// SPA fallback - qualquer rota não-API serve o index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📁 Serving static files from ${clientBuildPath}`);
});
