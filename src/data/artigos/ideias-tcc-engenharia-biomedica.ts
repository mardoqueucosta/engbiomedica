import { Artigo } from './types';

export const artigo: Artigo = {
  titulo: '50 Ideias de TCC em Engenharia Biomédica para se Inspirar [2026]',
  resumo: 'Lista com 50 ideias de TCC em Engenharia Biomédica organizadas por área técnica: instrumentação, IA, biomecânica, biomateriais, neuroengenharia e muito mais. Cada ideia traz nível de dificuldade, ferramentas recomendadas e referências reais.',
  categoria: 'Formação',
  categoriaVariant: 'primary',
  data: '2026-02-22',
  leitura: '17 min',
  conteudo: `
<p class="text-lg leading-relaxed mb-6"><strong>Escolher o tema do TCC em Engenharia Biomédica é uma das decisões mais importantes da graduação — e também uma das mais angustiantes. Com 39 cursos ativos no Brasil, acervo de centenas de trabalhos em repositórios como o da UFU (168+ TCCs) e da UFRN (90+), e um setor de dispositivos médicos que movimenta R$26,1 bilhões, as possibilidades são vastas demais para explorar sem um ponto de partida.</strong> Este artigo reúne 50 ideias concretas, organizadas por 13 áreas técnicas, com nível de dificuldade, ferramentas e referências para você sair do zero com clareza.</p>

<p class="mb-6">Este artigo faz parte do <a href="/artigos/guia-engenharia-biomedica">Guia Definitivo de Engenharia Biomédica</a>.</p>

<h2>O cenário do TCC em Engenharia Biomédica no Brasil</h2>

<p>O Brasil conta hoje com <strong>39 cursos de Engenharia Biomédica ativos</strong> — 6 públicos e 33 privados — com carga horária mínima de 3.600 horas, segundo as Diretrizes Curriculares Nacionais do MEC. O primeiro curso surgiu em 2001 na UNIVAP, e desde então o número de formandos cresce em ritmo acelerado: só entre 2024 e 2025, o CAGED registrou aumento de 50% nas contratações formais com CBO 2143-80 (Engenheiro Biomédico).</p>

<p>Esse crescimento reflete um mercado aquecido. O setor de equipamentos e dispositivos médicos emprega mais de 85.000 pessoas diretamente, abriga 1.900+ healthtechs e pagou salário médio de R$8.658 aos engenheiros biomédicos contratados em 2025. Para quem está concluindo a graduação, a escolha certa do TCC pode funcionar como portfólio técnico — especialmente em áreas como IA diagnóstica, instrumentação e dispositivos vestíveis, onde o mercado sente escassez de profissionais qualificados.</p>

<p>Antes de entrar nas ideias, vale contextualizar os tipos de TCC mais comuns e mais valorizados:</p>

<table>
  <thead>
    <tr>
      <th>Tipo de TCC</th>
      <th>Exemplos</th>
      <th>Requisito CEP?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Desenvolvimento de protótipo/dispositivo</td>
      <td>Sensor vestível, órtese ativa, sistema de monitoramento</td>
      <td>Apenas se testar em voluntários</td>
    </tr>
    <tr>
      <td>Processamento computacional</td>
      <td>Classificador de arritmias, segmentação de imagens</td>
      <td>Não (datasets públicos)</td>
    </tr>
    <tr>
      <td>Revisão sistemática (PRISMA)</td>
      <td>Eficácia de tecnologias, mapeamento de evidências</td>
      <td>Não</td>
    </tr>
    <tr>
      <td>Simulação computacional</td>
      <td>FEA biomecânico, simulação de campo elétrico</td>
      <td>Não</td>
    </tr>
    <tr>
      <td>Estudo experimental in vitro</td>
      <td>Caracterização de biomateriais, testes em phantoms</td>
      <td>Não</td>
    </tr>
    <tr>
      <td>Pesquisa de campo aplicada</td>
      <td>Diagnóstico de parque tecnológico hospitalar</td>
      <td>Depende da metodologia</td>
    </tr>
  </tbody>
</table>

<p>Aprovação no CEP (Comitê de Ética em Pesquisa) segue a Resolução CNS 466/2012 e a Lei 14.874/2024. O processo leva entre 30 e 90 dias — planeje o cronograma com antecedência se o seu projeto envolver coleta de dados humanos, questionários, prontuários ou testes de dispositivos em voluntários.</p>

<p>Repositórios úteis para pesquisar TCCs defendidos: <a href="https://repositorio.ufu.br" target="_blank" rel="noopener">repositorio.ufu.br</a>, <a href="https://repositorio.ufrn.br" target="_blank" rel="noopener">repositorio.ufrn.br</a>, BDTD (Biblioteca Digital Brasileira de Teses e Dissertações) e o portal da CAPES. Para literatura internacional, use <a href="https://pubmed.ncbi.nlm.nih.gov" target="_blank" rel="noopener">PubMed</a> e <a href="https://www.embs.org" target="_blank" rel="noopener">IEEE EMBS</a>.</p>

<h2>Instrumentação Biomédica</h2>

<p>Área clássica e muito valorizada por empregadores. Projetos nessa linha demonstram domínio de eletrônica analógica/digital, microcontroladores e protocolos de comunicação — competências diretamente aplicáveis na indústria de dispositivos médicos e na engenharia clínica hospitalar. Veja também o artigo sobre <a href="/artigos/areas-atuacao-engenharia-biomedica">áreas de atuação em Engenharia Biomédica</a>.</p>

<h3>Ideia 1 — ECG de Baixo Custo com Arduino e Processamento de Sinal em Tempo Real</h3>
<p><strong>Nível:</strong> Intermediário. Desenvolva um eletrocardiógrafo de 3 derivações usando o CI AD8232 ou INA128 com microcontrolador Arduino/ESP32. O foco do TCC pode ser a implementação de filtros digitais (passa-banda 0,5–40 Hz, notch 60 Hz) e detecção de complexo QRS pelo algoritmo de Pan-Tompkins. Ferramentas: KiCad (esquemático), MATLAB ou Python (processamento), dataset MIT-BIH para validação. (PMID: 34631820)</p>
<figure>
<img src="/artigos/ideias-tcc-engenharia-biomedica/image-1.webp" alt="Protótipo de oxímetro de pulso com sensor MAX30102 e ESP32 exibindo SpO2 e frequência cardíaca em display OLED, montado em bancada de laboratório de engenharia biomédica" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>Protótipo de oxímetro portátil com sensor MAX30102 e microcontrolador ESP32, exemplo de TCC de instrumentação biomédica de baixo custo.</figcaption>
</figure>


<h3>Ideia 2 — Oxímetro de Pulso Portátil com Sensor MAX30102 e Alerta de SpO₂</h3>
<p><strong>Nível:</strong> Básico a Intermediário. O sensor MAX30102 integra LEDs vermelho e infravermelho em package compacto, tornando viável construir um oxímetro vestível com ESP32 e display OLED. O TCC pode avaliar a acurácia do dispositivo comparado a um oxímetro comercial certificado (design comparativo), documentar o protocolo de calibração e discutir os requisitos regulatórios da ANVISA para classificação como dispositivo de diagnóstico (classe II). Ferramentas: Arduino IDE, Python, protocolo ANOVA para análise estatística. (PMID: 33541763)</p>

<h3>Ideia 3 — Sistema de Eletromiografia de Superfície Multicanal para Análise de Fadiga Muscular</h3>
<p><strong>Nível:</strong> Avançado. Projete um amplificador de instrumentação para sEMG com CMRR > 80 dB, aquisição em 4–8 canais simultâneos e extração de features espectrais (frequência mediana, RMS, wavelet) para estimar fadiga muscular em tempo real. Aplicações: ergonomia, reabilitação e esporte. Ferramentas: ADS1298 (Texas Instruments), BioSig++ ou BrainFlow, MATLAB. (PMID: 35103614)</p>

<h3>Ideia 4 — Capacete EEG com Eletrodos Secos para Monitoramento de Atenção</h3>
<p><strong>Nível:</strong> Avançado. EEG seco elimina o gel condutor e torna o dispositivo mais prático para uso continuado. O TCC pode focar no design mecânico dos eletrodos (impressão 3D + revestimento de prata), comparar SNR com eletrodos úmidos padrão e aplicar classificadores de banda alfa/theta para estimar estado de atenção. Hardware: OpenBCI Cyton ou ADS1299 customizado. (PMID: 36129802)</p>

<h2>Engenharia Clínica</h2>

<p>Engenharia clínica é uma das saídas profissionais mais tradicionais do engenheiro biomédico no Brasil — presente em hospitais públicos e privados, operadoras de saúde e empresas de manutenção. O <a href="/artigos/mercado-trabalho-engenharia-biomedica-dados">mercado de trabalho</a> mostra demanda crescente por profissionais com capacidade analítica em gestão de tecnologia hospitalar.</p>

<h3>Ideia 5 — Dashboard de Indicadores de Gestão de Equipamentos Médicos em Hospital do SUS</h3>
<p><strong>Nível:</strong> Intermediário. Mapeie o parque tecnológico de um hospital usando dados do DATASUS/CNES, calcule indicadores como MTBF, MTTR, disponibilidade e custo por manutenção corretiva/preventiva, e construa um dashboard interativo (Power BI ou Grafana). O TCC contribui diretamente para a gestão hospitalar e é bem visto por bancas práticas. Dados públicos dispensam CEP.</p>

<h3>Ideia 6 — Avaliação de Tecnologias em Saúde (ATS): Metodologia CONITEC Aplicada a um Dispositivo Médico</h3>
<p><strong>Nível:</strong> Intermediário. Reproduza o fluxo metodológico da CONITEC (Comissão Nacional de Incorporação de Tecnologias no SUS) para avaliar a incorporação de um dispositivo médico — por exemplo, um cateter de ablação ou um ventilador pulmonar de nova geração. O trabalho envolve revisão sistemática de evidências clínicas, análise de custo-efetividade e análise de impacto orçamentário. Referência: <a href="https://www.gov.br/anvisa" target="_blank" rel="noopener">ANVISA</a>. (PMID: 34875101)</p>

<h3>Ideia 7 — FMEA Aplicado à Infusão Intravenosa em UTI: Análise de Modos de Falha</h3>
<p><strong>Nível:</strong> Intermediário. Aplique a metodologia FMEA (Failure Mode and Effects Analysis) conforme a IEC 80001-1 ao processo de infusão intravenosa em UTI, identificando os modos de falha com maior Número de Prioridade de Risco (NPR). O TCC pode propor controles de mitigação e é altamente aplicável em programas de qualidade hospitalar. (PMID: 35209413)</p>

<h3>Ideia 8 — Distribuição Regional de Equipamentos de Alta Complexidade no Brasil: Análise com DATASUS</h3>
<p><strong>Nível:</strong> Básico. Use os microdados do CNES (Cadastro Nacional de Estabelecimentos de Saúde) para mapear a distribuição de equipamentos como tomógrafos, ressonâncias e equipamentos de radioterapia por estado e por porte de município. Ferramentas: Python/Pandas, GeoPandas para mapas coropléticos, teste qui-quadrado para verificar desigualdade regional. Dados públicos, sem CEP.</p>

<h2>Processamento de Sinais Biomédicos</h2>

<p>Área de forte interface com machine learning. Datasets públicos de alta qualidade — MIT-BIH, PhysioNet, Sleep-EDF — permitem desenvolver TCCs robustos sem necessidade de coleta própria, o que simplifica muito o processo. Veja as <a href="/artigos/tendencias-futuro-engenharia-biomedica">tendências em IA e processamento de sinais</a>.</p>

<h3>Ideia 9 — Detecção de Arritmias Cardíacas com Deep Learning no Dataset MIT-BIH</h3>
<p><strong>Nível:</strong> Intermediário a Avançado. Use o dataset MIT-BIH Arrhythmia (PhysioNet) para treinar uma CNN 1D ou LSTM para classificar 5 classes de ritmo cardíaco conforme o padrão AAMI EC57. Compare com abordagens clássicas (SVM + features de domínio tempo-frequência). Ferramentas: Python, TensorFlow/PyTorch, scikit-learn. (PMID: 34282929)</p>

<h3>Ideia 10 — Estagiamento Automático do Sono por EEG com Redes Neurais (Sleep-EDF)</h3>
<p><strong>Nível:</strong> Avançado. O dataset Sleep-EDF (PhysioNet) contém registros polissonográficos com anotações por especialistas. Implemente uma arquitetura como DeepSleepNet ou U-Time para classificar os estágios W/N1/N2/N3/REM. Avalie kappa de Cohen para comparar com o padrão ouro humano. Ferramentas: MNE-Python, PyTorch. (PMID: 34625613)</p>

<h3>Ideia 11 — Reconhecimento de Emoções por EEG Usando Transformers e Dataset DEAP</h3>
<p><strong>Nível:</strong> Avançado. O dataset DEAP contém EEG de 32 canais de 32 participantes assistindo a videoclipes, com anotações de valência e excitação. Implemente um modelo baseado em Transformer ou Graph Neural Network para classificação afetiva. Aplicações em monitoramento de pacientes e interfaces cérebro-computador. (PMID: 36030695)</p>

<h3>Ideia 12 — Identificação de Unidades Motoras por Decomposição de sEMG de Alta Densidade</h3>
<p><strong>Nível:</strong> Avançado. sEMG de alta densidade (HD-sEMG) com arrays de 64–256 eletrodos permite decompor o sinal em potenciais de ação de unidades motoras individuais. O TCC pode implementar algoritmos de decomposição (ICA, MUAP templates) e validar em exercícios isométricos. Ferramentas: MATLAB, DEMUSE toolbox. (PMID: 33826476)</p>

<h2>Processamento de Imagens Médicas</h2>

<p>Imagens médicas são o principal campo de aplicação de IA em saúde. Datasets públicos como ISIC (dermatologia), BraTS (tumores cerebrais), DRIVE (retina) e LUNA16 (pulmão) permitem TCCs de alto impacto com acesso livre.</p>

<h3>Ideia 13 — Detecção de Pneumonia em Radiografias de Tórax com Transfer Learning</h3>
<p><strong>Nível:</strong> Intermediário. Use o dataset CheXpert ou ChestX-ray14 (NIH) e aplique transfer learning com arquiteturas pré-treinadas (DenseNet-121, EfficientNet-B4) para detecção binária de pneumonia. Analise curvas ROC, AUC e mapas de ativação (Grad-CAM) para interpretabilidade. Ferramentas: Python, TensorFlow/Keras, Albumentations. (PMID: 34237619)</p>
<figure>
<img src="/artigos/ideias-tcc-engenharia-biomedica/image-2.webp" alt="Segmentação automática de tumor cerebral em MRI multimodal usando rede neural U-Net, com sobreposição colorida das sub-regiões tumorais e métricas de Dice Score" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>Exemplo de segmentação automática de glioma em MRI multimodal (T1, T2, FLAIR) com U-Net, ideia de TCC na área de processamento de imagens médicas.</figcaption>
</figure>


<h3>Ideia 14 — Segmentação de Vasos Retinianos com U-Net no Dataset DRIVE</h3>
<p><strong>Nível:</strong> Intermediário a Avançado. O dataset DRIVE contém 40 imagens de fundo de olho com segmentação manual por dois especialistas. Implemente uma U-Net ou variante (Attention U-Net, U-Net++) para segmentar a árvore vascular e compare com o estado da arte em F1-score e especificidade. Aplicações em triagem de retinopatia diabética. (PMID: 33625312)</p>

<h3>Ideia 15 — Segmentação de Tumores Cerebrais em MRI Multimodal com Dataset BraTS</h3>
<p><strong>Nível:</strong> Avançado. O BraTS (Brain Tumor Segmentation Challenge) oferece MRI em 4 modalidades (T1, T1ce, T2, FLAIR) com segmentações manuais de gliomas. Implemente uma rede 3D-UNet ou nnU-Net e avalie Dice Score nas substrutura tumorais (núcleo, região ativa, edema). Ferramentas: MONAI (Medical Open Network for AI), SimpleITK, PyTorch. (PMID: 35148840)</p>

<h3>Ideia 16 — Classificação de Lesões de Melanoma com Vision Transformer no Dataset ISIC 2024</h3>
<p><strong>Nível:</strong> Avançado. O dataset ISIC contém mais de 400.000 imagens dermatoscópicas com labels benigno/maligno. Compare um Vision Transformer (ViT) com ResNet-50 e avalie sensibilidade, especificidade e AUC. Inclua análise de viés demográfico (tom de pele, tipo de lesão) como diferencial ético. (PMID: 36448533)</p>

<h2>Biomateriais e Engenharia de Tecidos</h2>

<p>Área de forte crescimento no Brasil, impulsionada por laboratórios como o BioPol (UFRJ), LabBio (UFRGS) e grupos do ITA e UNICAMP. TCCs nessa área geralmente são experimentais in vitro e exigem acesso a laboratório, mas não necessariamente CEP se não envolverem humanos ou animais.</p>

<h3>Ideia 17 — Scaffolds de PLA/Hidroxiapatita para Regeneração Óssea: Produção e Caracterização</h3>
<p><strong>Nível:</strong> Intermediário a Avançado. Produza scaffolds por impressão 3D FDM com composições variadas de PLA e hidroxiapatita (HA) e caracterize porosidade (MEV), resistência mecânica (ensaio de compressão), molhabilidade e citotoxicidade (ISO 10993). Ferramentas: Impressora FDM com filamento customizado, MEV, máquina de ensaios universal. (PMID: 34920993)</p>

<h3>Ideia 18 — Hidrogel de Quitosana/Alginato como Curativo para Feridas Crônicas</h3>
<p><strong>Nível:</strong> Intermediário. A quitosana (derivada de crustáceos) tem propriedades antimicrobianas intrínsecas. Formule hidrogéis reticulados com alginato, avalie o perfil de intumescimento, degradação enzimática e atividade antimicrobiana (E. coli, S. aureus) por difusão em agar. Interessante aplicação para feridas diabéticas, problema de saúde pública no Brasil. (PMID: 35279432)</p>

<h3>Ideia 19 — Nanofibras de PCL por Electrospinning para Engenharia de Tecido Cardiovascular</h3>
<p><strong>Nível:</strong> Avançado. O policaprolactona (PCL) é biodegradável e processável por electrospinning em nanofibras alinhadas que mimetizam a matriz extracelular. O TCC pode variar parâmetros do processo (tensão, vazão, concentração) e correlacionar com diâmetro de fibra (MEV), ângulo de contato e resistência à tração. Aplicação: substituto de valva cardíaca ou enxerto vascular. (PMID: 35019217)</p>

<h3>Ideia 20 — Desenvolvimento de Biotinta para Bioimpressão 3D de Tecido Cartilaginoso</h3>
<p><strong>Nível:</strong> Avançado. Formule uma biotinta à base de gelatina metacrilada (GelMA) ou alginato com células-tronco mesenquimais e valide reologia (varredura de frequência/amplitude), imprimibilidade e viabilidade celular pós-impressão (Live/Dead, AlamarBlue). Ferramentas: Impressora de bioimpressão (ex: CELLINK BIO X), reômetro, microscopia confocal. (PMID: 34895510)</p>

<h2>Biomecânica</h2>

<p>Biomecânica é uma das áreas mais versáteis do currículo — conecta engenharia mecânica, fisiologia e reabilitação. Para mais contexto sobre aplicações clínicas, leia o artigo sobre <a href="/artigos/biomecanica-movimento-proteses">biomecânica do movimento e próteses</a>.</p>

<h3>Ideia 21 — Análise de Marcha sem Marcadores com OpenCap e Visão Computacional</h3>
<p><strong>Nível:</strong> Intermediário. OpenCap é uma plataforma open-source que usa apenas câmeras de smartphone para estimar cinemática 3D da marcha via pose estimation (OpenPose/MediaPipe). O TCC pode comparar ângulos articulares do joelho e quadril obtidos pelo OpenCap com o padrão ouro (sistema Vicon) em indivíduos saudáveis. Sem CEP se dados já coletados; com CEP se coletar novos voluntários. (PMID: 36791562)</p>

<h3>Ideia 22 — Pé Protético Impresso em 3D para Amputados Transtibiais: Design e Validação</h3>
<p><strong>Nível:</strong> Avançado. Próteses comerciais custam entre R$5.000 e R$50.000; impressas em 3D com TPU/Nylon podem custar R$50–R$100. Projetar um pé protético de energia armazenada, simular a resposta mecânica no FreeCAD/Ansys FEA e conduzir testes de carga estática/fadiga conforme ISO 10328. Referência: <a href="https://abimo.org.br" target="_blank" rel="noopener">ABIMO</a>. (PMID: 35086952)</p>

<h3>Ideia 23 — Palmilha Instrumentada com Sensores FSR para Avaliação da Distribuição de Pressão Plantar</h3>
<p><strong>Nível:</strong> Intermediário. Sensores Force-Sensing Resistor (FSR) são baratos e fáceis de integrar em palmilhas flexíveis. O TCC pode mapear pressão plantar em 8–16 pontos durante a marcha, comparar pacientes com pé diabético vs. controles e propor um índice de risco de ulceração. Ferramentas: Arduino, Python, estatística inferencial. (PMID: 33823562)</p>

<h3>Ideia 24 — Simulação por Elementos Finitos (FEA) de Fixação de Fratura Femoral com Placa DCS</h3>
<p><strong>Nível:</strong> Intermediário a Avançado. Obtenha geometria femoral de CT pública (BioBank, The Cancer Imaging Archive), reconstrua o osso em 3D Slicer, transfira para Ansys ou FreeCAD/CalculiX e simule diferentes configurações de fixação (DCS, PFNA) sob carga de marcha. Avalie tensão de von Mises e deslocamento. Sem CEP (dados anonimizados públicos). (PMID: 35021082)</p>

<h2>Engenharia de Reabilitação</h2>

<p>Reabilitação é um dos campos com maior impacto social direto — e também um dos mais carentes de soluções de baixo custo para o SUS. Há espaço real para TCCs que se tornem produtos ou protocolos clínicos. Consulte o artigo sobre <a href="/artigos/estagio-engenharia-biomedica-guia">estágio em Engenharia Biomédica</a> para entender onde esses projetos podem ser desenvolvidos.</p>

<h3>Ideia 25 — Órtese de Punho Ativa Controlada por EMG para Reabilitação Pós-AVC</h3>
<p><strong>Nível:</strong> Avançado. Leia sinal sEMG do músculo residual, classifique intenção de movimento (extensão/flexão) e acione um servo motor para auxiliar o movimento do punho parético. O TCC pode avaliar usabilidade (SUS scale) e variáveis cinemáticas em sessões de uso. Requer CEP se testar em pacientes. (PMID: 34816798)</p>

<h3>Ideia 26 — Realidade Virtual para Reabilitação de Equilíbrio em Idosos: Revisão Sistemática e Metanálise</h3>
<p><strong>Nível:</strong> Intermediário. Conduza uma revisão sistemática (PRISMA) de ensaios clínicos randomizados que usaram RV imersiva (HMD) ou semi-imersiva para treino de equilíbrio em idosos. Extraia dados de Berg Balance Scale e TUG, realize metanálise em R (metafor package) e avalie heterogeneidade (I²). Sem CEP. (PMID: 35431062)</p>

<h3>Ideia 27 — Monitoramento de Marcha em Doenças Neurológicas com IMU Vestível</h3>
<p><strong>Nível:</strong> Intermediário. Posicione IMUs (MPU-6050 ou BNO055) em tornozelos e pelve para extrair parâmetros espaço-temporais da marcha (cadência, comprimento de passo, simetria) em pacientes com Parkinson ou Esclerose Múltipla. Compare com análise de vídeo manual e avalie concordância por Bland-Altman. Requer CEP se coletar dados clínicos. (PMID: 35072463)</p>

<h3>Ideia 28 — Mapeamento das Tecnologias Assistivas Disponíveis no SUS: Uma Revisão Integrativa</h3>
<p><strong>Nível:</strong> Básico a Intermediário. Sistematize a oferta de tecnologias assistivas (cadeiras de rodas, próteses, órteses, ajudas técnicas) no SUS via BNAFAR, Portaria GM/MS 1.314/2013 e contratos com fabricantes (ABIMO). Proponha indicadores de cobertura e acesso. Trabalho de revisão integrativa sem CEP, com alto impacto em políticas públicas. (PMID: 35678432)</p>

<h2>Informática em Saúde</h2>

<p>Com o RNDS (Rede Nacional de Dados em Saúde) em expansão e o DATASUS disponibilizando microdados cada vez mais ricos, projetos em informática em saúde combinam análise de dados, desenvolvimento de software e impacto em políticas. Dados públicos dispensam CEP.</p>

<h3>Ideia 29 — Interoperabilidade de Prontuários com HL7 FHIR: Implementação de Servidor e Análise de Conformidade</h3>
<p><strong>Nível:</strong> Avançado. Implemente um servidor FHIR R4 (HAPI FHIR ou SMILE CDR community) e valide recursos de paciente, observação e condição contra os perfis do RNDS. Avalie completude, corretude e tempo de resposta. Ferramentas: Java/Spring Boot, Docker, Postman. Projeto com forte aderência ao mercado, dado que a portabilidade de dados em saúde é obrigação legal no Brasil desde 2020. (PMID: 34973107)</p>

<h3>Ideia 30 — Aplicativo Mobile para Automonitoramento de Doenças Crônicas (Hipertensão/Diabetes)</h3>
<p><strong>Nível:</strong> Intermediário. Desenvolva um app (Flutter ou React Native) para registro de pressão arterial e glicemia, com alertas e visualizações de tendência. Avalie usabilidade com pacientes reais (SUS scale, MARS scale) e verifique requisitos regulatórios de SaMD (Software as a Medical Device) da ANVISA RDC 657/2022. Requer CEP se testar em pacientes. (PMID: 35412789)</p>

<h3>Ideia 31 — Dashboard de Vigilância Epidemiológica com Microdados do DATASUS</h3>
<p><strong>Nível:</strong> Básico a Intermediário. Use os sistemas SINAN, SIM ou SIHSUS para construir um painel de análise epidemiológica (dengue, tuberculose, mortalidade materna) com visualizações georreferenciadas e séries temporais. Ferramentas: Python/GeoPandas, Plotly Dash ou Streamlit, dados do <a href="https://datasus.saude.gov.br" target="_blank" rel="noopener">DATASUS</a>. Sem CEP.</p>

<h3>Ideia 32 — Processamento de Linguagem Natural em Prontuários Eletrônicos para Extração de Diagnósticos</h3>
<p><strong>Nível:</strong> Avançado. Aplique NLP (spaCy, BERTimbau ou BioBERT em português) para extrair entidades clínicas (CID-10, medicamentos, sintomas) de textos livres de prontuários. Avalie precisão, recall e F1 em anotações manuais. Se usar prontuários reais anonimizados, consulte o comitê de ética da instituição. (PMID: 35289043)</p>

<h2>Regulação e Qualidade de Dispositivos Médicos</h2>

<p>Regulação é disciplina obrigatória em quase todos os cursos e é altamente valorizada pela indústria de dispositivos médicos. A <a href="https://www.gov.br/anvisa" target="_blank" rel="noopener">ANVISA</a> publicou 12 novas RDCs relacionadas a dispositivos médicos entre 2022 e 2025, o que garante temas atuais para TCCs de revisão e análise comparativa.</p>

<h3>Ideia 33 — Comparativo Regulatório: ANVISA vs. FDA 510(k) vs. EU MDR para Classe II/III</h3>
<p><strong>Nível:</strong> Intermediário. Analise os requisitos técnicos e documentais para obtenção de registro de um dispositivo médico classe II (ex: monitor multiparâmetros) nas três jurisdições. Compare prazos, requisitos de evidência clínica, rotulagem e vigilância pós-mercado. Trabalho puramente documental — sem CEP, alto valor para empresas que buscam registro internacional. (PMID: 35897023)</p>

<h3>Ideia 34 — Aplicação da ISO 14971 (Gestão de Riscos) ao Desenvolvimento de um Dispositivo Implantável</h3>
<p><strong>Nível:</strong> Intermediário. Selecione um dispositivo implantável (marcapasso, parafuso ortopédico, stent coronário) e construa um plano de gestão de riscos completo conforme a ISO 14971:2019 — identificação de hazards, estimativa de probabilidade/severidade, medidas de mitigação e avaliação de risco residual. Ferramentas: FTA, FMEA, matriz de risco. (PMID: 35198217)</p>

<h3>Ideia 35 — Checklist de Conformidade com a IEC 60601-1 para Equipamentos Elétrico-Médicos</h3>
<p><strong>Nível:</strong> Básico a Intermediário. Desenvolva e valide um checklist de conformidade baseado na IEC 60601-1 (terceira edição) para equipamentos elétrico-médicos em uso hospitalar. Aplique o checklist em uma amostra de equipamentos de uma unidade hospitalar e calcule índice de conformidade. Trabalho prático de engenharia clínica com aplicação direta na manutenção hospitalar.</p>

<h3>Ideia 36 — Framework de Classificação e Pré-submissão de SaMD (Software as a Medical Device) na ANVISA</h3>
<p><strong>Nível:</strong> Intermediário. Com a RDC 657/2022 e a RDC 751/2022, a ANVISA estabeleceu regras específicas para SaMD. O TCC pode desenvolver um framework de decisão para classificação de risco (baseado em IMDRF SaMD N12) e pré-submissão, aplicando-o a casos de uso de IA diagnóstica. Alta relevância para startups de healthtech. (PMID: 35654327)</p>

<h2>Neuroengenharia</h2>

<p>Neuroengenharia combina neurociência, processamento de sinais e eletrônica para criar interfaces entre o sistema nervoso e dispositivos. É uma das fronteiras mais dinâmicas da área — e uma das que mais atrai financiamento do <a href="https://www.gov.br/cnpq" target="_blank" rel="noopener">CNPq</a> e da FAPESP para grupos brasileiros.</p>

<h3>Ideia 37 — Interface Cérebro-Computador para Comunicação por P300 ou SSVEP com OpenBCI</h3>
<p><strong>Nível:</strong> Avançado. Implemente um paradigma P300 (matrix speller) ou SSVEP (quadro com estímulos de frequências distintas) usando o hardware OpenBCI e avalie Information Transfer Rate (ITR) e acurácia em participantes saudáveis. Ferramentas: Python, BrainFlow, scikit-learn (LDA, SVM). Requer CEP se coletar dados em voluntários. (PMID: 34901215)</p>

<h3>Ideia 38 — Classificação de Imagética Motora por EEG com Deep Learning para Controle de Prótese</h3>
<p><strong>Nível:</strong> Avançado. Use datasets públicos de imagética motora (BCI Competition IV Dataset 2a ou PhysioNet EEG Motor Movement) para treinar uma EEGNet ou ShallowConvNet e classificar 4 classes de movimento (mão direita, mão esquerda, pé, língua). Avalie kappa e acurácia por sujeito e inter-sujeito. (PMID: 35142637)</p>

<h3>Ideia 39 — Protocolo de Neurofeedback em Tempo Real para Redução de Ansiedade: Revisão e Proposta</h3>
<p><strong>Nível:</strong> Intermediário. Revise sistematicamente a eficácia de protocolos de neurofeedback (alfa, SMR, theta/beta) para ansiedade e transtorno de estresse pós-traumático. Com base na revisão, proponha um protocolo otimizado e um sistema de interface em tempo real (OpenBCI + Python). Revisão não requer CEP; implementação e teste sim. (PMID: 35389704)</p>

<h3>Ideia 40 — Simulação de Estimulação Transcraniana por Corrente Contínua (tDCS) com SimNIBS</h3>
<p><strong>Nível:</strong> Avançado. Use o SimNIBS (Simulation of Non-Invasive Brain Stimulation) para modelar a distribuição de campo elétrico durante tDCS em um modelo de cabeça realístico (obtido de MRI pública). Compare diferentes montagens de eletrodos (2x2, HD-tDCS) quanto à focabilidade e intensidade de campo no alvo cortical. Sem CEP (simulação computacional). (PMID: 34983682)</p>

<h2>IA Aplicada à Saúde</h2>

<p>O mercado de IA generativa em saúde movimenta US$ 1,55 bilhão em 2025 e deve atingir US$ 45,82 bilhões até 2034 — crescimento anual de 45%. Projetos nessa área têm visibilidade em congressos como o <a href="https://www.embs.org" target="_blank" rel="noopener">IEEE EMBS</a> e <a href="https://sbeb.org.br" target="_blank" rel="noopener">CBEB (SBEB)</a>. Veja o artigo sobre <a href="/artigos/tendencias-futuro-engenharia-biomedica">tendências da engenharia biomédica</a> para mais contexto.</p>

<h3>Ideia 41 — Sistema de Pergunta-Resposta sobre Diretrizes do SUS com LLM (RAG)</h3>
<p><strong>Nível:</strong> Avançado. Construa um sistema RAG (Retrieval-Augmented Generation) baseado em LLM (LLaMA 3 ou GPT-4o via API) que responda perguntas sobre protocolos clínicos e diretrizes terapêuticas do SUS. Avalie ROUGE, BLEU e avaliação humana (médicos) quanto à precisão factual. Ferramentas: LangChain, ChromaDB (vector store), Hugging Face. (PMID: 37015267)</p>

<h3>Ideia 42 — Chatbot de Triagem Clínica pelo Protocolo de Manchester com NLP</h3>
<p><strong>Nível:</strong> Intermediário a Avançado. Implemente um chatbot conversacional que aplique o Protocolo de Manchester de Classificação de Risco (PMCR) em linguagem natural, classifique a prioridade do paciente (emergência a não urgente) e avalie concordância com triagem humana. Ferramentas: Rasa ou Dialogflow, FastAPI, dataset de casos sintéticos. Requer validação especializada. (PMID: 35872361)</p>

<h3>Ideia 43 — Análise de Viés Algorítmico em Modelos de IA Diagnóstica: Uma Revisão Crítica</h3>
<p><strong>Nível:</strong> Intermediário. Identifique e categorize vieses demográficos (gênero, raça, tom de pele, faixa etária) em modelos de IA aprovados pelo FDA ou publicados em revistas de alto impacto (dermatologia, radiologia, cardiologia). Proponha métricas de equidade (equalized odds, demographic parity) e um checklist de auditoria. TCC de revisão com alto impacto ético-social. (PMID: 36283021)</p>

<h3>Ideia 44 — GANs para Augmentação de Dados em Diagnóstico Cardíaco com ECG Sintético</h3>
<p><strong>Nível:</strong> Avançado. Treine uma GAN condicional (cGAN ou WGAN-GP) para gerar sinais ECG sintéticos de classes minoritárias (fibrilação atrial, LBBB) e use os dados aumentados para treinar um classificador. Avalie a qualidade dos ECGs sintéticos por métricas de distância (FID, MMD) e compare acurácia do classificador com/sem augmentação. Dataset: MIT-BIH, PTB-XL. (PMID: 35189431)</p>

<h2>Dispositivos Médicos e Wearables</h2>

<p>Wearables biomédicos movimentam US$ 72,6 bilhões no mercado global, e protótipos de point-of-care podem ser desenvolvidos por menos de R$ 50. Essa área é ideal para TCCs com potencial de spin-off ou produto.</p>

<h3>Ideia 45 — Sistema IoT de Monitoramento de Sinais Vitais para Pacientes em Isolamento</h3>
<p><strong>Nível:</strong> Intermediário. Integre sensores de SpO₂ (MAX30102), temperatura (MLX90614), frequência respiratória (acelerômetro) e FC em um nó IoT com ESP32, transmissão MQTT e dashboard em Node-RED. Avalie latência, consumo de bateria e segurança de dados (TLS). Aplicação direta em UTIs e triagem. (PMID: 34198042)</p>
<figure>
<img src="/artigos/ideias-tcc-engenharia-biomedica/image-3.webp" alt="Sistema wearable IoT de monitoramento de sinais vitais com sensores de frequência cardíaca, SpO2 e temperatura, transmitindo dados em tempo real para dashboard hospitalar" width="1024" height="571" loading="lazy" decoding="async">
<figcaption>Sistema IoT de monitoramento contínuo de sinais vitais com wearable ESP32 e dashboard em tempo real, exemplo de TCC em dispositivos médicos conectados.</figcaption>
</figure>


<h3>Ideia 46 — Diagnóstico Point-of-Care de Malária com Smartphone e Aprendizado de Máquina</h3>
<p><strong>Nível:</strong> Avançado. Adapte uma lente olho de peixe (< R$ 10) ao smartphone para capturar imagens de esfregaços de sangue e classifique parasitas por CNN (YOLOv8 ou MobileNet). Dataset: NIH Malaria Cell Images. Avalie sensibilidade/especificidade comparando com microscopia padrão. Alto impacto para regiões endêmicas do Norte do Brasil. (PMID: 35876932)</p>

<h3>Ideia 47 — Sistema de Detecção de Quedas em Idosos com IMU e Algoritmo de Limiar Adaptativo</h3>
<p><strong>Nível:</strong> Básico a Intermediário. Use IMU (MPU-6050) no tronco para detectar quedas por limiar de aceleração adaptativo (algoritmo de Kangas ou SVM). Valide com o dataset SisFall (público) ou simule quedas em laboratório com voluntários jovens (requer CEP). Avalie sensibilidade, especificidade e latência de alerta. (PMID: 33812321)</p>

<h3>Ideia 48 — Fita Microfluídica para Urinálise Quantitativa com Processamento por Smartphone</h3>
<p><strong>Nível:</strong> Avançado. Fabrique uma fita microfluídica em PDMS por soft lithography com zonas reagentes para glicose, proteína e pH urinários. Capture imagem com smartphone e extraia valores quantitativos por colorimetria (OpenCV). Custo do protótipo: < R$ 50. Aplicação em triagem de doenças renais e diabéticas. (PMID: 34987231)</p>

<h3>Ideia 49 — Validação Metrológica de Smartwatches para Monitoramento de FC e SpO₂ em Adultos Saudáveis</h3>
<p><strong>Nível:</strong> Básico a Intermediário. Avalie a concordância de dois smartwatches comerciais (ex: Apple Watch, Fitbit, Garmin) com oxímetro de pulso médico e monitor de FC de referência durante repouso, exercício e recuperação. Análise de Bland-Altman, RMSE e limites de concordância. Requer CEP se coletar dados em voluntários. (PMID: 35234876)</p>

<h3>Ideia 50 — Dispositivo Microfluídico em Papel (μPAD) para Diagnóstico de Dengue por RT-LAMP</h3>
<p><strong>Nível:</strong> Avançado. μPADs combinam baixo custo (papel de nitrocelulose, cera de impressora como barreira) com alta sensibilidade diagnóstica quando acoplados a amplificação isotérmica RT-LAMP. Desenvolva um μPAD para detecção dos sorotipos de dengue, avalie LOD (limite de detecção) e compare com RT-PCR padrão. Alta relevância dado o cenário epidêmico de dengue no Brasil. (PMID: 36102845)</p>

<h2>Como escolher o tema e orientações práticas</h2>

<p>Com 50 ideias na mesa, o desafio deixa de ser "o que fazer?" e passa a ser "o que é viável para mim?". As variáveis que definem a viabilidade de um TCC são:</p>

<table>
  <thead>
    <tr>
      <th>Fator</th>
      <th>Perguntas para avaliar</th>
      <th>Como investigar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Disponibilidade de orientador</td>
      <td>Há professor com expertise na área? O lab tem infraestrutura?</td>
      <td>Lattes dos professores do seu departamento</td>
    </tr>
    <tr>
      <td>Acesso a dados/equipamentos</td>
      <td>Precisa de dataset, laboratório, hospital parceiro?</td>
      <td>Repositórios PhysioNet, ISIC, DATASUS; laboratórios da universidade</td>
    </tr>
    <tr>
      <td>Prazo real disponível</td>
      <td>O projeto cabe em 1 semestre? Dois? Requer CEP (30–90 dias)?</td>
      <td>Cronograma reverso a partir da defesa</td>
    </tr>
    <tr>
      <td>Alinhamento com carreira</td>
      <td>O TCC vai ser portfólio para o emprego ou empresa que quero?</td>
      <td>Vagas no LinkedIn e Indeed para a área de interesse</td>
    </tr>
    <tr>
      <td>Custo do protótipo</td>
      <td>Há verba disponível (edital PIBIC, laboratório)?</td>
      <td>Editais CNPq, FAPESP (Iniciação Científica), Cisco Networking Academy</td>
    </tr>
  </tbody>
</table>

<h3>Repositórios e ferramentas open-source indispensáveis</h3>

<p><strong>Dados biomédicos:</strong> PhysioNet (ECG, EEG, SpO₂), TCIA (imagens oncológicas), ISIC Archive (dermatologia), BraTS Challenge (neuroimagem), Sleep-EDF (polissonografia), MIMIC-IV (UTI — requer acesso credenciado).</p>

<p><strong>Processamento e IA:</strong> Python (NumPy, Pandas, scikit-learn, PyTorch, TensorFlow), MATLAB Signal Processing Toolbox, BrainFlow (BCI), MNE-Python (EEG/MEG), MONAI (imagens médicas), NLTK/spaCy (PLN).</p>

<p><strong>Instrumentação:</strong> KiCad (PCB), Arduino IDE/PlatformIO, Altium Designer (licença estudantil gratuita), LTspice (simulação de circuitos).</p>

<p><strong>Biomecânica e simulação:</strong> OpenSim, AnyBody (licença acadêmica), OpenCap, 3D Slicer, FreeCAD + CalculiX (FEA), Ansys (Student Edition), SimNIBS (tDCS/TMS).</p>

<p><strong>Qualidade e regulação:</strong> IEC 60601-1 (disponível na ABNT), ISO 14971:2019, IMDRF SaMD Guidelines (acesso gratuito online), ISO 10993 (biocompatibilidade), PubMed para revisões sistemáticas.</p>

<h3>Dica sobre publicação do TCC</h3>

<p>Os melhores trabalhos podem e devem ser submetidos a periódicos ou conferências. A Revista Brasileira de Engenharia Biomédica (RBIE) — publicação oficial da <a href="https://sbeb.org.br" target="_blank" rel="noopener">SBEB</a> — tem fator de impacto 2.03 e aceita artigos derivados de TCCs. Confira também o Congresso Brasileiro de Engenharia Biomédica (CBEB) e o IEEE EMBC para submissão internacional. Uma publicação durante ou logo após o TCC diferencia enormemente o currículo — especialmente para quem pretende seguir para <a href="/artigos/pos-graduacao-mestrado-doutorado-engenharia-biomedica">pós-graduação (mestrado ou doutorado)</a>.</p>

<h2>Perguntas frequentes</h2>

<h3>Preciso de CEP para fazer um TCC com dados do DATASUS ou PhysioNet?</h3>
<p>Não. Dados públicos anonimizados, como os do DATASUS (SIM, SINAN, CNES) e do PhysioNet (MIT-BIH, Sleep-EDF), são de domínio público e não exigem aprovação do Comitê de Ética em Pesquisa, conforme a Resolução CNS 466/2012. O CEP é obrigatório apenas quando há coleta direta de dados de seres humanos, uso de prontuários identificados, questionários com voluntários ou testes de dispositivos em pessoas.</p>

<h3>Qual é o tipo de TCC mais valorizado para quem quer trabalhar na indústria?</h3>
<p>O desenvolvimento de protótipo ou dispositivo funcional é o mais valorizado pela indústria de dispositivos médicos e startups de healthtech, pois demonstra competência prática em eletrônica, software embarcado ou fabricação. Em segundo lugar, projetos de processamento de sinais e imagens com foco em IA têm alta demanda nas áreas de P&D de empresas como Siemens Healthineers, Philips e startups brasileiras. Revisões sistemáticas são valorizadas em consultorias de regulação e ATS.</p>

<h3>É possível desenvolver um TCC em engenharia biomédica sem laboratório especializado?</h3>
<p>Sim. Vários dos projetos listados neste artigo podem ser desenvolvidos com recursos acessíveis: datasets públicos gratuitos (PhysioNet, ISIC, DATASUS), kits de prototipagem de baixo custo (Arduino, ESP32, sensores comerciais abaixo de R$ 200), ferramentas open-source (Python, OpenSim, 3D Slicer, SimNIBS) e impressoras 3D FDM disponíveis em FabLabs e laboratórios universitários. As ideias de simulação computacional (FEA, tDCS), revisão sistemática e análise de dados públicos são totalmente realizáveis sem laboratório.</p>

<h3>Quanto tempo leva um TCC em engenharia biomédica que exige aprovação no CEP?</h3>
<p>O prazo de análise pelo CEP varia de 30 a 90 dias para projetos de risco mínimo (questionários, observação clínica) e pode ultrapassar 6 meses para projetos de risco maior (testes de dispositivos em pacientes). Adicione ao cronograma o tempo de preparação do protocolo (2–4 semanas), possíveis pedências (30 dias para resposta) e coleta de dados após aprovação. Se o seu TCC tiver duração de 1 semestre (6 meses), projetos que exijam CEP quase certamente precisarão de extensão ou devem ser iniciados no semestre anterior.</p>

<h3>Posso usar dados do ChatGPT ou outras IAs para gerar o conteúdo do meu TCC?</h3>
<p>Usar IAs generativas para redigir o texto do TCC sem declaração de uso e sem revisão crítica do conteúdo viola as políticas de integridade acadêmica da maioria das universidades brasileiras. O uso legítimo inclui: apoio na revisão gramatical, geração de código (com revisão e compreensão do aluno), tradução, e exploração inicial de literatura. A Capes e o CNPq recomendam que o uso de IA seja declarado explicitamente na metodologia. Nunca use IA para fabricar referências — ferramentas como PubMed, Google Scholar e o próprio DOI devem verificar cada citação.</p>

<h3>Existe financiamento disponível para desenvolvimento do TCC em engenharia biomédica?</h3>
<p>Sim. As principais fontes são: bolsas de Iniciação Científica do <a href="https://www.gov.br/cnpq" target="_blank" rel="noopener">CNPq</a> (PIBIC, R$ 700/mês por 12 meses), bolsas das fundações estaduais (FAPESP IC: R$ 800/mês + reserva técnica de 15%, FAPERJ, FAPEMIG, FAPERGS), editais internos de universidades públicas, programas de fomento a startups (InovAtiva Brasil, Startup Farm, FINEP Startup) e desafios da indústria patrocinados por empresas como Johnson & Johnson Innovation e Medtronic. Para projetos em parceria com hospitais, verifique editais do PROADI-SUS, que investiu R$ 133,6 milhões em inovação digital em saúde em 2024–2025.</p>

<h3>Como saber se a minha ideia de TCC já foi feita antes?</h3>
<p>Pesquise no Repositório Institucional da sua universidade, na BDTD (Biblioteca Digital Brasileira de Teses e Dissertações — bdtd.ibict.br), no Google Scholar e no PubMed. Um trabalho "já feito" não invalida um novo TCC — ao contrário, replicar e melhorar um estudo com nova metodologia, dataset atualizado ou contexto clínico diferente é prática científica legítima e demonstra capacidade de revisão crítica da literatura.</p>

<p>Se você está ainda explorando as possibilidades da carreira, o <a href="/artigos/guia-engenharia-biomedica">Guia Definitivo de Engenharia Biomédica</a> cobre desde a formação até as perspectivas de <a href="/artigos/salario-engenheiro-biomedico">salários</a> e <a href="/artigos/pos-graduacao-mestrado-doutorado-engenharia-biomedica">pós-graduação</a>. Para quem já está no mercado, confira os dados mais recentes sobre <a href="/artigos/mercado-trabalho-engenharia-biomedica-dados">contratações e empregadores</a> e o guia de <a href="/artigos/estagio-engenharia-biomedica-guia">estágio em Engenharia Biomédica</a>.</p>

<p><em>Artigo elaborado com base em repositórios institucionais de universidades brasileiras, PhysioNet, ISIC Archive, IEEE Xplore, PubMed, ABIMO, ANVISA, CNPq e SBEB. Última atualização: fevereiro de 2026.</em></p>
`,
};
