import type { S13Data } from '@/types/proposal'

export const fixture: S13Data = {
  number: 'Modalidades Futuras',
  title: 'IA de Visão e Áudio',
  subtitle: 'O canal que estamos construindo já é multimodal. Ampliar para visão e áudio é uma evolução de engenharia — não uma reinvenção.',
  headline: 'O WhatsApp Já Sabe Receber Imagens e Voz.',

  disclaimer:
    'Esta seção documenta potencial técnico pós-projeto. As modalidades de visão computacional e processamento de áudio descritas abaixo não fazem parte do escopo contratual da proposta FINEP AgriFam-ICT 2026 — estão fora do orçamento e dos entregáveis comprometidos. São apresentadas para demonstrar a extensibilidade arquitetural da infraestrutura que está sendo construída e o potencial de captação em fases subsequentes.',

  channelCapabilityNote:
    'O WhatsApp Business API — canal central do AgroAssistente — suporta nativamente três modalidades além do texto puro. A infraestrutura de comunicação já está pronta. O que a proposta atual constrói é o modelo soberano que sabe o que fazer com essas mensagens.',

  channelCapabilityItems: [
    {
      icon: '📷',
      label: 'Imagens JPG/PNG',
      note: 'O agricultor fotografa a planta doente ou o animal e envia no mesmo chat. Sem app adicional, sem login, sem treinamento.',
    },
    {
      icon: '🎙️',
      label: 'Mensagens de Voz',
      note: 'Mais de 80% das mensagens rurais já são enviadas como áudio. O arquivo chega como .ogg/opus pelo mesmo webhook da API.',
    },
    {
      icon: '📹',
      label: 'Vídeos Curtos',
      note: 'Capturas de movimento — marcha irregular de animal, problemas de irrigação — chegam pelo mesmo endpoint como arquivo de vídeo.',
    },
  ],

  modalities: [
    {
      id: 'vision',
      icon: '👁️',
      badge: 'IA de Visão',
      accentColor: 'gold',
      title: 'Diagnóstico Visual — A Foto Vira Consulta',
      description:
        'A integração de visão computacional ao AgroAssistente elimina a barreira da linguagem escrita e transforma qualquer smartphone em instrumento de diagnóstico agronômico. O agricultor fotografa a folha com manchas ou o animal com sintoma e envia pelo WhatsApp — o modelo identifica a praga ou condição, retorna o protocolo de manejo e, se necessário, encaminha ao técnico EMATER mais próximo.',
      channelNote: 'WhatsApp já aceita imagem JPG/PNG — zero atrito para o usuário. A foto chega pelo mesmo webhook de texto.',
      proof: {
        label: 'Pesagem Bovina por Visão Computacional',
        description:
          'Charles Cleivin desenvolveu e operou em produção um sistema de estimativa de peso bovino por visão computacional — mesmo domínio (agropecuária), mesmo paradigma (smartphone → modelo → resposta), escala real de produção. A prova de que a equipe já executou visão agrícola em campo existe e está documentada.',
        stats: [
          { value: '95%+',    label: 'Precisão na estimativa de peso bovino',         color: 'sage'  },
          { value: '1M+',     label: 'Imagens bovinas processadas em produção',        color: 'gold'  },
          { value: 'H100/A100', label: 'Infraestrutura GPU operada para inferência',   color: 'terra' },
        ],
      },
      useCases: [
        'Diagnóstico de pragas e doenças por foto da folha — identificação do patógeno com recomendação de manejo e dosagem',
        'Estimativa de peso bovino sem balança — foto lateral converte em peso estimado para decisão de abate ou pasto',
        'Avaliação de maturação de colheita — cor, textura e morfologia da fruta como critério de ponto de colheita',
        'Detecção de deficiências nutricionais — sintomas visuais no solo e na planta mapeados para laudo e análise laboratorial',
        'Monitoramento de pragas por armadilha fotográfica — contagem automática de insetos capturados por imagem',
      ],
      horizonLabel: 'Fase 1 pós-projeto (Ano 4)',
    },
    {
      id: 'audio',
      icon: '🎙️',
      badge: 'IA de Áudio',
      accentColor: 'sage',
      title: 'Consulta por Voz — O Agricultor Fala, O Modelo Ouve',
      description:
        'A consulta por voz elimina a barreira de alfabetização digital — crítica em regiões onde mais de 40% da população rural tem ensino fundamental incompleto. O agricultor descreve o problema em português regional enquanto trabalha no campo, sem parar para digitar. A mensagem de áudio é transcrita automaticamente, processada pelo AgroAssistente e respondida em texto — ou, futuramente, em áudio sintetizado no mesmo dialeto.',
      channelNote: 'WhatsApp recepciona mensagens de voz nativas — o arquivo .ogg/opus chega pelo mesmo webhook sem configuração adicional.',
      useCases: [
        'Transcrição de áudio regional para texto estruturado — pipeline três etapas: ASR → normalização → AgroAssistente',
        'Atendimento mãos-livres durante o trabalho no campo — sem necessidade de digitar ou parar a atividade',
        'Resposta em áudio sintetizado (TTS) para agricultores com dificuldade de leitura — mesmo conteúdo, formato acessível',
        'Enriquecimento automático do corpus AgroLinguaBR — transcrições de interações reais geram pares Q&A em dialeto regional',
        'Transcrição de reuniões de cooperativa como fonte de dados — atas e debates tornam-se insumo para o modelo',
      ],
      horizonLabel: 'Fase 2 pós-projeto (Ano 5)',
    },
  ],

  architectureBridge: {
    title: 'Uma Camada de Pré-Processamento — O Modelo Soberano Já Está Pronto',
    body:
      'O que diferencia visão e áudio de texto puro é apenas o pré-processamento. A pipeline completa de inferência — contexto vetorial, histórico de conversa, corpus AgroLinguaBR, roteamento de intento, geração de resposta — permanece intacta. Adicionar visão é conectar um modelo de classificação de imagem antes do LLM. Adicionar áudio é conectar um modelo ASR antes do mesmo pipeline. A infraestrutura soberana construída nesta proposta é o ativo permanente que viabiliza essas extensões sem dependência de APIs estrangeiras.',
    points: [
      'Imagem → modelo de visão (CLIP/BLIP/ViT fine-tuned) → legenda textual → AgroAssistente → resposta agronômica',
      'Áudio → modelo ASR (Whisper adaptado para PT-BR rural) → texto transcrito → AgroAssistente → resposta',
      'Mesmo endpoint WhatsApp, mesmo modelo de resposta, mesmo corpus — apenas um pré-processador adicional por modalidade',
      'Transcrições de áudio reais retroalimentam o AgroLinguaBR — cada conversa de voz enriquece o corpus para iterações futuras',
    ],
  },
}
