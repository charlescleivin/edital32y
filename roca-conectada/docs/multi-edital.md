# Arquitetura Multi-Edital — SABIA

Documento de trabalho. Registra a refatoração de proposta-única para multi-edital,
o estado atual e o que ainda falta. Última atualização: 2026-07-02.

O produto exibido é **SABIA — Sistema Agronômico Brasileiro de Inteligência Artificial**
(o nome "Roça Conectada" é legado; a pasta do repo permanece `roca-conectada`).

---

## Objetivo

Antes: o app servia uma única proposta (`data/proposal.json`) para um único edital
(FINEP AgriFam-ICT 2026, encerrado em 26/06/2026).

Agora, dois requisitos do usuário:

1. **Núcleo compartilhado ("o grosso") que não muda entre editais** — problema, escopo
   técnico, equipe, metodologia, referências. Editado uma vez, herdado por todos.
2. **Página inicial pública** para imprensa/entrevistas/público geral, alimentada pelo
   núcleo, **sem qualquer navegação para os editais**.
3. **Propostas por edital em URLs indecifráveis** — cada edital adapta o núcleo ao seu
   enquadramento; as URLs não podem ser adivinhadas/enumeradas.

---

## Modelo de dados (núcleo + overrides)

- `data/proposal.json` — **núcleo** (o "grosso" compartilhado). Mantido neste caminho
  para os scripts existentes (`sync-fixtures.js`) continuarem funcionando. Contém o
  token `[ICT EXECUTORA]` (e a forma sem colchetes `ICT EXECUTORA`), substituído por edital.
- `data/editais/<slug>.json` = `{ descriptor, overrides }`:
  - `descriptor`: `slug`, `token` (opaco, 32 chars), `status` (`active`/`closed`/`draft`),
    `label`, `shortLabel`, `agency`, `deadline`, `value`, `duration`, `proponent`,
    `modality`, `tokens` (mapa de substituição; forma com colchetes ANTES da sem colchetes).
  - `overrides`: só as chaves de seção que mudam genuinamente naquele edital.
- `src/lib/editais.ts`:
  - `getEditalByToken(token)` = `{...core, ...overrides}` (merge por chave) + `applyTokens`.
  - `getCore()` = núcleo com tokens neutralizados ("a instituição executora").
  - `getEditalDescriptorByToken`, `editalTokens`, `listEditais` (uso interno/admin — nunca
    em página pública).

### Editais atuais

| slug | status | override keys | herda do núcleo |
|---|---|---|---|
| `mais-inovacao` | active | meta, hero, s1, s2, s3, s4, s5, s6, s7, s9, s10, s12, s13, s14 | sidebar, s8, s11 |
| `agrifam-ict` | closed | (vazio — idêntico ao núcleo) | tudo |

Tokens privados (URL `/edital/<token>`):
- `mais-inovacao` → `483b73fac87231202bce86381d2ea7ca`
- `agrifam-ict` → `e8113115f99bc17ccb1995edad0786bc`

---

## Rotas

- `/` — **landing pública** (`src/app/page.tsx`). Alimentada por `getCore()`. **Sem nenhum
  link/navegação para editais.** Metadata neutra em `layout.tsx`.
- `/edital/[token]` — proposta completa (`src/app/edital/[token]/page.tsx`) via `ProposalView`.
  URL usa o token opaco (não o slug); slugs legíveis dão 404. `robots: noindex,nofollow`.
- `/comp`, `/comp/[slug]` — galeria de componentes (inalterado).
- `/api/edital/[file]` — serve PDFs anexos (só AgriFam por enquanto).

### Componentes

- `src/components/ProposalView/ProposalView.tsx` — renderização completa (todas as seções +
  VersionProvider/DiffSection) extraída do antigo `page.tsx`. Props: `proposal`, `para`,
  `backHref`, `showVersioning`, `docs`.
- `Sidebar` parametrizado: props novos `backHref` (link "← Início") e `docs` (default =
  anexos AgriFam; `mais-inovacao` passa `[]`). Data do prazo derivada do prop `deadline`.

---

## Estado atual

### ✅ Feito e verificado (2026-07-02)
- Modelo núcleo+overrides + roteamento por token opaco.
- `npx tsc --noEmit` OK · `npm run build` OK · rotas por token 200 · slugs legíveis 404 ·
  tokens `[ICT EXECUTORA]` 0 leftover · deadlines/painel de anexos corretos por edital.
- Testes jest: 19/20 suítes. A suíte `HeroSection` falha 5/5 por limitação do jsdom
  (canvas `setTransform`) — **PRÉ-EXISTENTE no HEAD**, não é regressão.

### ⚠️ A refazer — a landing pública (`src/app/page.tsx`)

A primeira versão da landing foi escrita do zero com cards mínimos e **não** reaproveita os
componentes de seção nem o design system. Auditoria apontou:
- Puxa ~6 campos de um modelo com dezenas; **hard-coda** a seção "4 ativos" inline (anti-padrão).
- Sem canvas do hero, watermarks, banners de imagem, escala Playfair, acentos semânticos,
  nem os gráficos reais (AiRaceChart, funil de impacto, ROI, Gantt).
- Ignora conteúdo rico do núcleo: 5 barreiras ilustradas, tabela da corrida global de IA,
  bloco de evidências data-journalism, perfil media-ready do Charles (galeria/vídeo/CV),
  roadmap de 4 atos (s12), manifesto de soberania + cenários de licença (s14).

**Plano de correção (pendente):** recompor a landing a partir dos componentes de seção reais
(`HeroSection`, `ProblemaSection`, `CharlesSection`, `IndicadoresSection`, `LongPrazoSection`,
`SoberaniaSection`) alimentados por `getCore()`, incluindo só as seções públicas e
neutralizando/excluindo o que é específico de edital. Garantir que placeholders (roster de
equipe, perfil "Marco Rogério" com `isPlaceholder`) nunca apareçam no público.

### 📋 Fase 2 — conteúdo do edital Mais Inovação (pendente)
- A variante `variant-mais-inovacao/proposal.json` (14/06) tinha **bugs de find-replace cru**
  (ex.: `s11` "THATPIX LTDA; THATPIX LTDA"; "Resolução CUn" de universidade aplicada a empresa).
  Precisam de correção real, não só substituição.
- Neutralizar o núcleo (tirar suposições de ICT das seções compartilhadas → mover para o
  override do AgriFam).
- Pendências de mérito do edital (ver `variant-mais-inovacao/DIFF_RESUMO.md`): teste de
  capacidade financeira (ELIMINATÓRIO), % contrapartida por porte da THATPIX, vídeo 10min +
  apresentação PDF, trajetória de inovação da empresa, mobilização SNI.
- Versionamento (`/versions/*.json`) é history do AgriFam; considerar escopar por edital ou
  usar `showVersioning={false}` no `mais-inovacao`.
