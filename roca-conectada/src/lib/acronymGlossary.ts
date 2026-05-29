export interface GlossaryEntry {
  full: string
  description: string
}

export const acronymGlossary: Record<string, GlossaryEntry> = {
  // ── IA / Computação ───────────────────────────────────────────────────────
  LLM:    { full: 'Large Language Model',                       description: 'Modelo de linguagem de grande escala treinado em vastos conjuntos de texto para gerar e compreender linguagem natural.' },
  IA:     { full: 'Inteligência Artificial',                    description: 'Campo da computação dedicado a sistemas capazes de realizar tarefas que normalmente exigem inteligência humana.' },
  AI:     { full: 'Artificial Intelligence',                    description: 'Campo da computação dedicado a sistemas capazes de realizar tarefas que normalmente exigem inteligência humana.' },
  RAG:    { full: 'Retrieval-Augmented Generation',             description: 'Técnica que combina recuperação de documentos relevantes com geração de texto, reduzindo alucinações do LLM.' },
  LoRA:   { full: 'Low-Rank Adaptation',                       description: 'Técnica de ajuste fino eficiente que reduz os parâmetros treináveis de um LLM em até 10.000 vezes sem perda relevante de qualidade.' },
  PEFT:   { full: 'Parameter-Efficient Fine-Tuning',            description: 'Família de técnicas que permitem ajustar modelos de linguagem grandes com poucos parâmetros treináveis, economizando GPU e tempo.' },
  GPU:    { full: 'Graphics Processing Unit',                   description: 'Processador especializado em cálculos paralelos, fundamental para treinamento e inferência de modelos de IA.' },
  API:    { full: 'Application Programming Interface',          description: 'Interface padronizada que permite que sistemas de software se comuniquem entre si.' },
  REST:   { full: 'Representational State Transfer',            description: 'Estilo arquitetural para APIs web que utiliza HTTP com endpoints nomeados por recursos.' },
  OAuth:  { full: 'Open Authorization',                        description: 'Protocolo padrão de autorização que permite acesso seguro entre sistemas sem compartilhar senhas.' },
  JSON:   { full: 'JavaScript Object Notation',                 description: 'Formato leve de intercâmbio de dados legível por humanos e processável por máquinas.' },
  CSV:    { full: 'Comma-Separated Values',                     description: 'Formato de arquivo de texto simples para dados tabulares, separados por vírgulas.' },
  SaaS:   { full: 'Software as a Service',                      description: 'Modelo onde o fornecedor hospeda a aplicação e a disponibiliza via internet mediante assinatura.' },
  MVP:    { full: 'Minimum Viable Product',                     description: 'Versão mínima de um produto com funcionalidades suficientes para validar hipóteses com usuários reais.' },
  NF4:    { full: '4-bit NormalFloat Quantization',             description: 'Técnica de quantização que comprime modelos de 16/32 bits para 4 bits, reduzindo uso de memória em ~75% com perda mínima de qualidade.' },
  GGUF:   { full: 'GGML Unified Format',                        description: 'Formato de arquivo para armazenar modelos LLM quantizados, otimizado para inferência local eficiente.' },
  RTX:    { full: 'NVIDIA RTX',                                 description: 'Família de GPUs da NVIDIA com capacidades avançadas de processamento para IA, ray tracing e computação científica.' },
  A100:   { full: 'NVIDIA A100 Tensor Core GPU',                description: 'GPU da NVIDIA projetada para data centers e computação de alto desempenho em treinamento de modelos de IA.' },
  AWS:    { full: 'Amazon Web Services',                        description: 'Maior plataforma de computação em nuvem do mundo, da Amazon.' },
  GCP:    { full: 'Google Cloud Platform',                      description: 'Plataforma de computação em nuvem do Google.' },
  IoT:    { full: 'Internet of Things',                         description: 'Rede de dispositivos físicos conectados à internet que coletam e trocam dados automaticamente.' },
  URL:    { full: 'Uniform Resource Locator',                   description: 'Endereço usado para localizar recursos na internet.' },
  DOI:    { full: 'Digital Object Identifier',                  description: 'Identificador único e permanente para documentos digitais, usado para citar publicações científicas.' },

  // ── Programas e Políticas Agrícolas Brasileiras ───────────────────────────
  PNAE:    { full: 'Programa Nacional de Alimentação Escolar',        description: 'Programa federal que garante alimentação escolar e exige que 30% dos recursos sejam destinados à compra da agricultura familiar.' },
  PAA:     { full: 'Programa de Aquisição de Alimentos',              description: 'Programa federal que compra alimentos da agricultura familiar para doação ou formação de estoques públicos reguladores.' },
  ATER:    { full: 'Assistência Técnica e Extensão Rural',            description: 'Serviço de orientação técnica e capacitação prestado a agricultores. A razão atual é de 1 técnico para 500 famílias no Brasil.' },
  PRONAF:  { full: 'Programa Nacional de Fortalecimento da Agricultura Familiar', description: 'Principal linha de crédito rural do governo federal voltada exclusivamente para agricultores familiares.' },
  PLANAPO: { full: 'Plano Nacional de Agroecologia e Produção Orgânica', description: 'Plano governamental que coordena políticas de transição agroecológica e produção orgânica na agricultura familiar.' },
  PLANSAN: { full: 'Plano Nacional de Segurança Alimentar e Nutricional', description: 'Plano que orienta as políticas públicas de segurança alimentar e combate à fome no Brasil.' },
  ENECI:   { full: 'Estratégia Nacional de Educação do Campo e Inclusão', description: 'Estratégia federal de educação para populações rurais, com foco em inclusão digital e acesso ao conhecimento.' },
  PBIA:    { full: 'Política Brasileira de Inteligência Artificial',  description: 'Estratégia nacional do Brasil para desenvolvimento e regulação da IA, publicada pelo MCTI em 2021.' },
  NIB:     { full: 'Núcleo de Inovação em Bioinsumos',                description: 'Programa federal de fomento à inovação em bioinsumos para a agricultura, ligado ao MAPA.' },
  PIX:     { full: 'Pagamento Instantâneo Brasileiro',                description: 'Sistema de pagamentos instantâneos do Banco Central do Brasil, disponível 24h/7 dias, com liquidação em segundos.' },

  // ── Órgãos e Empresas Governamentais ─────────────────────────────────────
  CONAB:   { full: 'Companhia Nacional de Abastecimento',             description: 'Empresa pública federal que gerencia estoques reguladores e operacionaliza o PAA e o PNAE.' },
  EMBRAPA: { full: 'Empresa Brasileira de Pesquisa Agropecuária',     description: 'Empresa pública de pesquisa agropecuária vinculada ao MAPA, maior centro de pesquisa tropical do mundo.' },
  EMATER:  { full: 'Empresa de Assistência Técnica e Extensão Rural', description: 'Empresa estadual responsável pela prestação de serviços de ATER em cada estado brasileiro.' },
  ANATER:  { full: 'Agência Nacional de Assistência Técnica e Extensão Rural', description: 'Agência federal criada em 2013 para coordenar e financiar serviços de ATER no Brasil.' },
  CONEP:   { full: 'Comissão Nacional de Ética em Pesquisa',          description: 'Órgão regulador que aprova e monitora protocolos de pesquisa envolvendo seres humanos no Brasil.' },
  MAPA:    { full: 'Ministério da Agricultura, Pecuária e Abastecimento', description: 'Ministério federal responsável pela política agrícola, defesa agropecuária e abastecimento alimentar.' },
  MDA:     { full: 'Ministério do Desenvolvimento Agrário e Agricultura Familiar', description: 'Ministério federal responsável pelas políticas de agricultura familiar e reforma agrária.' },
  MCTI:    { full: 'Ministério da Ciência, Tecnologia e Inovação',    description: 'Ministério federal responsável pela política nacional de ciência, tecnologia e inovação.' },
  INMET:   { full: 'Instituto Nacional de Meteorologia',              description: 'Órgão federal responsável pelo monitoramento meteorológico e previsão do tempo no Brasil.' },
  SAGI:    { full: 'Secretaria de Avaliação e Gestão da Informação',  description: 'Secretaria do Ministério do Desenvolvimento Social responsável por monitoramento e avaliação de políticas sociais.' },
  MDS:     { full: 'Ministério do Desenvolvimento Social',            description: 'Ministério federal responsável pelas políticas de assistência social e segurança alimentar.' },
  MEC:     { full: 'Ministério da Educação',                         description: 'Ministério federal responsável pela política nacional de educação em todos os níveis.' },
  ANPD:    { full: 'Autoridade Nacional de Proteção de Dados',        description: 'Órgão federal responsável por fiscalizar e regulamentar o cumprimento da LGPD no Brasil.' },

  // ── Organizações da Sociedade Civil ──────────────────────────────────────
  FETRAF:  { full: 'Federação dos Trabalhadores na Agricultura Familiar', description: 'Principal organização sindical que representa trabalhadores e agricultores familiares no Brasil.' },
  UNICAFES:{ full: 'União Nacional das Cooperativas da Agricultura Familiar e Economia Solidária', description: 'Organização que representa cooperativas e empreendimentos da agricultura familiar e economia solidária.' },
  CONAQ:   { full: 'Coordenação Nacional de Articulação das Comunidades Negras Rurais Quilombolas', description: 'Organização nacional que representa e articula comunidades quilombolas em todo o Brasil.' },

  // ── Instituições de Ensino e Pesquisa ────────────────────────────────────
  UFSC:    { full: 'Universidade Federal de Santa Catarina',          description: 'Universidade pública federal sediada em Florianópolis, SC, instituição executora do projeto Roça Conectada.' },
  UFPI:    { full: 'Universidade Federal do Piauí',                   description: 'Universidade pública federal sediada em Teresina, PI.' },
  FAPEU:   { full: 'Fundação de Amparo à Pesquisa e Extensão Universitária', description: 'Fundação de apoio credenciada pelo MEC/MCTI vinculada à UFSC, apta a ser convenente em editais FINEP.' },
  FEESC:   { full: 'Fundação de Ensino e Engenharia de Santa Catarina', description: 'Fundação de apoio credenciada vinculada à UFSC, alternativa à FAPEU como proponente do projeto.' },
  IBGE:    { full: 'Instituto Brasileiro de Geografia e Estatística',  description: 'Instituto federal responsável pelo censo demográfico e pela produção de estatísticas oficiais do Brasil.' },
  IPEA:    { full: 'Instituto de Pesquisa Econômica Aplicada',         description: 'Fundação federal de pesquisa que produz análises econômicas e sociais para subsidiar políticas públicas.' },
  CNPq:    { full: 'Conselho Nacional de Desenvolvimento Científico e Tecnológico', description: 'Agência federal de fomento à pesquisa científica e à formação de recursos humanos em ciência e tecnologia.' },
  LACAF:   { full: 'Laboratório de Computação Aplicada à Agricultura Familiar', description: 'Laboratório da UFSC responsável pela pesquisa e desenvolvimento técnico-científico do projeto SABIA.' },

  // ── Financiamento ─────────────────────────────────────────────────────────
  FINEP:   { full: 'Financiadora de Estudos e Projetos',              description: 'Empresa pública federal de fomento à inovação, vinculada ao MCTI, financiadora deste projeto.' },
  FNDCT:   { full: 'Fundo Nacional de Desenvolvimento Científico e Tecnológico', description: 'Principal instrumento de financiamento federal da política de CT&I, gerido pela FINEP.' },
  ICT:     { full: 'Instituição Científica, Tecnológica e de Inovação', description: 'Denominação legal para universidades e institutos de pesquisa que executam projetos de inovação financiados com recursos públicos.' },
  DTI:     { full: 'Desenvolvimento Tecnológico e Industrial',         description: 'Modalidade de bolsa do CNPq para profissionais que desenvolvem atividades de pesquisa aplicada em projetos de inovação.' },

  // ── Legal ──────────────────────────────────────────────────────────────
  LGPD:    { full: 'Lei Geral de Proteção de Dados',                  description: 'Lei n. 13.709/2018 que regula o tratamento de dados pessoais no Brasil, equivalente à GDPR europeia.' },
  CNPJ:    { full: 'Cadastro Nacional da Pessoa Jurídica',            description: 'Número de identificação de empresas no Brasil, emitido pela Receita Federal.' },
  CPF:     { full: 'Cadastro de Pessoas Físicas',                     description: 'Número de identificação fiscal de pessoas físicas no Brasil, emitido pela Receita Federal.' },
  MoU:     { full: 'Memorandum of Understanding',                     description: 'Acordo de intenções formalmente documentado entre instituições, sem força de contrato.' },
  DAA:     { full: 'Declaração de Aptidão ao PRONAF',                 description: 'Documento obrigatório que certifica o agricultor como beneficiário do PRONAF, necessário para acessar PAA, PNAE e crédito rural.' },
  IN:      { full: 'Instrução Normativa',                             description: 'Ato normativo infralegal emitido por ministérios e agências reguladoras para disciplinar procedimentos específicos.' },
  CLOUD:   { full: 'Clarifying Lawful Overseas Use of Data Act',      description: 'Lei americana de 2018 que autoriza o governo dos EUA a acessar dados armazenados por empresas americanas em qualquer país do mundo.' },
  PJ:      { full: 'Pessoa Jurídica',                                  description: 'Entidade legal com personalidade jurídica própria, como empresas, associações e fundações.' },
  CC:      { full: 'Creative Commons',                                description: 'Sistema de licenças padronizadas que permitem compartilhamento de obras com condições definidas pelo autor.' },

  // ── Pesquisa Científica ───────────────────────────────────────────────────
  RCT:     { full: 'Randomized Controlled Trial',                     description: 'Ensaio clínico/experimental randomizado controlado, padrão-ouro para avaliar causalidade em pesquisa científica.' },
  PSM:     { full: 'Propensity Score Matching',                       description: 'Método estatístico que cria grupos comparáveis em estudos observacionais, controlando variáveis de confusão.' },
  IQR:     { full: 'Interquartile Range',                             description: 'Intervalo interquartil, medida de dispersão estatística que representa a faixa entre o 1º e o 3º quartil.' },
  PAP:     { full: 'Pre-Analysis Plan',                               description: 'Protocolo de pesquisa pré-registrado que define hipóteses e métodos antes da coleta de dados, prevenindo manipulação de resultados.' },
  PMC:     { full: 'PubMed Central',                                  description: 'Repositório digital gratuito de artigos científicos biomédicos, administrado pelo NIH dos Estados Unidos.' },
  ISRCTN:  { full: 'International Standard Randomised Controlled Trial Number', description: 'Registro internacional de ensaios clínicos randomizados controlados, usado para transparência e rastreabilidade científica.' },

  // ── Conferências e Periódicos ─────────────────────────────────────────────
  ICLR:    { full: 'International Conference on Learning Representations', description: 'Principal conferência internacional em aprendizado de representações e deep learning.' },
  NAACL:   { full: 'North American Chapter of the Association for Computational Linguistics', description: 'Conferência científica de referência em linguística computacional e processamento de linguagem natural.' },
  NeurIPS: { full: 'Conference on Neural Information Processing Systems', description: 'Uma das principais conferências mundiais em aprendizado de máquina e inteligência artificial.' },
  WACV:    { full: 'Winter Conference on Applications of Computer Vision', description: 'Conferência da IEEE sobre aplicações práticas de visão computacional.' },
  RESR:    { full: 'Revista de Economia e Sociologia Rural',           description: 'Periódico científico brasileiro de referência em economia rural, agricultura e desenvolvimento agrário.' },

  // ── Internacional ─────────────────────────────────────────────────────────
  FAO:     { full: 'Food and Agriculture Organization',               description: 'Agência da ONU responsável por combater a fome e promover sistemas alimentares sustentáveis globalmente.' },
  CGIAR:   { full: 'Consultative Group on International Agricultural Research', description: 'Parceria global de pesquisa agrícola com foco em segurança alimentar e redução da pobreza.' },
  USAID:   { full: 'United States Agency for International Development', description: 'Agência do governo americano responsável por assistência ao desenvolvimento internacional.' },
  WEF:     { full: 'World Economic Forum',                            description: 'Fórum Econômico Mundial, organização que reúne líderes globais para discutir questões econômicas, sociais e ambientais.' },
  ODS:     { full: 'Objetivos de Desenvolvimento Sustentável',        description: '17 objetivos globais da ONU para 2030, incluindo erradicação da fome (ODS 2) e redução das desigualdades (ODS 10).' },
  SDG:     { full: 'Sustainable Development Goals',                   description: 'Os 17 objetivos globais da ONU para 2030 (versão em inglês dos ODS).' },
  G20:     { full: 'Group of Twenty',                                  description: 'Fórum internacional que reúne as 19 maiores economias do mundo mais a União Europeia.' },
  EU:      { full: 'European Union',                                   description: 'União Europeia, bloco político e econômico de 27 países europeus.' },
  PNAD:    { full: 'Pesquisa Nacional por Amostra de Domicílios',     description: 'Pesquisa do IBGE que coleta dados socioeconômicos de domicílios brasileiros anualmente.' },
  TIC:     { full: 'Tecnologias de Informação e Comunicação',         description: 'Conjunto de tecnologias que permitem o processamento, armazenamento e transmissão de informações digitais.' },

  // ── Objetivos do projeto ──────────────────────────────────────────────────
  OG:      { full: 'Objetivo Geral',                                  description: 'O objetivo principal e abrangente do projeto, do qual derivam todos os objetivos específicos.' },
  OE:      { full: 'Objetivo Específico',                             description: 'Objetivos mensuráveis e delimitados que, somados, alcançam o objetivo geral do projeto.' },

  // ── Feiras e eventos ─────────────────────────────────────────────────────
  FEBRACE: { full: 'Feira Brasileira de Ciências e Engenharia',        description: 'Maior feira científica do Brasil, realizada anualmente na USP. Projetos vencedores representam o Brasil em feiras internacionais.' },

  // ── Sistema do projeto ────────────────────────────────────────────────────
  SABIA:   { full: 'Sistema Agronômico Brasileiro de Inteligência Artificial', description: 'Ecossistema tecnológico deste projeto: AgroAssistente (LLM via WhatsApp), AgroAPI (infraestrutura soberana) e Coopera Digital (plataforma cooperativa).' },

  // ── PLN e métricas de avaliação ──────────────────────────────────────────
  NLP:      { full: 'Natural Language Processing / Processamento de Linguagem Natural', description: 'Campo da IA dedicado à compreensão e geração de linguagem humana por computadores. O corpus AgroLinguaBR é um recurso NLP especializado em português agrícola.' },
  BLEU:     { full: 'Bilingual Evaluation Understudy',                        description: 'Métrica de avaliação de qualidade de modelos de linguagem baseada em similaridade com textos de referência humanos. Usada no AgroEval.' },
  ROUGE:    { full: 'Recall-Oriented Understudy for Gisting Evaluation',      description: 'Família de métricas para avaliação de resumização e geração de texto. Usada na validação de qualidade do AgroAssistente.' },
  MLOps:    { full: 'Machine Learning Operations',                            description: 'Conjunto de práticas para operar, monitorar e manter modelos de aprendizado de máquina em produção de forma confiável e escalável.' },
  vLLM:     { full: 'vLLM (biblioteca de inferência para LLMs)',               description: 'Biblioteca de código aberto para inferência eficiente de modelos de linguagem. Usada para operação escalável do AgroAssistente em produção.' },
  ASR:      { full: 'Automatic Speech Recognition / Reconhecimento Automático de Fala', description: 'Tecnologia de transcrição de áudio para texto. Prevista para fases futuras do SABIA para atender agricultores com dificuldade de digitação.' },
  TTS:      { full: 'Text-to-Speech / Síntese de Fala',                       description: 'Tecnologia de síntese de voz a partir de texto. Feature de acessibilidade planejada para agricultores com baixa alfabetização.' },
  SciELO:   { full: 'Scientific Electronic Library Online',                    description: 'Biblioteca eletrônica de acesso aberto a periódicos científicos brasileiros e latino-americanos.' },
  Zenodo:   { full: 'Zenodo',                                                  description: 'Repositório de pesquisa aberto europeu mantido pelo CERN. Plataforma para publicação do corpus AgroLinguaBR com DOI permanente verificável.' },
  ABNT:     { full: 'Associação Brasileira de Normas Técnicas',                description: 'Órgão responsável pela normalização técnica no Brasil. NBR 6023:2018 define o formato das referências bibliográficas desta proposta.' },

  // ── Financiamento e política complementar ────────────────────────────────
  BNDES:    { full: 'Banco Nacional de Desenvolvimento Econômico e Social',    description: 'Principal banco de desenvolvimento do Brasil. BNDES Fundo Clima é caminho potencial de financiamento para escalonamento do SABIA após o período FINEP.' },
  ENCTI:    { full: 'Estratégia Nacional de Ciência, Tecnologia e Inovação 2024-2034', description: 'Documento estratégico do MCTI que orienta investimentos federais em CT&I, com prioridade em soberania tecnológica e transformação digital inclusiva.' },
  PNPIAF:   { full: 'Política Nacional de Proteção e Integração da Agricultura Familiar', description: 'Decreto 12.287/2024 que estabelece inclusão digital em áreas rurais como política de Estado. Este edital é um mecanismo direto de execução.' },
  MAU:      { full: 'Monthly Active Users / Usuários Ativos Mensais',          description: 'Métrica padrão de adoção de software que conta usuários únicos interagindo com a plataforma ao menos uma vez por mês.' },
  AIEP:     { full: 'AI-enabled Extension Platform',                           description: 'Iniciativa do CGIAR de plataformas de extensão agrícola com IA em Quênia e Índia. Precedente de arquitetura similar ao SABIA.' },
  EAU:      { full: 'Emirados Árabes Unidos',                                  description: 'País que desenvolveu o AgriLLM em parceria com CGIAR e Gates Foundation. Exemplo de LLM soberano nacional para agricultura.' },
  COP30:    { full: '30ª Conferência das Partes da UNFCCC',                    description: 'Conferência climática realizada em Belém em novembro de 2025. A Gates Foundation anunciou nela compromisso de investimento em IA agrícola para o Sul Global.' },

  // ── Bolsas ────────────────────────────────────────────────────────────────
  IC:  { full: 'Iniciação Científica',  description: 'Modalidade de bolsa do CNPq para estudantes de graduação em projetos de pesquisa. Usada no SABIA para desenvolvimento do corpus AgroLinguaBR.' },
  AT:  { full: 'Apoio Técnico',         description: 'Modalidade de bolsa do CNPq para profissionais técnicos que prestam apoio operacional em projetos de pesquisa. Usada para trabalho de campo nas regiões-piloto.' },
}
