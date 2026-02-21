import { Artigo } from './types';

export const artigo: Artigo = {
  titulo: 'As 12 Áreas de Atuação da Engenharia Biomédica: Qual Escolher?',
  resumo: 'Conheça as 12 principais áreas de atuação da Engenharia Biomédica: engenharia clínica, IA em saúde, biomecânica, regulatório e mais. Mercado, salários e perspectivas.',
  categoria: 'Profissão',
  categoriaVariant: 'coral',
  data: '2026-02-17',
  leitura: '16 min',
  conteudo: `
<p class="text-lg leading-relaxed mb-6"><strong>Poucos profissionais de engenharia têm tantas opções de carreira quanto o engenheiro biomédico.</strong> Da UTI de um hospital público ao laboratório de inteligência artificial de uma startup, do escritório de regulamentação da <a href="https://www.gov.br/anvisa">ANVISA</a> à sala limpa de uma fábrica de implantes — a Engenharia Biomédica oferece caminhos radicalmente diferentes entre si, todos unidos pelo mesmo propósito: usar tecnologia para cuidar da saúde das pessoas.</p>

<p class="mb-6">Este artigo detalha cada uma das 12 principais áreas de atuação, com descrição prática do trabalho, perfil ideal, mercado de trabalho e perspectivas futuras. Se você está escolhendo sua especialização ou considerando uma transição de carreira, este guia vai ajudar a encontrar o caminho certo.</p>

<blockquote>
<p>Este artigo faz parte do <a href="/artigos/guia-engenharia-biomedica">Guia Definitivo de Engenharia Biomédica</a>.</p>
</blockquote>

<h2>1. Engenharia Clínica</h2>

<h3>O que é</h3>
<p>A Engenharia Clínica é a subárea da Engenharia Biomédica dedicada à <strong>gestão de tecnologia em saúde dentro de hospitais e estabelecimentos assistenciais</strong>. O engenheiro clínico é responsável por todo o ciclo de vida dos equipamentos médicos: da especificação e aquisição à instalação, calibração, manutenção preventiva e corretiva, treinamento de usuários e desativação.</p>

<h3>O que faz no dia a dia</h3>
<p>O engenheiro clínico gerencia parques tecnológicos que podem incluir centenas ou milhares de equipamentos. Suas atividades cotidianas envolvem manutenções preventivas conforme cronograma (calibração de desfibriladores, verificação de monitores), manutenções corretivas emergenciais (um ventilador que falha durante a madrugada), elaboração de pareceres técnicos para aquisição de novos equipamentos, treinamento de equipes de enfermagem e médicos no uso correto de tecnologias, gestão de contratos com fabricantes e prestadores de serviço, e monitoramento de alertas de tecnovigilância da ANVISA.</p>

<h3>Perfil ideal</h3>
<p>Profissionais que gostam de ambiente hospitalar, gestão, resolução de problemas práticos e contato direto com equipes clínicas. Exige capacidade de trabalhar sob pressão — equipamentos críticos podem falhar a qualquer momento.</p>

<h3>Mercado</h3>
<p>É a área que <strong>mais absorve engenheiros biomédicos no Brasil</strong>. O país possui mais de 6.500 hospitais, e a tendência é de profissionalização crescente da gestão de equipamentos. A ABEClin (Associação Brasileira de Engenharia Clínica) é a principal entidade da área, com a Arena de Engenharia Clínica na Feira Hospitalar como ponto de encontro anual.</p>

<h3>Salário médio</h3>
<p>R$ 7.500 a R$ 14.000/mês.</p>

<h3>Perspectivas</h3>
<p>A digitalização hospitalar (IoT médico, manutenção preditiva baseada em dados, integração de equipamentos com prontuário eletrônico) está transformando a engenharia clínica de uma função predominantemente técnica para uma função estratégica e analítica.</p>

<h2>2. Instrumentação Biomédica</h2>

<h3>O que é</h3>
<p>O desenvolvimento de <strong>equipamentos e sensores para medir variáveis biológicas</strong>: sinais elétricos do coração (ECG), cérebro (EEG), músculos (EMG), saturação de oxigênio (oximetria), pressão arterial, temperatura, fluxo respiratório, entre outras.</p>

<h3>O que faz no dia a dia</h3>
<p>Projeta circuitos de condicionamento de sinais (amplificação, filtragem, digitalização), desenvolve sensores e transdutores, programa firmware para microcontroladores e sistemas embarcados, executa testes de segurança elétrica conforme IEC 60601 e elabora protótipos funcionais que evoluem para produtos comerciais.</p>

<h3>Perfil ideal</h3>
<p>Quem tem afinidade com eletrônica, circuitos e sistemas embarcados. É a área mais "clássica" da Engenharia Biomédica, diretamente ligada à tradição de engenharia elétrica/eletrônica.</p>

<h3>Mercado</h3>
<p>Empresas fabricantes de equipamentos como Instramed, Fanem, Lifemed e multinacionais (Philips, GE, Siemens). Também há demanda em centros de pesquisa para desenvolvimento de instrumentação personalizada.</p>

<h3>Salário médio</h3>
<p>R$ 8.000 a R$ 15.000/mês (na indústria).</p>

<h3>Perspectivas</h3>
<p>A miniaturização de sensores, wearables de saúde e IoMT (Internet of Medical Things) estão expandindo enormemente a demanda por especialistas em instrumentação que dominem também conectividade (Bluetooth, Wi-Fi, LoRa) e processamento embarcado.</p>

<h2>3. Processamento de Sinais e Imagens Médicas</h2>

<h3>O que é</h3>
<p>Desenvolvimento de <strong>algoritmos e softwares para analisar sinais biomédicos e imagens médicas</strong>. Inclui desde filtragem e detecção de padrões em ECGs até segmentação automática de tumores em ressonâncias magnéticas.</p>

<h3>O que faz no dia a dia</h3>
<p>Implementa algoritmos de processamento digital de sinais (FFT, wavelets, filtros adaptativos), desenvolve pipelines de pré-processamento de imagens DICOM, cria modelos de machine learning para classificação e detecção, valida resultados com médicos especialistas (radiologistas, cardiologistas) e publica resultados em periódicos como <a href="https://www.ieee.org">IEEE</a> Transactions on Medical Imaging.</p>

<h3>Perfil ideal</h3>
<p>Quem gosta de matemática, programação (Python, MATLAB, C++) e tem interesse tanto em teoria (processamento de sinais, álgebra linear) quanto em aplicação clínica.</p>

<h3>Mercado</h3>
<p>Uma das áreas com crescimento mais acelerado. Startups de IA em saúde (Neomed, Harpia Health, Neuralmed), departamentos de P&D de empresas de imagem (Philips, Siemens, GE), centros de pesquisa (CEB/UNICAMP, COPPE/UFRJ, CIIA-Saúde/UFMG) e hospitais com departamentos de inovação.</p>

<h3>Salário médio</h3>
<p>R$ 10.000 a R$ 20.000/mês. É uma das áreas mais bem remuneradas, especialmente quando combinada com competências em deep learning.</p>

<h3>Perspectivas</h3>
<p>A convergência com IA está transformando esta área radicalmente. A aceleração de ressonância magnética em até 4x com IA (MICLab/UNICAMP), a detecção automática de arritmias em ECG (CIIA-Saúde/UFMG analisa ~4.000 ECGs/dia) e a radiologia computadorizada são apenas o começo.</p>

<h2>4. Biomecânica e Engenharia de Reabilitação</h2>

<h3>O que é</h3>
<p>Estudo das <strong>forças e movimentos do corpo humano</strong> aplicado ao projeto de próteses, órteses, exoesqueletos, implantes ortopédicos, equipamentos de fisioterapia e tecnologias assistivas.</p>

<h3>O que faz no dia a dia</h3>
<p>Realiza análise de marcha e movimento humano, projeta próteses e órteses usando modelagem CAD e simulação por elementos finitos, desenvolve exoesqueletos e dispositivos de reabilitação robótica, testa biocompatibilidade e resistência mecânica de implantes e trabalha com impressão 3D para produção de dispositivos personalizados.</p>

<h3>Perfil ideal</h3>
<p>Quem se interessa por mecânica, materiais, anatomia funcional e tem motivação para trabalhar diretamente com pacientes que necessitam de reabilitação ou tecnologia assistiva.</p>

<h3>Mercado</h3>
<p>Empresas de implantes ortopédicos (Stryker, DePuy Synthes/J&J, Baumer), laboratórios de próteses, centros de reabilitação, universidades (USP, UFABC, UFSC) e startups de tecnologia assistiva. O envelhecimento da população brasileira aumenta a demanda por implantes e dispositivos de reabilitação.</p>

<h3>Salário médio</h3>
<p>R$ 7.000 a R$ 14.000/mês.</p>

<h3>Perspectivas</h3>
<p>A impressão 3D de implantes personalizados, próteses mioelétricas com sensores avançados e exoesqueletos para reabilitação neurológica são tendências que expandem o campo. O SUS tem incorporado cada vez mais tecnologias assistivas, criando demanda no setor público.</p>

<h2>5. Biomateriais e Engenharia de Tecidos</h2>

<h3>O que é</h3>
<p>Desenvolvimento de <strong>materiais biocompatíveis</strong> para uso no corpo humano (implantes, scaffolds, sistemas de liberação de fármacos) e técnicas de <strong>engenharia de tecidos</strong> para regenerar ou substituir tecidos e órgãos danificados.</p>

<h3>O que faz no dia a dia</h3>
<p>Pesquisa e desenvolve novos biomateriais (polímeros, cerâmicas, hidrogéis, compósitos), testa biocompatibilidade conforme ISO 10993, projeta scaffolds para crescimento celular, trabalha com bioimpressão 3D, desenvolve sistemas de liberação controlada de fármacos e conduz ensaios in vitro e in vivo.</p>

<h3>Perfil ideal</h3>
<p>Quem tem afinidade com química, biologia celular e ciência dos materiais. É a área mais "científica" da Engenharia Biomédica, frequentemente combinada com pesquisa acadêmica.</p>

<h3>Mercado</h3>
<p>Predominantemente acadêmico e em centros de pesquisa (USP, UNICAMP, UFRJ, UFMG). Empresas de implantes, indústria farmacêutica e startups de medicina regenerativa. No Brasil, empresas como 3DBS (bioimpressão, financiada pelo PIPE-<a href="https://fapesp.br">FAPESP</a>) representam o ecossistema nascente.</p>

<h3>Salário médio</h3>
<p>R$ 7.000 a R$ 13.000/mês (indústria); R$ 10.000 a R$ 22.000/mês (docência em universidades federais).</p>

<h3>Perspectivas</h3>
<p>A bioimpressão 3D é uma das tecnologias mais promissoras da medicina do século XXI. O Centro de Competência em Terapias Avançadas do Einstein/EMBRAPII e pesquisas com órgãos-em-chip (organ-on-a-chip) apontam para uma revolução na medicina regenerativa nas próximas décadas.</p>

<h2>6. Informática em Saúde</h2>

<h3>O que é</h3>
<p>Projeto e implementação de <strong>sistemas de informação para saúde</strong>: prontuários eletrônicos do paciente (PEP), sistemas PACS/RIS para imagens médicas, plataformas de telemedicina, interoperabilidade entre sistemas (HL7, FHIR) e infraestrutura de saúde digital.</p>

<h3>O que faz no dia a dia</h3>
<p>Desenvolve e integra sistemas de informação hospitalar (HIS), implementa padrões de interoperabilidade (HL7 FHIR, DICOM), projeta arquiteturas de dados de saúde, trabalha com prontuários eletrônicos e certificação SBIS, garante conformidade com LGPD para dados de saúde e apoia a transformação digital de hospitais e redes de saúde.</p>

<h3>Perfil ideal</h3>
<p>Quem gosta de programação, arquitetura de sistemas, bancos de dados e tem interesse na lógica dos processos de saúde. Combina habilidades de engenharia de software com conhecimento do domínio de saúde.</p>

<h3>Mercado</h3>
<p>Empresas de software para saúde (MV Sistemas, Tasy/Philips, Pixeon, TOTVS Saúde), startups de saúde digital, hospitais com equipes de TI em saúde, Ministério da Saúde (Programa SUS Digital) e consultorias de transformação digital.</p>

<h3>Salário médio</h3>
<p>R$ 8.000 a R$ 18.000/mês. Profissionais sêniores em arquitetura de sistemas de saúde são muito valorizados.</p>

<h3>Perspectivas</h3>
<p>A Estratégia Nacional de Saúde Digital 2020-2028 e o investimento de R$ 464 milhões do Ministério da Saúde em transformação digital do SUS (2024) sinalizam demanda crescente por pelo menos uma década. A interoperabilidade entre sistemas ainda é um dos maiores desafios do setor.</p>

<h2>7. Inteligência Artificial em Saúde</h2>

<h3>O que é</h3>
<p>Aplicação de <strong>machine learning, deep learning e IA generativa</strong> para solução de problemas em saúde: diagnóstico por imagem, predição de doenças, análise genômica, processamento de linguagem natural em prontuários, chatbots médicos e sistemas de apoio à decisão clínica.</p>

<h3>O que faz no dia a dia</h3>
<p>Treina e valida modelos de deep learning para detecção de doenças em imagens médicas, desenvolve pipelines de dados clínicos para modelos preditivos, implementa sistemas de NLP para extração de informações de prontuários, valida clinicamente algoritmos de IA com equipes médicas e prepara documentação regulatória para SaMD (RDC 657/2022).</p>

<h3>Perfil ideal</h3>
<p>Quem domina programação (Python, TensorFlow/PyTorch), estatística, aprendizado de máquina e tem disposição para trabalhar na interface com médicos. Publicações científicas são um diferencial forte.</p>

<h3>Mercado</h3>
<p>A área de crescimento mais explosivo. No Brasil, 17% dos médicos já usam IA generativa na rotina clínica e 20% das healthtechs incorporam IA. Empresas como Neuralmed, Robô Laura, Portal Telemedicina e Neomed lideram. O mercado de IA em saúde no Brasil projeta US$ 3,6 bilhões até 2030.</p>

<h3>Salário médio</h3>
<p>R$ 12.000 a R$ 25.000/mês. É a área com maior teto salarial da Engenharia Biomédica.</p>

<h3>Perspectivas</h3>
<p>O PL 2.338/2023 (Marco Regulatório da IA) classifica IA em saúde como "alto risco", criando demanda por profissionais que combinem competência técnica em IA com conhecimento regulatório e clínico — um perfil que o engenheiro biomédico preenche como ninguém.</p>

<h2>8. Engenharia Neural e Neuroengenharia</h2>

<h3>O que é</h3>
<p>O campo que trabalha na <strong>interface entre engenharia e neurociências</strong>: interfaces cérebro-computador (BCI), estimulação cerebral profunda, neuromodulação, implantes cocleares e retinianos, neuropróteses e mapeamento cerebral funcional.</p>

<h3>O que faz no dia a dia</h3>
<p>Desenvolve eletrodos e sistemas de aquisição de sinais neurais, projeta algoritmos de decodificação de sinais cerebrais, pesquisa técnicas de estimulação (TMS, tDCS, DBS), trabalha com neurofeedback e interfaces cérebro-computador e programa sistemas de neuropróteses (controle de próteses de membro superior por sinais do córtex motor).</p>

<h3>Perfil ideal</h3>
<p>Quem se fascina pelo cérebro humano e quer trabalhar na fronteira entre neurociências e tecnologia. Exige sólida formação em processamento de sinais e eletrônica.</p>

<h3>Mercado</h3>
<p>Predominantemente acadêmico e de pesquisa no Brasil (UFRJ, USP, UFMG, UFABC). Internacionalmente, empresas como Neuralink, Medtronic (DBS) e Cochlear empregam neuroengenheiros. No Brasil, o INCT MACC (Mapeamento Cerebral) e laboratórios de neurociências computacionais são os principais centros.</p>

<h3>Salário médio</h3>
<p>R$ 8.000 a R$ 15.000/mês (pesquisa); significativamente mais no exterior.</p>

<h3>Perspectivas</h3>
<p>As interfaces cérebro-computador avançam rapidamente — Neuralink e concorrentes estão em fase de testes clínicos. No Brasil, a demanda cresce conforme a neurologia se torna mais dependente de tecnologia.</p>

<h2>9. Robótica Médica e Cirúrgica</h2>

<h3>O que é</h3>
<p>Projeto, desenvolvimento e operação de <strong>robôs para aplicações em saúde</strong>: cirurgia minimamente invasiva, reabilitação, esterilização, logística hospitalar e telepresença médica.</p>

<h3>O que faz no dia a dia</h3>
<p>Instala, configura e mantém sistemas robóticos cirúrgicos (Da Vinci), desenvolve software de controle e planejamento cirúrgico, projeta robôs de reabilitação e exoesqueletos, trabalha com simulação e navegação cirúrgica e pesquisa novas modalidades de robótica assistiva.</p>

<h3>Perfil ideal</h3>
<p>Quem gosta de mecatrônica, controle, robótica e quer ver sua tecnologia aplicada diretamente ao cuidado de pacientes. Combina mecânica, eletrônica e software.</p>

<h3>Mercado</h3>
<p>O Brasil possui mais de 150 plataformas Da Vinci instaladas e 40 no SUS. A ANS tornou obrigatória a cobertura de prostatectomia robótica pelos planos a partir de abril de 2026 — isso deve multiplicar a demanda por profissionais que saibam instalar, manter e operar sistemas robóticos. Empresas como Intuitive Surgical (Da Vinci), Stryker (Mako) e startups nacionais contratam.</p>

<h3>Salário médio</h3>
<p>R$ 10.000 a R$ 20.000/mês.</p>

<h3>Perspectivas</h3>
<p>A telecirurgia robótica remota (o Sírio-Libanês realizou a primeira do Brasil em 2024) e a chegada de novos concorrentes ao Da Vinci (reduzindo custos) devem democratizar o acesso e ampliar o mercado significativamente.</p>

<h2>10. Regulação e Assuntos Regulatórios</h2>

<h3>O que é</h3>
<p>A área dedicada a garantir que dispositivos médicos cumpram <strong>todos os requisitos regulatórios</strong> antes de chegarem ao mercado. Envolve registro na ANVISA, conformidade com normas técnicas (IEC 60601, ISO 13485, ISO 14971), vigilância pós-mercado e certificações internacionais (<a href="https://www.fda.gov/medical-devices">FDA</a>, CE).</p>

<h3>O que faz no dia a dia</h3>
<p>Prepara dossiês técnicos para registro de dispositivos na ANVISA, conduz análises de risco conforme ISO 14971, coordena testes de segurança e desempenho em laboratórios acreditados, implementa e audita sistemas de gestão da qualidade (ISO 13485), monitora notificações de tecnovigilância e acompanha mudanças regulatórias (novas RDCs, consultas públicas).</p>

<h3>Perfil ideal</h3>
<p>Quem tem atenção a detalhes, capacidade analítica e gosta de trabalhar com documentação técnica rigorosa. Exige visão sistêmica — o regulatório é a ponte entre engenharia, clínica, jurídico e negócios.</p>

<h3>Mercado</h3>
<p>Toda empresa que fabrica ou importa dispositivos médicos precisa de profissionais regulatórios. Multinacionais, nacionais, consultorias especializadas e a própria ANVISA. A RDC 657/2022 (SaMD) e a regulamentação de IA em saúde estão criando novas demandas.</p>

<h3>Salário médio</h3>
<p>R$ 9.000 a R$ 18.000/mês. Uma das áreas mais bem remuneradas, pela combinação rara de conhecimento técnico e regulatório.</p>

<h3>Perspectivas</h3>
<p>A complexidade regulatória só aumenta. Novas categorias de produtos (SaMD, IA diagnóstica, telemedicina, wearables) exigem profissionais que entendam tanto a tecnologia quanto as regras. A harmonização regulatória internacional (IMDRF, Mercosul) amplia ainda mais o campo.</p>

<h2>11. Telemedicina e Saúde Digital</h2>

<h3>O que é</h3>
<p>Desenvolvimento de tecnologias e plataformas para <strong>prestação de serviços de saúde à distância</strong>: teleconsulta, telemonitoramento, segunda opinião médica remota, educação em saúde digital e integração de dados de dispositivos remotos com sistemas hospitalares.</p>

<h3>O que faz no dia a dia</h3>
<p>Desenvolve plataformas de videoconsulta com integração a prontuários eletrônicos, projeta sistemas de telemonitoramento de pacientes crônicos (diabetes, hipertensão, insuficiência cardíaca), integra dados de wearables e dispositivos domiciliares com sistemas hospitalares, garante segurança e privacidade conforme LGPD e implementa padrões de interoperabilidade para dados de saúde remota.</p>

<h3>Perfil ideal</h3>
<p>Quem gosta de desenvolvimento de software, UX/UI, arquitetura de sistemas e quer trabalhar em soluções que ampliem o acesso à saúde para milhões de pessoas em regiões remotas.</p>

<h3>Mercado</h3>
<p>O Brasil realizou mais de 30 milhões de consultas remotas em 2023. O mercado projeta US$ 6,19 bilhões até 2030. A Lei 14.510/2022 consolidou o marco legal, e o Ministério da Saúde investiu R$ 464 milhões em transformação digital do SUS. Empresas como Conexa Saúde, Doctoralia, Portal Telemedicina e dezenas de healthtechs contratam.</p>

<h3>Salário médio</h3>
<p>R$ 8.000 a R$ 16.000/mês.</p>

<h3>Perspectivas</h3>
<p>A telemedicina é irreversível. A pandemia provou o conceito e a legislação consolidou a prática. As próximas fronteiras incluem telecirurgia, telemonitoramento com IA preditiva e integração com dispositivos vestíveis.</p>

<h2>12. Nanotecnologia e Áreas Emergentes</h2>

<h3>O que é</h3>
<p>Um conjunto de campos emergentes que representam as <strong>fronteiras da Engenharia Biomédica</strong>: nanotecnologia em saúde (nanopartículas para entrega de fármacos, revestimentos antimicrobianos), bioimpressão 3D (fabricação de tecidos e órgãos), gêmeos digitais em saúde, computação quântica para descoberta de fármacos e realidade aumentada/virtual para cirurgia e reabilitação.</p>

<h3>O que faz no dia a dia</h3>
<p>Dependendo da subárea: sintetiza e caracteriza nanopartículas para aplicações biomédicas, opera impressoras de bioimpressão 3D para produção de scaffolds e tecidos, desenvolve modelos digitais de órgãos para simulação pré-cirúrgica, cria ambientes de realidade virtual para reabilitação neuromotora ou pesquisa aplicações de computação quântica em modelagem molecular.</p>

<h3>Perfil ideal</h3>
<p>Quem quer trabalhar na fronteira do conhecimento e tem disposição para pesquisa de alto risco e longo prazo. Essas áreas estão majoritariamente em fase de pesquisa, com transição gradual para aplicações comerciais.</p>

<h3>Mercado</h3>
<p>Predominantemente acadêmico e em centros de pesquisa. No Brasil, a Nanox (São Carlos, revestimentos antivirais, apoiada pelo PIPE-FAPESP) e as empresas de bioimpressão (3D4U, Formula3D, 3DBS) representam os primeiros movimentos comerciais.</p>

<h3>Salário médio</h3>
<p>Variável — R$ 7.000 a R$ 15.000/mês em pesquisa. O potencial de retorno é maior em startups com funding internacional.</p>

<h3>Perspectivas</h3>
<p>São as áreas com maior potencial disruptivo no longo prazo, mas com retorno mais incerto no curto prazo. Para quem tem perfil de pesquisador-empreendedor, representam oportunidades únicas.</p>

<h2>Como escolher sua área</h2>

<p>Três perguntas podem ajudar na decisão:</p>

<p><strong>1. Hospital ou indústria?</strong> Se você gosta do ambiente hospitalar, contato com pacientes e equipes clínicas, engenharia clínica ou informática em saúde são caminhos naturais. Se prefere P&D e desenvolvimento de produtos, instrumentação, biomecânica ou IA são mais indicadas.</p>

<p><strong>2. Hardware ou software?</strong> Se sua paixão é eletrônica e circuitos, instrumentação e engenharia neural são ideais. Se é programação e dados, IA em saúde, processamento de imagens e informática em saúde são as melhores opções.</p>

<p><strong>3. Retorno financeiro ou impacto social direto?</strong> As áreas mais bem remuneradas são IA em saúde, assuntos regulatórios e robótica. As com impacto social mais visível são engenharia clínica (especialmente no SUS), telemedicina e engenharia de reabilitação.</p>

<p>A boa notícia: a Engenharia Biomédica permite transitar entre áreas ao longo da carreira. Muitos profissionais começam em engenharia clínica, migram para a indústria e eventualmente fundam suas próprias startups.</p>

<blockquote>
<p>Volte ao <a href="/artigos/guia-engenharia-biomedica">Guia Definitivo de Engenharia Biomédica</a> para explorar todas as seções.</p>
</blockquote>

<p><em>Publicado por <a href="https://engenhariabiomedica.com">engenhariabiomedica.com</a></em></p>
`
};
