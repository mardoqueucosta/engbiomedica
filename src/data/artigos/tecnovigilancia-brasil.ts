import { Artigo } from './types';

export const artigo: Artigo = {
  titulo: 'Tecnovigilância no Brasil: Obrigações, Notificações e Boas Práticas para Fabricantes',
  resumo: 'Guia completo sobre tecnovigilância no Brasil: obrigações legais de fabricantes e importadores, prazos de notificação de eventos adversos, uso do NOTIVISA, fluxo de ações de campo (recalls) e comparação com FDA e EU MDR.',
  categoria: 'Regulamentação',
  categoriaVariant: 'coral',
  data: '2026-02-22',
  leitura: '14 min',
  conteudo: `
<!--IMG_SLOTS
<!-- IMG_SLOT_1 -->
SECTION: Fluxo de Notificação de Eventos Adversos no NOTIVISA
CONTEXT: Diagrama mostrando o fluxo completo de notificação de eventos adversos de dispositivos médicos no Brasil, desde a identificação do evento pelo fabricante/importador até o encerramento pela ANVISA
VISUAL_ELEMENTS: Caixas de processo numeradas (1-Identificação do evento, 2-Classificação da gravidade, 3-Abertura no NOTIVISA, 4-Envio de relatório preliminar, 5-Investigação interna, 6-Relatório final, 7-Ação corretiva), setas de fluxo, tabela lateral com prazos (72h/10 dias/30 dias), logotipo da ANVISA estilizado
IMAGE_STYLE: technical
IMAGE_TYPE: Fluxograma
ALT: Fluxograma do processo de notificação de eventos adversos de dispositivos médicos no sistema NOTIVISA da ANVISA com prazos regulatórios
CAPTION: Fluxo de notificação de eventos adversos no NOTIVISA: da identificação do evento à conclusão pela ANVISA, com prazos legais destacados.

<!-- IMG_SLOT_2 -->
SECTION: Rede Sentinela e a Vigilância Pós-Mercado
CONTEXT: Profissional de engenharia clínica em hospital realizando inspeção técnica em equipamento médico como parte da Rede Sentinela da ANVISA
VISUAL_ELEMENTS: Engenheiro clínico com jaleco branco e EPI utilizando tablet para registrar ocorrência junto a equipamento médico hospitalar (monitor multiparâmetros), ambiente de UTI hospitalar moderno, placa da Rede Sentinela ANVISA visível ao fundo
IMAGE_STYLE: hyperrealistic
IMAGE_TYPE: Profissional em ação
ALT: Engenheiro clínico inspecionando equipamento médico em UTI hospitalar como parte da Rede Sentinela de tecnovigilância da ANVISA
CAPTION: A Rede Sentinela conta com 281 unidades hospitalares em todos os 27 estados para monitorar a segurança de dispositivos médicos em uso.

<!-- IMG_SLOT_3 -->
SECTION: Tecnovigilância Global: Brasil, FDA e União Europeia
CONTEXT: Comparativo visual entre os sistemas de vigilância pós-mercado do Brasil (ANVISA/NOTIVISA), EUA (FDA/MDR/MAUDE) e União Europeia (EU MDR/EUDAMED)
VISUAL_ELEMENTS: Três colunas lado a lado com bandeiras (Brasil, EUA, UE), nome do sistema, prazos de notificação em destaque, banco de dados público, tipo de relatório exigido; paleta de cores verde/azul/amarelo-estrela; tabela comparativa estilizada
IMAGE_STYLE: technical
IMAGE_TYPE: Comparativo visual
ALT: Comparativo dos sistemas de tecnovigilância do Brasil NOTIVISA, EUA FDA MAUDE e União Europeia EU MDR EUDAMED com prazos e requisitos
CAPTION: Comparativo internacional: embora os prazos e sistemas variem, Brasil, EUA e UE convergem para padrões do IMDRF em vigilância pós-mercado.
IMG_SLOTS-->

<p class="text-lg leading-relaxed mb-6">A <strong>tecnovigilância</strong> é o conjunto de ações de vigilância pós-mercado aplicadas a produtos de saúde — equipamentos médicos, implantes, kits diagnósticos e correlatos — com o objetivo de identificar, avaliar e prevenir eventos adversos e queixas técnicas. No Brasil, esse sistema é coordenado pela <strong>ANVISA</strong> e operacionalizado por meio do <strong>NOTIVISA</strong>, sendo de cumprimento obrigatório para fabricantes, importadores e detentores de registro. Compreender as obrigações legais, os prazos de notificação e as boas práticas desse sistema é indispensável para manter a conformidade regulatória e, sobretudo, proteger pacientes e profissionais de saúde.</p>

<p>Se você ainda está estruturando a base regulatória da sua empresa, consulte também nosso <a href="/artigos/anvisa-dispositivos-medicos-guia-2026">guia completo sobre dispositivos médicos na ANVISA em 2026</a> e o artigo sobre <a href="/artigos/como-registrar-dispositivo-medico-anvisa">como registrar um dispositivo médico na ANVISA</a>. Para a dimensão de gestão de riscos que antecede a vigilância pós-mercado, veja nossa análise da <a href="/artigos/iso-14971-gestao-risco">ISO 14971 para gestão de risco</a>.</p>

<h2>O que é Tecnovigilância e por que ela é obrigatória</h2>

<p>A tecnovigilância brasileira tem sua norma central na <strong>RDC 67/2009</strong>, ainda em vigor em 2026. Ela define o sistema de vigilância pós-comercialização de produtos de saúde sujeitos ao regime de vigilância sanitária, abrangendo três categorias principais de ocorrências:</p>

<ul>
  <li><strong>Eventos adversos</strong>: danos à saúde de paciente, usuário ou terceiro, relacionados ao uso de produto de saúde.</li>
  <li><strong>Queixas técnicas</strong>: desvios de qualidade que não chegaram a causar dano, mas que poderiam ter causado ou que comprometem as características do produto.</li>
  <li><strong>Desvios de qualidade</strong>: inconformidades detectadas antes do uso, durante a fabricação ou distribuição.</li>
</ul>

<p>A obrigatoriedade não se limita apenas a notificar eventos já ocorridos. A legislação exige que fabricantes e importadores mantenham um sistema estruturado de <em>vigilância pós-mercado</em>, com procedimentos documentados para coleta, análise e resposta a informações de campo. Essa exigência foi reforçada pela <strong>RDC 848/2024</strong>, que ampliou os requisitos de avaliação clínica periódica e introduziu critérios específicos para dispositivos com conectividade (cibersegurança) e nanomateriais.</p>

<h2>Estrutura do Sistema de Tecnovigilância: Três Níveis</h2>

<p>O sistema brasileiro opera em três níveis hierárquicos complementares:</p>

<h3>Nível Federal: ANVISA, GGMON e GETEC</h3>

<p>A ANVISA é a autoridade regulatória central. Dentro dela, a <strong>GGMON</strong> (Gerência-Geral de Monitoramento de Mercado) coordena as ações nacionais de pós-mercado. A <strong>GETEC</strong> (Gerência de Tecnovigilância) é responsável especificamente pela análise das notificações de produtos médicos, emissão de alertas e investigação de eventos graves. O <strong>SISTEC</strong>, sistema de alertas da ANVISA, acumula mais de 5.060 alertas emitidos desde sua criação, incluindo proibições de produtos e recalls.</p>

<h3>Nível Estadual e Municipal: as VISAs</h3>

<p>As Vigilâncias Sanitárias (VISAs) estaduais e municipais são o braço executivo regional. Elas recebem notificações locais, realizam inspeções em estabelecimentos e podem determinar medidas cautelares imediatas — como a suspensão de uso de um equipamento — enquanto a ANVISA conduz a investigação federal. A integração entre os três níveis é essencial para a velocidade de resposta a eventos graves.</p>

<h3>Rede Sentinela: os Olhos do Sistema</h3>

<p>A <strong>Rede Sentinela</strong> é composta por hospitais e serviços de saúde de referência que atuam como notificadores qualificados e vigilantes ativos. Em dezembro de 2025, a rede contava com <strong>281 unidades em todos os 27 estados</strong>. A <strong>RDC 872/2024</strong> modernizou o marco regulatório da Rede Sentinela, reforçando os critérios de adesão, as responsabilidades dos serviços e os mecanismos de retroalimentação de informações. Engenheiros clínicos nesses hospitais são figuras centrais na identificação e registro de ocorrências — veja mais em nosso artigo sobre <a href="/artigos/manutencao-equipamentos-hospitalares">manutenção de equipamentos hospitalares</a>.</p>

<!-- IMG_SLOT_2 -->

<h2>NOTIVISA: O Sistema Eletrônico de Notificação</h2>

<p>O <strong>NOTIVISA</strong> (Sistema de Notificações em Vigilância Sanitária) é a plataforma eletrônica oficial da ANVISA para registro de eventos adversos e queixas técnicas, em operação desde 2006. O acesso é feito pelo portal da ANVISA, com cadastro por CPF/CNPJ, e há módulos distintos para:</p>

<ul>
  <li>Fabricantes e importadores (notificadores obrigatórios)</li>
  <li>Serviços de saúde e Rede Sentinela</li>
  <li>Profissionais de saúde</li>
  <li>Cidadãos (via <em>e-NOTIVISA</em>, plataforma experimental que permite comunicação direta entre cidadão e empresa)</li>
</ul>

<p>Uma notificação no NOTIVISA deve conter, no mínimo: identificação do produto (nome, número de lote, registro ANVISA), descrição detalhada da ocorrência, dados do paciente/usuário (anonimizados), data do evento e ações imediatas já tomadas. Após o envio, a empresa recebe um número de protocolo e pode acompanhar o andamento pelo sistema.</p>

<h2>Prazos de Notificação: o que a Lei Exige</h2>

<p>Os prazos são um dos pontos mais críticos da conformidade. A <strong>RDC 67/2009</strong> estabelece três categorias de urgência:</p>

<table>
  <thead>
    <tr>
      <th>Tipo de Ocorrência</th>
      <th>Prazo para Notificação Inicial</th>
      <th>Prazo para Relatório Final</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Morte ou grave ameaça à saúde pública</td>
      <td><strong>72 horas</strong></td>
      <td>30 dias após a notificação inicial</td>
    </tr>
    <tr>
      <td>Evento adverso grave (hospitalização, dano permanente)</td>
      <td><strong>10 dias úteis</strong></td>
      <td>30 dias após a notificação inicial</td>
    </tr>
    <tr>
      <td>Mau funcionamento sem dano imediato</td>
      <td><strong>30 dias corridos</strong></td>
      <td>Conforme investigação</td>
    </tr>
  </tbody>
</table>

<p>O prazo de 72 horas conta a partir do momento em que a empresa <em>toma conhecimento</em> do evento, não da data do evento em si. Por isso, é fundamental que o sistema de Reclamações e SAC da empresa esteja integrado ao processo de tecnovigilância, com triagem imediata de ocorrências críticas. Atrasos nas notificações são infrações sanitárias sujeitas a penalidades, independentemente de dolo.</p>

<figure>
<img src="/artigos/tecnovigilancia-brasil/image-1.webp" alt="Fluxograma do processo de notificação de eventos adversos de dispositivos médicos no sistema NOTIVISA da ANVISA com prazos regulatórios" loading="lazy" />
<figcaption>Fluxo completo de notificação de eventos adversos: da identificação do evento ao encerramento pela ANVISA, com prazos regulatórios</figcaption>
</figure>

<h2>Ações de Campo: Recalls e Correções sob a RDC 551/2021</h2>

<p>A <strong>RDC 551/2021</strong> substituiu a RDC 23/2012 e consolidou o marco regulatório para ações de campo de produtos de saúde no Brasil. Uma ação de campo é qualquer medida tomada pelo detentor de registro para corrigir ou remover um produto que apresenta risco à saúde ou que está em desacordo com a legislação sanitária.</p>

<h3>Tipos de Ação de Campo</h3>

<table>
  <thead>
    <tr>
      <th>Tipo</th>
      <th>Descrição</th>
      <th>Produto permanece no mercado?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Recall</td>
      <td>Recolhimento do produto já distribuído ou em uso</td>
      <td>Não (temporariamente)</td>
    </tr>
    <tr>
      <td>Correção de Campo</td>
      <td>Modificação, ajuste, reparo ou reetiquetagem in loco</td>
      <td>Sim, após correção</td>
    </tr>
    <tr>
      <td>Suspensão de Uso</td>
      <td>Instrução para interromper o uso até nova avaliação</td>
      <td>Suspenso</td>
    </tr>
    <tr>
      <td>Retirada do Mercado</td>
      <td>Remoção definitiva de produtos não vendidos</td>
      <td>Não</td>
    </tr>
    <tr>
      <td>Notificação a Clientes</td>
      <td>Comunicação de risco sem recolhimento físico</td>
      <td>Sim, com comunicado</td>
    </tr>
  </tbody>
</table>

<p>A empresa deve submeter à ANVISA um Plano de Ação de Campo com cronograma, lista de lotes afetados, estratégia de comunicação e mecanismo de rastreamento. A ANVISA avalia o plano e pode exigir ajustes. O detentor de registro é responsável por comunicar distribuidores, hospitais e usuários finais, além de documentar cada unidade recuperada ou corrigida.</p>

<h3>Classificação de Risco para Ações de Campo</h3>

<p>Seguindo as diretrizes do <strong>IMDRF</strong> (do qual o Brasil é membro fundador), as ações de campo são classificadas por nível de risco:</p>

<ul>
  <li><strong>Classe I</strong>: situação em que existe probabilidade razoável de que o uso ou exposição ao produto cause danos graves à saúde ou morte.</li>
  <li><strong>Classe II</strong>: situação em que o uso ou exposição pode causar danos temporários à saúde, mas sem probabilidade de serem graves ou irreversíveis.</li>
  <li><strong>Classe III</strong>: situação em que o uso ou exposição não deve causar danos à saúde.</li>
</ul>

<h2>Penalidades pelo Descumprimento</h2>

<p>O descumprimento das obrigações de tecnovigilância configura infração sanitária, sujeita às penalidades previstas na <strong>Lei 6.437/1977</strong> e no <strong>Decreto 8.077/2013</strong>. As sanções incluem:</p>

<ul>
  <li>Advertência por escrito</li>
  <li>Apreensão e inutilização de produtos</li>
  <li>Suspensão de venda, distribuição ou uso</li>
  <li>Cancelamento do registro do produto</li>
  <li>Proibição de fabricação ou importação</li>
  <li>Multas de R$ 2.000 a <strong>R$ 1.500.000</strong> por infração</li>
  <li>Interdição parcial ou total do estabelecimento</li>
</ul>

<p>Exemplos recentes ilustram a severidade da aplicação: em fevereiro de 2026, a ANVISA determinou a proibição de produtos de empresas como TMA Medicina, Alfalagos e Capilar Brasil por descumprimento de normas regulatórias, com alertas publicados no SISTEC e ampla divulgação pública. A reputação da empresa junto a compradores hospitalares e importadores internacionais também é afetada significativamente por registros de ações coercitivas.</p>

<figure>
<img src="/artigos/tecnovigilancia-brasil/image-2.webp" alt="Engenheiro clínico inspecionando equipamento médico em UTI hospitalar como parte da Rede Sentinela de tecnovigilância da ANVISA" loading="lazy" />
<figcaption>Engenheiro clínico da Rede Sentinela realizando inspeção de equipamento médico e registro de ocorrência via tablet em ambiente de UTI</figcaption>
</figure>

<h2>Boas Práticas para Fabricantes e Importadores</h2>

<p>Cumprir a legislação é o mínimo. As empresas com programas maduros de tecnovigilância vão além e implementam um sistema robusto de <em>Post-Market Surveillance</em> (PMS) integrado ao ciclo de vida do produto. As práticas a seguir são reconhecidas pela ANVISA e estão alinhadas com os padrões do IMDRF:</p>

<h3>1. Procedimento Operacional Padrão (POP) de Tecnovigilância</h3>

<p>Documente em POP o fluxo completo: como uma reclamação entra na empresa (SAC, e-mail, visita técnica), como é triada quanto à gravidade, quem decide sobre a necessidade de notificação, quem abre o NOTIVISA e quem assina o relatório final. O POP deve ser testado com simulações periódicas e atualizado a cada mudança regulatória.</p>

<h3>2. Treinamento Contínuo da Equipe</h3>

<p>Todos os funcionários que interagem com informações de campo — vendedores, assistência técnica, SAC, qualidade — devem receber treinamento específico sobre tecnovigilância. A identificação precoce de sinais de alerta depende da capacidade de reconhecer uma ocorrência relevante antes que ela escale.</p>

<h3>3. Rastreabilidade Lote a Lote</h3>

<p>Manter registros de distribuição por lote — quais hospitais, distribuidores e regiões receberam cada lote — é indispensável para uma ação de campo eficaz. Sem essa rastreabilidade, um recall de Classe I pode se tornar uma operação caótica, com risco de unidades afetadas continuarem em uso. A <a href="/artigos/iso-14971-gestao-risco">ISO 14971</a> e os requisitos de sistema de gestão de qualidade (ISO 13485) fornecem a estrutura de base.</p>

<h3>4. Monitoramento Proativo da Literatura e Bases de Dados</h3>

<p>Um programa de PMS inclui monitoramento sistemático de bancos de dados públicos de eventos adversos — como o <strong>MAUDE da FDA</strong> e o <strong>EUDAMED</strong> — para identificar sinais de segurança emergentes em produtos similares ao seu, mesmo antes de receber reclamações diretas. Essa prática é exigida formalmente pela regulamentação europeia e é uma boa prática reconhecida pela ANVISA.</p>

<h3>5. Revisão Periódica do Relatório de PMS</h3>

<p>A RDC 848/2024 exige que fabricantes de dispositivos de maior risco mantenham relatórios de avaliação clínica com revisão periódica, incorporando os dados de pós-mercado coletados. Esse relatório deve demonstrar que o balanço risco-benefício do produto permanece favorável à luz das evidências acumuladas.</p>

<!-- IMG_SLOT_3 -->

<h2>Tecnovigilância Global: Comparação com FDA e EU MDR</h2>

<p>O sistema brasileiro de tecnovigilância está em processo de crescente harmonização com os padrões internacionais, sobretudo por meio da participação do Brasil no <strong>IMDRF</strong> e pela adoção do <strong>MDSAP</strong> (Medical Device Single Audit Program). Veja como os três principais sistemas se comparam:</p>

<table>
  <thead>
    <tr>
      <th>Aspecto</th>
      <th>Brasil (ANVISA)</th>
      <th>EUA (FDA)</th>
      <th>União Europeia (EU MDR)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Norma principal</td>
      <td>RDC 67/2009 + RDC 848/2024</td>
      <td>21 CFR Part 803 (MDR)</td>
      <td>EU MDR 2017/745</td>
    </tr>
    <tr>
      <td>Sistema de notificação</td>
      <td>NOTIVISA</td>
      <td>FDA MedWatch / MAUDE</td>
      <td>EUDAMED</td>
    </tr>
    <tr>
      <td>Prazo para morte/evento grave</td>
      <td>72h / 10 dias</td>
      <td>30 dias (5 dias para MDR imediato)</td>
      <td>15 dias (2 dias para grave)</td>
    </tr>
    <tr>
      <td>Base de dados pública</td>
      <td>SISTEC (alertas)</td>
      <td>MAUDE (público)</td>
      <td>EUDAMED (em implantação)</td>
    </tr>
    <tr>
      <td>Recalls</td>
      <td>RDC 551/2021</td>
      <td>21 CFR Part 806</td>
      <td>Art. 83-89 EU MDR</td>
    </tr>
    <tr>
      <td>PMS periódico obrigatório</td>
      <td>Sim (RDC 848/2024)</td>
      <td>Sim (MDR, PMSR)</td>
      <td>Sim (PMSR/PSUR)</td>
    </tr>
  </tbody>
</table>

<p>A principal diferença está nos prazos: o sistema europeu é o mais exigente para eventos imediatos (2 dias para situações com risco de morte iminente), enquanto o brasileiro é mais ágil que o americano para as categorias mais graves (72h vs. 30 dias do FDA geral). Para empresas que exportam para múltiplos mercados, o alinhamento com os guias do IMDRF é a estratégia mais eficiente para atender simultaneamente às exigências de cada jurisdição.</p>

<figure>
<img src="/artigos/tecnovigilancia-brasil/image-3.webp" alt="Comparativo dos sistemas de tecnovigilância do Brasil NOTIVISA, EUA FDA MAUDE e União Europeia EU MDR EUDAMED" loading="lazy" />
<figcaption>Comparativo visual entre os sistemas de tecnovigilância do Brasil, Estados Unidos e União Europeia, com prazos e bases de dados</figcaption>
</figure>

<h2>Perguntas Frequentes sobre Tecnovigilância</h2>

<h3>Quem é obrigado a notificar eventos adversos à ANVISA?</h3>

<p>Todo fabricante, importador e detentor de registro de produto de saúde sujeito à vigilância sanitária é obrigado a notificar eventos adversos e queixas técnicas relevantes. Serviços de saúde integrantes da Rede Sentinela também têm obrigação formal de notificação. Profissionais de saúde e cidadãos podem notificar voluntariamente pelo NOTIVISA ou pelo e-NOTIVISA.</p>

<h3>O que acontece se meu produto causar um evento adverso e eu não notificar?</h3>

<p>O não cumprimento do dever de notificação configura infração sanitária autônoma, independentemente de investigação sobre o evento em si. As penalidades vão de advertência a multas de até R$ 1,5 milhão e cancelamento do registro do produto. Além disso, em caso de fiscalização ou investigação posterior, a ausência de registro de notificação agrava significativamente a situação da empresa.</p>

<h3>Queixas técnicas que não causaram dano precisam ser notificadas?</h3>

<p>Sim, desde que o desvio seja relevante. A RDC 67/2009 exige a notificação de queixas técnicas que, mesmo sem causar dano imediato, representem falha que poderia ter causado dano em outras circunstâncias ou que comprometam as especificações essenciais do produto. O prazo geral é de 30 dias. Pequenas reclamações estéticas ou de embalagem secundária, sem impacto funcional, geralmente não se enquadram nessa obrigatoriedade, mas devem ser registradas internamente.</p>

<h3>Como funciona o e-NOTIVISA e qual é o impacto para fabricantes?</h3>

<p>O e-NOTIVISA é uma plataforma experimental da ANVISA que permite que cidadãos registrem ocorrências com produtos de saúde e se comuniquem diretamente com as empresas fabricantes ou importadoras. Para fabricantes, isso significa que podem receber notificações de usuários finais diretamente pelo sistema, aumentando o volume e a diversidade de informações de campo disponíveis para análise. É importante monitorar essas comunicações e integrá-las ao processo de tecnovigilância da empresa.</p>

<h3>Um produto importado está sujeito às mesmas obrigações de tecnovigilância que um produto nacional?</h3>

<p>Sim. O importador detentor de registro no Brasil assume integralmente as obrigações de tecnovigilância para o produto que distribui no mercado nacional. Isso inclui notificar eventos adversos ocorridos no Brasil, implementar ações de campo quando necessário e manter o sistema de PMS ativo. Mesmo que o fabricante estrangeiro já tenha notificado o evento em seu país de origem, o importador brasileiro deve notificar à ANVISA de forma independente, dentro dos prazos brasileiros.</p>

<h2>Próximos Passos para Estruturar seu Programa de Tecnovigilância</h2>

<p>Para empresas que ainda não possuem um programa estruturado, recomendamos a seguinte sequência de implementação:</p>

<ol>
  <li><strong>Mapeie seu portfólio</strong>: identifique todos os produtos com registro ANVISA e classifique-os por classe de risco (I, II, III).</li>
  <li><strong>Designe um responsável</strong>: nomeie formalmente um Responsável Técnico de Tecnovigilância com acesso ao NOTIVISA e conhecimento da RDC 67/2009.</li>
  <li><strong>Elabore os POPs</strong>: documente os fluxos de recebimento, triagem, notificação e encerramento de ocorrências.</li>
  <li><strong>Cadastre-se no NOTIVISA</strong>: faça o cadastro da empresa no sistema e familiarize-se com as funcionalidades antes de precisar usar em caráter de urgência.</li>
  <li><strong>Implante o sistema de rastreabilidade</strong>: garanta que cada lote distribuído possa ser localizado em até 24 horas, com contatos de todos os compradores diretos.</li>
  <li><strong>Realize uma simulação anual</strong>: execute um exercício de recall simulado para testar o tempo de resposta e identificar falhas no processo antes que um evento real ocorra.</li>
</ol>

<p>A tecnovigilância não é apenas uma obrigação regulatória — é um sistema de inteligência que, quando bem implementado, fornece dados valiosos para a melhoria contínua dos produtos e para a demonstração proativa de segurança junto a compradores hospitalares, operadoras de planos de saúde e autoridades regulatórias. Empresas com programas maduros de pós-mercado são percebidas como parceiras mais confiáveis e têm vantagem competitiva em processos de licitação pública e credenciamento hospitalar.</p>

<p>Para aprofundar os aspectos de gestão de risco que fundamentam a tecnovigilância, consulte nosso artigo sobre a <a href="/artigos/iso-14971-gestao-risco">ISO 14971 e gestão de risco em dispositivos médicos</a>. Para entender o contexto regulatório mais amplo, acesse o <a href="/artigos/anvisa-dispositivos-medicos-guia-2026">guia completo sobre dispositivos médicos na ANVISA em 2026</a>.</p>

<p>Fontes e referências externas: <a href="https://www.gov.br/anvisa/pt-br/sistemas/notivisa" target="_blank" rel="noopener noreferrer">NOTIVISA — Portal ANVISA</a>, <a href="https://www.gov.br/anvisa/pt-br/assuntos/fiscalizacao-e-monitoramento/monitoramento/tecnovigilancia" target="_blank" rel="noopener noreferrer">Tecnovigilância ANVISA</a>, <a href="https://www.imdrf.org" target="_blank" rel="noopener noreferrer">IMDRF — International Medical Device Regulators Forum</a>, <a href="https://www.fda.gov/medical-devices/postmarket-requirements-devices/mandatory-reporting-requirements-manufacturers-importers-and-device-user-facilities" target="_blank" rel="noopener noreferrer">FDA MDR Requirements</a>, <a href="https://ec.europa.eu/health/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en" target="_blank" rel="noopener noreferrer">EU MDR Guidance — European Commission</a>.</p>
`,
};
