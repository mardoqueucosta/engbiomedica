@echo off
chcp 65001 >nul
title Setup engenhariabiomedica v2.0.0

echo ============================================================
echo   engenhariabiomedica.com — Setup Automatizado v2.0.0
echo ============================================================
echo.

:: 1. Navegar para o diretório do projeto
cd /d "H:\Meu Drive\0-Desktop\engenhariabiomedica"
if errorlevel 1 (
    echo [ERRO] Diretorio do projeto nao encontrado.
    pause
    exit /b 1
)
echo [1/6] Diretorio: %cd%
echo.

:: 2. Instalar dependências
echo [2/6] Instalando dependencias (npm install)...
call npm install
if errorlevel 1 (
    echo [ERRO] Falha ao instalar dependencias. Verifique se o Node.js 18+ esta instalado.
    echo       Teste com: node --version
    pause
    exit /b 1
)
echo [OK] Dependencias instaladas.
echo.

:: 3. Build do Next.js
echo [3/6] Executando build (npm run build)...
call npm run build
if errorlevel 1 (
    echo [ERRO] Build falhou. Revise os erros acima antes de prosseguir.
    pause
    exit /b 1
)
echo [OK] Build concluido com sucesso!
echo.

:: 4. Inicializar Git
echo [4/6] Inicializando repositorio Git...
if exist ".git" (
    echo       Repositorio Git ja existe, pulando inicializacao.
) else (
    git init
    git branch -M main
)
echo [OK] Git inicializado.
echo.

:: 5. Configurar user (reutilizar do repo existente)
git config user.email "mardo.abc@gmail.com"
git config user.name "mardoqueu"

:: 6. Commit inicial
echo [5/6] Criando commit inicial...
git add .
git commit -m "v2.0.0: Portal Engenharia Biomedica — Next.js 14 + Tailwind CSS

- 26+ paginas com conteudo completo
- Design system: Fraunces + DM Sans + paleta brand identity
- Componentes reutilizaveis (Badge, StatCard, PageHeader, SectionCard)
- SEO completo com Open Graph e Twitter Cards
- Header responsivo com dropdown + mobile menu
- Footer com navegacao estruturada
- Dockerfile multi-stage para deploy Railway
- Paginas: Home, Formacao (4), Mercado (4), Regulamentacao (4),
  Pesquisa (3), Startups (2), Blog (6), Eventos, Internacional (3),
  Recursos, Glossario, Sobre, Newsletter, Contato"
if errorlevel 1 (
    echo [AVISO] Nada para commitar ou erro no commit.
)
echo [OK] Commit criado.
echo.

:: 7. Instrucoes para push
echo ============================================================
echo   BUILD E GIT CONCLUIDOS COM SUCESSO!
echo ============================================================
echo.
echo   PROXIMO PASSO — Execute estes comandos no terminal:
echo.
echo   1. Crie o repositorio no GitHub:
echo      Acesse: https://github.com/new
echo      Nome: engenhariabiomedica
echo      Visibilidade: Public
echo      NAO marque "Add README" nem ".gitignore"
echo.
echo   2. Depois de criar, execute:
echo      git remote add origin https://github.com/mardoqueucosta/engenhariabiomedica.git
echo      git push -u origin main
echo.
echo   3. Apos o push, avise o Claude para configurar o Railway.
echo.
echo ============================================================
pause
