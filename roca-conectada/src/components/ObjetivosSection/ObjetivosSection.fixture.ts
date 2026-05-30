import type { ObjetivosSectionProps } from './ObjetivosSection'

export const fixture: ObjetivosSectionProps = {
  number: 'Seção 3',
  title: 'Objetivos',
  subtitle: 'Geral e específicos, alinhados à Linha Temática 3',
  generalObjective: 'Construir a infraestrutura nacional soberana de IA para a agricultura familiar — corpus soberano (CC BY-NC-SA 4.0), modelo soberano, benchmark de avaliação e API pública — e sobre ela desenvolver, validar e implantar o ecossistema SABIA, digitalizando as cadeias socioprodutivas da agricultura familiar e habilitando o ecossistema nacional de IA agroalimentar.',
  axes: [
    {
      id: 'e1',
      label: 'Eixo I — Pesquisa e Infraestrutura de IA',
      objectives: [
        { id: 'oe1', code: 'OE1.', text: 'Realizar diagnóstico participativo das necessidades digitais em 3 regiões-piloto (Pesquisa-Ação Participativa).' },
        { id: 'oe2', code: 'OE2.', text: 'Construir e publicar o corpus AgroLinguaBR: 25.000 pares Q&A em português agrícola regional, licença CC BY-NC-SA 4.0 — acesso gratuito para pesquisa, ICTs públicas e cooperativas; uso comercial negociado — com DOI público via Zenodo. Nota: DOI é apenas um identificador persistente (como ISBN), não implica licença aberta; a licença CC BY-NC-SA 4.0 é que define os termos de uso — e é mais generosa para o ecossistema público brasileiro do que uma licença MIT seria (ver Seção 12).' },
        { id: 'oe3', code: 'OE3.', text: 'Desenvolver o AgroEval: benchmark nacional para avaliação de alucinação e precisão de IAs agrícolas em português — contribuição científica original replicável por qualquer grupo de pesquisa.' },
      ],
    },
    {
      id: 'e2',
      label: 'Eixo II — Validação e Implantação',
      objectives: [
        { id: 'oe4', code: 'OE4.', text: 'Realizar fine-tuning e validação científica do AgroAssistente IA em protocolo de grupo controle randomizado (Fase 2, Meses 13–24): n=50 agricultores como grupo controle recebem ATER convencional; os demais 800 integram o grupo de intervenção — totalizando 850 participantes no protocolo. O n=50 para o grupo controle não é arbitrário: o cálculo de poder estatístico (G*Power, d de Cohen = 0,5 — tamanho de efeito médio correspondente a ~10% de melhoria em indicadores mensuráveis de adoção de boas práticas) com poder de 80% exige mínimo de n=64 por grupo — resultado canônico de Cohen (1988); n=50 é aceito para estudos piloto de viabilidade (ver Seção 4, Justificativas). Protocolo pré-registrado no AEA RCT Registry (Mês 10) com registro simultâneo no CONEP.' },
        { id: 'oe5', code: 'OE5.', text: 'Implantar o AgroAssistente IA com 800 agricultores nas 3 regiões-piloto (Fase 2, Meses 13–24) — distribuídos como Crateús-CE ~300, Sousa-PB ~200 e Vitória da Conquista-BA ~300 — e expandir para 2.500 (Fase 3, Meses 25–36) via rede de multiplicadores EMATER. O teto de 800 na Fase 2 é calibrado à infraestrutura de servidores (R$ 600.000 previsto em Seção 12), dimensionada para suportar entre 800 e 2.500 MAU (Usuários Ativos Mensais) com latência P95 < 5 segundos; também fornece a amostra necessária para o ensaio controlado randomizado (800 intervenção × 50 controle). A expansão para 2.500 soma os 800 agricultores piloto aos 1.700 incorporados via 30 multiplicadores ativos da rede de 350 EMATER capacitados (120 da Fase 2 + 230 treinados na Fase 3) — cada um responsável por ~57 novos agricultores nos seus circuitos territoriais.' },
        { id: 'oe6', code: 'OE6.', text: 'Implantar o Coopera Digital em 6 cooperativas âncora (Fase 2, Meses 13–24) e 18 cooperativas (Fase 3, Meses 25–36), com módulo de rastreabilidade de origem do produto (registro de lote, destino PAA/PNAE e certificação de procedência), garantindo conformidade com a Resolução CONAB nº 127/2024. As 6 âncoras são 2 por região-piloto, selecionadas no diagnóstico da Fase 1 por critério objetivo: carta de anuência assinada e cadeia PAA/PNAE ativa. As 18 da Fase 3 resultam de fator de replicação 3× via redes FETRAF/EMATER — conservador em relação ao fator 4–6× documentado na literatura para ferramentas digitais em redes cooperativas. As 18 cooperativas somam entre 900 e 3.600 agricultores associados (50–200 membros cada), multiplicando o alcance efetivo do projeto além dos 2.500 usuários diretos do AgroAssistente.' },
      ],
    },
    {
      id: 'e3',
      label: 'Eixo III — Ecossistema Nacional e Soberania',
      objectives: [
        { id: 'oe7', code: 'OE7.', text: 'Publicar e operar a AgroAPI como serviço público regulado, habilitando integração por EMATERs estaduais, universidades, startups e outras ICTs.' },
        { id: 'oe8', code: 'OE8.', text: 'Capacitar 350 multiplicadores (técnicos ATER e gestores de cooperativas) como agentes de expansão e sustentabilidade do ecossistema.' },
        { id: 'oe9', code: 'OE9.', text: 'Transferir a titularidade do modelo, corpus e benchmarks para a ICT executora ([ICT EXECUTORA]), assegurando soberania e permanência nacional da infraestrutura.' },
      ],
    },
  ],
  policyAlignment: [
    {
      sigla: 'NIB',
      fullName: 'Nova Indústria Brasil',
      decree: 'Decreto 11.738/2023',
      axes: 'Missão 1 — Cadeias Agroindustriais Sustentáveis · Missão 4 — Transformação Digital',
      body: 'O SABIA contribui para a Missão 1 da NIB ao digitalizar os processos produtivos de 2.500 agricultores familiares, rastreando práticas e conectando a cadeia a montante e a jusante. Para a Missão 4, constrói infraestrutura digital nacional soberana: o AgroLinguaBR e a AgroAPI são ativos estratégicos de dados e serviços em português, permanentes e de propriedade pública ([ICT EXECUTORA]), que habilitam todo o ecossistema nacional de IA agroalimentar.',
    },
    {
      sigla: 'PLANAPO',
      fullName: 'Plano Nacional de Agroecologia e Produção Orgânica',
      decree: '3ª edição 2023–2027',
      axes: 'Eixo 3 — Conhecimento em Agroecologia · Eixo 4 — Comunicação e Informação',
      body: 'O PLANAPO 2023-2027 orienta a expansão do acesso ao conhecimento agroecológico (Eixo 3) e a democratização da informação técnica para agricultores familiares (Eixo 4). O corpus AgroLinguaBR incluirá módulo específico de práticas agroecológicas e orgânicas em português regional; o AgroAssistente IA, treinado sobre este corpus, torna-se o primeiro canal de extensão rural digital contextualizado em agroecologia, operando 24h via WhatsApp sem custo de deslocamento.',
    },
    {
      sigla: 'PNPIAF',
      fullName: 'Política Nacional de Proteção e Integração da Agricultura Familiar',
      decree: 'Decreto 12.287/2024',
      axes: 'Eixo IV — Inclusão Digital em Áreas Rurais',
      body: 'A PNPIAF, em seu Eixo IV, estabelece a inclusão digital em áreas rurais como política de Estado. O edital FINEP AgriFam-ICT 2026 é mecanismo direto de execução desse eixo. O SABIA é a resposta técnica completa: corpus linguístico nacional, modelo de linguagem soberano em português e aplicação via WhatsApp com arquitetura assíncrona tolerante a conectividade intermitente — solução concebida desde o início para a realidade das pequenas propriedades rurais brasileiras.',
    },
    {
      sigla: 'ENCTI / PBIA',
      fullName: 'Estratégia Nacional de CT&I 2024–2034 · Plano Brasileiro de Inteligência Artificial 2024–2028',
      decree: 'ENCTI / MCTI 2024 · PBIA / MCTI 2024',
      axes: 'Eixo 3 — Soberania Tecnológica Nacional · Eixo 4 — Transformação Digital Inclusiva · PBIA: modelos nacionais de linguagem em português',
      body: 'A ENCTI 2024-2034 prioriza soberania tecnológica nacional (Eixo 3) e transformação digital com inclusão (Eixo 4). O PBIA 2024–2028 comprometeu R$ 23 bilhões e 54 ações concretas — incluindo o desenvolvimento de modelos nacionais de linguagem em português. O SABIA entrega aderência ao PBIA de forma concreta: o AgroLinguaBR e o LLM fine-tuned são os ativos específicos que o PBIA identifica como necessários (corpus nacional, modelo soberano em português) mas não construiu para a agricultura familiar. Ao mês 36, com transferência de titularidade à [ICT EXECUTORA], esses ativos tornam-se patrimônio público irremovível do sistema nacional de CT&I — disponíveis para a próxima iteração do PBIA ou qualquer política pública nacional sem dependência de plataformas estrangeiras. O SoberanIA (R$ 40M, lançado maio 2026) confirmou que o governo está financiando exatamente este tipo de ativo para o setor público. O SABIA é o instrumento equivalente para a agricultura familiar.',
    },
    {
      sigla: 'Bioinsumos',
      fullName: 'Programa Nacional de Bioinsumos',
      decree: 'Decreto 10.375/2020',
      axes: 'Disseminação de conhecimento sobre bioinsumos na agricultura familiar',
      body: 'O Programa Nacional de Bioinsumos visa ampliar a adoção de bioinsumos na agricultura familiar como substituto de agroquímicos. O AgroLinguaBR incluirá módulo dedicado com 3.000+ pares Q&A sobre bioinsumos em português regional — denominações locais, modo de uso, dosagem e interações com culturas —, tornando o AgroAssistente o primeiro canal de extensão rural digital com suporte especializado ao uso de bioinsumos no campo, em linguagem acessível ao agricultor familiar.',
    },
  ],
  innovationPolicy: {
    document: 'Política de Inovação da [ICT EXECUTORA]',
    resolution: 'Resolução Normativa nº 26/CUn/2016 (atualizada pela RN nº 43/CUn/2018)',
    article: 'Art. 3º, incisos I, III e V — Diretrizes institucionais de inovação',
    alignmentText: 'A Política de Inovação da [ICT EXECUTORA] (Resolução Normativa nº 26/CUn/2016, atualizada pela RN nº 43/CUn/2018) estabelece, em seu Art. 3º, como diretrizes institucionais: (I) o estímulo à criação e ao desenvolvimento de ambientes promotores da inovação; (III) o incentivo à pesquisa aplicada e ao desenvolvimento tecnológico orientado à solução de problemas sociais e econômicos; e (V) o fortalecimento de parcerias entre a [ICT EXECUTORA] e setores produtivos, com especial atenção a demandas de populações vulneráveis. O SABIA materializa as três diretrizes de forma concreta: (I) constrói infraestrutura científica permanente — corpus AgroLinguaBR, benchmark AgroEval e AgroAPI — como ativos institucionais da [ICT EXECUTORA], gerando ambiente habilitante para pesquisa futura em IA agroalimentar; (III) orienta o projeto integralmente à resolução de um problema social documentado — o colapso da ATER e a exclusão digital de 3,9 milhões de famílias agricultoras; (V) estabelece parcerias formais com cooperativas da agricultura familiar e com o ecossistema EMATER/EMBRAPA como parceiros de execução e beneficiários primários da inovação, com transferência de titularidade prevista no mês 36 (OE9).',
    annexNote: 'O documento completo da Política de Inovação da [ICT EXECUTORA] está incluído nos Anexos Gerais da proposta, conforme Item EL-09 do Edital FINEP AgriFam-ICT 2026.',
  },
}
