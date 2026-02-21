import { Artigo } from './types';

export const artigo: Artigo = {
  titulo: 'Novocure Recebe Aprovação da FDA para Tratar Câncer de Pâncreas com Campos Elétricos [2026]',
  resumo:
    'A FDA aprovou a terapia TTFields da Novocure para câncer de pâncreas localmente avançado, abrindo acesso a cerca de 15.000 pacientes norte-americanos por ano.',
  categoria: 'Mercado',
  categoriaVariant: 'teal',
  data: '2026-02-19',
  leitura: '8 min',
  conteudo: `
<p class="text-lg leading-relaxed mb-6"><strong>A <a href="https://www.novocure.com">Novocure</a> recebeu aprovação da <a href="https://www.fda.gov/medical-devices">FDA</a> para tratar câncer de pâncreas localmente avançado com campos elétricos alternantes</strong> — a chamada terapia por Campos Elétricos Tumorais (TTFields, do inglês <em>Tumor Treating Fields</em>) —, marcando uma nova indicação oncológica da empresa e abrindo acesso a cerca de <strong>15.000 pacientes</strong> norte-americanos diagnosticados anualmente com essa forma da doença.</p>

<p class="mb-6">Este artigo faz parte do <a href="/artigos/guia-engenharia-biomedica">Guia Definitivo de Engenharia Biomédica</a>.</p>

<h2>O Que É a Terapia por Campos Elétricos Tumorais (TTFields)?</h2>

<p>A terapia TTFields é uma modalidade de tratamento oncológico não invasivo que utiliza campos elétricos alternantes de baixa intensidade e frequência intermediária para interferir na divisão celular de células cancerígenas. O princípio físico baseia-se na perturbação das forças eletrostáticas que atuam sobre proteínas polares durante a mitose — especialmente as tubulinas que formam o fuso mitótico.</p>

<p>Durante a divisão celular, as células cancerígenas criam estruturas altamente polarizadas. Quando expostas a campos elétricos alternantes na frequência correta, essas forças desorientam as moléculas polares e impedem a formação adequada do fuso, levando à morte celular por mitose aberrante ou apoptose.</p>

<p>Em termos quantitativos, os campos são aplicados com intensidade entre <strong>1 e 3 V/cm</strong> no tecido tumoral. A frequência varia conforme a indicação clínica: para glioblastoma utiliza-se <strong>200 kHz</strong>; para mesotelioma, <strong>150 kHz</strong>; para o câncer de pâncreas, a mesma faixa de <strong>150 kHz</strong>, determinada experimentalmente como a que maximiza o efeito antiproliferativo nas células pancreáticas.</p>

<h2>Como Funciona o Dispositivo Novocure</h2>

<p>O dispositivo aprovado para câncer de pâncreas é composto por dois elementos principais:</p>

<ul>
  <li><strong>Arrays transdutores:</strong> eletrodos adesivos descartáveis posicionados na pele do tronco do paciente — no abdômen e nas costas — para criar campos elétricos que atravessem o tumor pancreático. Os arrays são trocados a cada 3 a 4 dias.</li>
  <li><strong>Unidade geradora portátil:</strong> dispositivo que gera os campos elétricos e pode ser carregado pelo paciente, permitindo mobilidade durante o tratamento.</li>
</ul>

<p>A Novocure recomenda uso de pelo menos <strong>18 horas por dia</strong> para maximizar a eficácia terapêutica. Estudos clínicos demonstraram correlação direta entre o tempo de uso diário e os desfechos de sobrevida: pacientes com adesão superior a 75% do dia (≥18 horas) apresentaram melhores resultados do que aqueles com uso intermitente.</p>

<p>O pâncreas é anatomicamente profundo, circundado por múltiplos órgãos do trato gastrointestinal e grandes vasos. Isso exige planejamento cuidadoso do posicionamento dos arrays. A empresa desenvolveu o software <strong>NovoTAL</strong> (<em>Novocure Treatment Planning</em>), que utiliza imagens de ressonância magnética do paciente para simular a distribuição dos campos elétricos e orientar o posicionamento dos eletrodos de forma a maximizar a intensidade no alvo tumoral.</p>

<h2>O Ensaio Clínico PANOVA-3</h2>

<p>A aprovação da FDA foi fundamentada nos resultados do ensaio clínico de fase III <strong>PANOVA-3</strong>, que avaliou a combinação de TTFields com quimioterapia padrão — gencitabina e nab-paclitaxel — em comparação com quimioterapia isolada em pacientes com câncer de pâncreas localmente avançado (LAPC, do inglês <em>Locally Advanced Pancreatic Cancer</em>).</p>

<p>O estudo recrutou <strong>556 pacientes</strong> em múltiplos centros internacionais, tendo a sobrevida global (OS) como desfecho primário. Os resultados demonstraram benefício estatisticamente significativo para o grupo que recebeu TTFields em combinação com quimioterapia — um avanço relevante em uma indicação com opções terapêuticas historicamente limitadas.</p>

<p>O perfil de segurança revelou que os efeitos adversos mais comuns foram <strong>dermatológicos locais</strong>: irritação cutânea e dermatite de contato no sítio de aplicação dos arrays. Esses efeitos foram gerenciáveis com cuidados tópicos e não exigiram descontinuação do tratamento na maioria dos pacientes. Não foram observados efeitos sistêmicos significativos atribuíveis diretamente aos campos elétricos.</p>

<h3>Por Que o Câncer de Pâncreas Localmente Avançado é um Alvo Crítico?</h3>

<p>O câncer de pâncreas é uma das neoplasias com pior prognóstico. Nos Estados Unidos, a sobrevida global em 5 anos é de aproximadamente <strong>12%</strong>, variando significativamente por estágio:</p>

<table>
  <thead>
    <tr>
      <th>Estágio</th>
      <th>Definição</th>
      <th>Sobrevida em 5 anos (EUA)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Localizado</td>
      <td>Tumor confinado ao pâncreas, ressecável</td>
      <td>~44%</td>
    </tr>
    <tr>
      <td>Localmente avançado</td>
      <td>Invasão vascular local, não ressecável</td>
      <td>~14%</td>
    </tr>
    <tr>
      <td>Metastático</td>
      <td>Disseminação a distância</td>
      <td>~3%</td>
    </tr>
  </tbody>
</table>

<p>Para o grupo com doença localmente avançada — alvo desta aprovação —, o padrão de cuidado era exclusivamente quimioterápico, sem aprovação de agentes biológicos ou imunológicos específicos para essa indicação. O TTFields representa, portanto, a <strong>primeira nova modalidade terapêutica aprovada para LAPC em décadas</strong>.</p>

<h2>Trajetória Regulatória da Novocure na FDA</h2>

<p>A aprovação para câncer de pâncreas amplia o histórico regulatório da Novocure, que construiu suas indicações progressivamente:</p>

<ol>
  <li><strong>2011 —</strong> Glioblastoma recorrente (dispositivo Optune), via PMA</li>
  <li><strong>2015 —</strong> Glioblastoma de novo, em combinação com temozolomida</li>
  <li><strong>2019 —</strong> Mesotelioma pleural maligno (dispositivo Optune Lua), em combinação com pemetrexed e platina</li>
  <li><strong>2026 —</strong> Câncer de pâncreas localmente avançado, em combinação com gencitabina e nab-paclitaxel</li>
</ol>

<p>Cada aprovação seguiu a via de <strong>Autorização de Marketing Pré-Mercado (PMA)</strong> da FDA — a via mais rigorosa para dispositivos médicos de classe III, exigindo evidências de segurança e eficácia provenientes de ensaios clínicos controlados e randomizados. Esse histórico de múltiplas aprovações via PMA fortalece a credibilidade da plataforma tecnológica frente a reguladores, investidores e a comunidade médica.</p>

<p>A empresa mantém um pipeline ativo em outros tumores sólidos, incluindo câncer de pulmão de não-pequenas células (ensaio LUNAR), câncer de ovário e câncer colorretal — todas indicações com ensaios clínicos em andamento ao redor do mundo.</p>

<h2>Impacto no Mercado de MedTech</h2>

<p>A aprovação abre um mercado potencial considerável. Com aproximadamente <strong>15.000 novos casos</strong> de LAPC nos EUA por ano, e um custo de tratamento que, para indicações anteriores da Novocure, situa-se entre <strong>US$ 21.000 e US$ 25.000 por mês</strong>, o impacto financeiro dependerá das negociações com planos de saúde privados e da cobertura pelo Medicare — que cobre a população mais acometida por câncer de pâncreas (faixa etária acima de 65 anos).</p>

<p>Para o setor mais amplo de MedTech, a aprovação reforça a <strong>convergência entre física, engenharia e oncologia</strong>. A abordagem de campos eletromagnéticos como modalidade terapêutica coloca a Novocure em uma categoria sem concorrentes diretos. Cada nova indicação aprovada reduz o risco percebido de desenvolvimento para as próximas — padrão que foi observado com os inibidores de checkpoint imunológico, que após as primeiras aprovações expandiram-se para dezenas de indicações.</p>
<figure>
<img src="/artigos/novocure-recebe-aprovacao-da-fda-para-tratar-cancer-de-pancr/image-2.webp" alt="Ilustração técnica: Impacto no Mercado de MedTech" width="1024" height="576" loading="lazy" decoding="async">
<figcaption>Ilustração: Impacto no Mercado de MedTech</figcaption>
</figure>


<h3>Desafios Comerciais e de Adesão</h3>

<p>O principal obstáculo operacional da terapia TTFields é a <strong>adesão</strong>. O dispositivo exige uso contínuo de 18+ horas diárias, o que impacta diretamente a qualidade de vida. Para câncer de pâncreas, os pacientes frequentemente apresentam comprometimento físico significativo — caquexia, dor abdominal, fadiga —, o que pode dificultar a manutenção do dispositivo ao longo do tempo.</p>

<p>O custo elevado levanta questões de equidade no acesso. Em sistemas de saúde com cobertura universal — como os da Europa Ocidental —, a incorporação de tecnologias de alto custo depende de avaliações de custo-efetividade (HTA, <em>Health Technology Assessment</em>). Em países de renda média, como o Brasil, o acesso tende a ficar restrito ao setor privado de alto padrão.</p>

<h2>Perspectivas para o Brasil</h2>

<p>No Brasil, o câncer de pâncreas é responsável por aproximadamente <strong>14.000 novos casos por ano</strong> (estimativa INCA 2023), com mortalidade que reflete o padrão internacional de prognóstico reservado. A terapia TTFields para glioblastoma já é disponível no país em caráter privado, porém com acesso muito restrito em razão do custo.</p>

<p>Para que a indicação de câncer de pâncreas seja disponibilizada no Brasil, o caminho regulatório passa pela <strong><a href="https://www.gov.br/anvisa">ANVISA</a></strong>, que avalia dispositivos médicos terapêuticos sob o marco da RDC 751/2022 e legislação correlata. O registro ou extensão de indicação de um dispositivo já aprovado em país de referência (EUA, UE, Austrália, Canadá ou Japão) pode ser submetido via processo simplificado, com aproveitamento do dossiê técnico internacional — o que tipicamente reduz o prazo de aprovação para <strong>1 a 3 anos</strong> após a decisão do país de referência.</p>
<figure>
<img src="/artigos/novocure-recebe-aprovacao-da-fda-para-tratar-cancer-de-pancr/image-1.webp" alt="Ilustração técnica: Perspectivas para o Brasil" width="1024" height="576" loading="lazy" decoding="async">
<figcaption>Ilustração: Perspectivas para o Brasil</figcaption>
</figure>


<p>Para engenheiros biomédicos brasileiros, tecnologias como TTFields representam uma área de atuação crescente, envolvendo:</p>

<ul>
  <li>Gerenciamento e manutenção de equipamentos de eletroterapia oncológica em hospitais de alta complexidade</li>
  <li>Treinamento de equipes médicas e de enfermagem no uso correto do dispositivo e na troca dos arrays</li>
  <li>Planejamento de tratamento com software especializado (NovoTAL), integrando imagens de RM</li>
  <li>Vigilância pós-comercialização e registro de eventos adversos junto à ANVISA</li>
  <li>Participação em ensaios clínicos nacionais que investiguem TTFields em populações brasileiras</li>
</ul>

<p>Para mais informações sobre o processo regulatório de dispositivos médicos no Brasil, consulte nosso artigo sobre <a href="/artigos/anvisa-dispositivos-medicos-regulamentacao">regulamentação ANVISA para dispositivos médicos</a>. Para o contexto do mercado de inovação em saúde, veja também <a href="/artigos/healthtechs-brasil-ecossistema">healthtechs brasileiras e o ecossistema de inovação</a>.</p>

<h2>A Física dos TTFields: Uma Perspectiva de Engenharia</h2>

<p>Para engenheiros biomédicos, o mecanismo de ação dos TTFields articula princípios de eletromagnetismo aplicado com biofísica celular. As células em mitose apresentam <strong>heterogeneidade dielétrica</strong> acentuada: diferentes compartimentos celulares possuem constantes dielétricas e condutividades distintas. O fuso mitótico, formado por microtúbulos com elevado momento de dipolo elétrico, é particularmente suscetível a campos AC na faixa de 100–500 kHz.</p>

<p>A força sobre um dipolo elétrico em campo não uniforme é descrita por:</p>

<p><strong>F = (p · ∇)E</strong></p>

<p>Onde <em>p</em> é o momento de dipolo e <em>E</em> o campo elétrico aplicado. Em campos alternantes, a força resultante — chamada de força dielétroforética — perturba a polimerização ordenada dos microtúbulos, comprometendo a formação do fuso e levando a mitose aberrante.</p>

<p>Em paralelo, campos elétricos na faixa de frequência TTFields induzem forças de compressão sobre células em citocinese — a fase final em que a célula-mãe se separa em duas células-filhas —, fenômeno denominado "força de separação dielétrica", que interfere no estrangulamento do corpo mediano celular.</p>

<p>Do ponto de vista de engenharia de sistemas, o principal desafio de projeto é garantir que os campos atinjam o tumor com <strong>intensidade suficiente</strong> após atravessar camadas de pele, tecido subcutâneo, músculo e órgãos adjacentes — cada um com parâmetros dielétricos distintos. O pâncreas, localizado no retroperitônio a uma profundidade de 8 a 15 cm da superfície abdominal, exige otimização rigorosa do posicionamento dos arrays para alcançar a intensidade terapêutica mínima no alvo.</p>

<h2>Perguntas Frequentes</h2>

<h3>O que diferencia a terapia TTFields da radioterapia e quimioterapia?</h3>
<p>A terapia TTFields age por meio de campos elétricos físicos que perturbam a divisão celular, sem ionizar tecidos (como a radioterapia) e sem os efeitos tóxicos sistêmicos da quimioterapia. A ação é predominantemente local — restrita à região onde os arrays transdutores são posicionados —, e os efeitos adversos são principalmente dermatológicos locais, sem toxicidade hematológica, hepática ou renal própria.</p>

<h3>A terapia TTFields para câncer de pâncreas já está disponível no Brasil?</h3>
<p>Não. A aprovação de fevereiro de 2026 foi concedida pela FDA norte-americana. Para uso no Brasil, seria necessária submissão e aprovação pela ANVISA, o que tipicamente leva de 1 a 3 anos após a aprovação em país de referência, e ainda depende da decisão comercial da Novocure de registrar o produto no mercado brasileiro.</p>

<h3>Qual é o tempo mínimo de uso diário do dispositivo?</h3>
<p>A recomendação clínica é de pelo menos <strong>18 horas por dia</strong>. Estudos de correlação dose-resposta mostram que pacientes com adesão superior a 75% do dia apresentam melhores desfechos de sobrevida. O dispositivo pode ser retirado por até 6 horas diárias para higiene, reposicionamento dos arrays e atividades cotidianas.</p>

<h3>O TTFields pode ser combinado com outros tratamentos?</h3>
<p>Sim. Em todas as indicações aprovadas, o TTFields é utilizado em combinação com quimioterapia. Para câncer de pâncreas, a combinação aprovada é com gencitabina e nab-paclitaxel — o esquema quimioterápico padrão para LAPC. A sinergia entre o mecanismo físico dos TTFields e os agentes citotóxicos é parte central do benefício clínico demonstrado no PANOVA-3.</p>

<h3>Quais outros tipos de câncer estão sendo investigados com TTFields?</h3>
<p>A Novocure conduz ensaios clínicos ativos em câncer de pulmão de não-pequenas células (ensaio LUNAR, que já demonstrou benefício em subgrupos específicos), câncer de ovário, câncer colorretal metastático e hepatocarcinoma. A plataforma tecnológica tem potencial de expansão para múltiplas neoplasias sólidas, desde que a frequência ótima e o posicionamento dos arrays sejam otimizados para cada sítio anatômico.</p>

<p>Volte ao <a href="/artigos/guia-engenharia-biomedica">Guia Definitivo de Engenharia Biomédica</a> para explorar todas as seções.</p>

<p><em>Publicado por <a href="https://engenhariabiomedica.com">engenhariabiomedica.com</a></em></p>
`,
};
