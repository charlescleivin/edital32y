/**
 * clean-tsx-emojis.mjs
 * Removes emojis from hardcoded text content in TSX component files.
 *
 * Rules:
 * - Remove emojis from: divider labels, badge/section labels, callout headers,
 *   any text string that isn't inside a clear icon-only span.
 * - Preserve: <span> elements that contain ONLY one emoji (icon containers).
 *
 * We use targeted string replacements per file, since AST transforms are
 * heavy and the patterns are well-known.
 */

import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

// Emoji regex for removal — matches grapheme clusters
const EMOJI_RE = /(?:\p{Emoji_Presentation}|\p{Extended_Pictographic})(?:️|︎)?(?:\u{20E3})?(?:‍(?:\p{Emoji_Presentation}|\p{Extended_Pictographic})(?:️|︎)?(?:\u{20E3})?)*|\p{Regional_Indicator}\p{Regional_Indicator}/gu

function stripEmojis(str) {
  return str.replace(EMOJI_RE, '').replace(/  +/g, ' ').trim()
}

/**
 * Apply a series of [search, replacement] pairs to file content.
 * Each search is a string (exact match) to replace.
 */
function applyReplacements(content, replacements) {
  let out = content
  for (const [from, to] of replacements) {
    if (!out.includes(from)) {
      console.log(`  WARNING: pattern not found: "${from.substring(0,60)}"`)
    } else {
      out = out.split(from).join(to)
    }
  }
  return out
}

// ─────────────────────────────────────────────────────────────────────────────
// File: JustificativasSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

const justFile = resolve(ROOT, 'src/components/JustificativasSection/JustificativasSection.tsx')
let justContent = readFileSync(justFile, 'utf8')

justContent = applyReplacements(justContent, [
  // Badge text with emoji mixed in with {number}
  [`          📐 {number}`, `          {number}`],
  // Callout header "⚙️ Diferencial ThatPix..."
  // This is inside a <div> next to a <span aria-hidden>⚙️</span> — the span is icon-only, keep it.
  // The div text itself has no emoji after the span — already clean.
  // The span "aria-hidden" with ⚙️ is the icon container, KEEP it.
])

writeFileSync(justFile, justContent, 'utf8')
console.log('✓ JustificativasSection.tsx cleaned')

// ─────────────────────────────────────────────────────────────────────────────
// File: CooperaProducaoSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

const cooperaFile = resolve(ROOT, 'src/components/CooperaProducaoSection/CooperaProducaoSection.tsx')
let cooperaContent = readFileSync(cooperaFile, 'utf8')

cooperaContent = applyReplacements(cooperaContent, [
  // Section badge: 🌾 {number}
  [`          🌾 {number}`, `          {number}`],
  // Block label: "📊 A Oportunidade Econômica — Dados de Base"
  [`        📊 A Oportunidade Econômica — Dados de Base`, `        A Oportunidade Econômica — Dados de Base`],
  // ⚙️ span is aria-hidden icon container — keep it. The div text "Síntese — Por Que..." has no emoji.
])

writeFileSync(cooperaFile, cooperaContent, 'utf8')
console.log('✓ CooperaProducaoSection.tsx cleaned')

// ─────────────────────────────────────────────────────────────────────────────
// File: WhatsappDecisaoSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

const waFile = resolve(ROOT, 'src/components/WhatsappDecisaoSection/WhatsappDecisaoSection.tsx')
let waContent = readFileSync(waFile, 'utf8')

waContent = applyReplacements(waContent, [
  // Section badge: 💬 {number}
  [`          💬 {number}`, `          {number}`],
  // Callout header: "📡 Decisão Técnica de Canal"
  [`          📡 Decisão Técnica de Canal`, `          Decisão Técnica de Canal`],
])

writeFileSync(waFile, waContent, 'utf8')
console.log('✓ WhatsappDecisaoSection.tsx cleaned')

// ─────────────────────────────────────────────────────────────────────────────
// File: MetodologiaSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

const metFile = resolve(ROOT, 'src/components/MetodologiaSection/MetodologiaSection.tsx')
let metContent = readFileSync(metFile, 'utf8')

metContent = applyReplacements(metContent, [
  // Section badge: 🛠️ {number}
  [`          🛠️ {number}`, `          {number}`],
  // Gantt header: "📅 Cronograma — 36 Meses..."
  [`          📅 Cronograma — 36 Meses de Execução`, `          Cronograma — 36 Meses de Execução`],
  // Deliverables header: "📋 Marcos de Entrega..."
  [`              📋 Marcos de Entrega — Artefatos Verificáveis por Fase (FINEP)`, `              Marcos de Entrega — Artefatos Verificáveis por Fase (FINEP)`],
  // Scope distinction header: "⚖️ Distinção de Escopos..."
  [`        ⚖️ Distinção de Escopos — Regra Fundamental`, `        Distinção de Escopos — Regra Fundamental`],
  // Pilot regions header: "📍 Regiões-Piloto..."
  [`            📍 Regiões-Piloto — Municípios Selecionados`, `            Regiões-Piloto — Municípios Selecionados`],
  // Municipality label: "📍 {r.municipality}"
  [`                <div className="mb-1 text-[14px] font-bold" style={{ color: 'var(--txt)' }}>📍 {r.municipality}</div>`,
   `                <div className="mb-1 text-[14px] font-bold" style={{ color: 'var(--txt)' }}>{r.municipality}</div>`],
  // Sovereignty header: "🇧🇷 Soberania Tecnológica..."
  [`            🇧🇷 Soberania Tecnológica — Escolhas Deliberadas`, `            Soberania Tecnológica — Escolhas Deliberadas`],
  // Conflict governance: "⚖️ {conflictGovernance.title}"
  [`            ⚖️ {conflictGovernance.title}`, `            {conflictGovernance.title}`],
  // Disclosure: "⚖️ Declaração de Relacionamento"
  [`            ⚖️ Declaração de Relacionamento`, `            Declaração de Relacionamento`],
])

writeFileSync(metFile, metContent, 'utf8')
console.log('✓ MetodologiaSection.tsx cleaned')

// ─────────────────────────────────────────────────────────────────────────────
// File: SoberaniaSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

const sobFile = resolve(ROOT, 'src/components/SoberaniaSection/SoberaniaSection.tsx')
let sobContent = readFileSync(sobFile, 'utf8')

sobContent = applyReplacements(sobContent, [
  // Section badge: 🔐 {number}
  [`          🔐 {number}`, `          {number}`],
  // Access roadmap header: "📈 Roadmap de Acesso..."
  [`          📈 Roadmap de Acesso — Expansão Gradual`, `          Roadmap de Acesso — Expansão Gradual`],
  // Expansion vision header: "🌱 O Ativo Permanente"
  [`          🌱 O Ativo Permanente`, `          O Ativo Permanente`],
  // ⚠️ is in a <span> icon container — keep it
  // 💡 is in a <span> icon container — keep it
  // 🇧🇷 is in a <span className="text-[22px]"> icon container — keep it
  // 🖥️ is in a <span aria-hidden> icon container — keep it
  // ⚙️ is in a <span> icon container — keep it
])

writeFileSync(sobFile, sobContent, 'utf8')
console.log('✓ SoberaniaSection.tsx cleaned')

// ─────────────────────────────────────────────────────────────────────────────
// File: LongPrazoSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

const longFile = resolve(ROOT, 'src/components/LongPrazoSection/LongPrazoSection.tsx')
let longContent = readFileSync(longFile, 'utf8')

longContent = applyReplacements(longContent, [
  // Section badge: 🔭 {number}
  [`          🔭 {number}`, `          {number}`],
  // 🌿 decorative absolutely-positioned — this is aria-hidden purely decorative, KEEP (it's not text content, it's in a div)
  // Four movements header: "🗺️ Plano de Quatro Movimentos"
  [`          🗺️ Plano de Quatro Movimentos`, `          Plano de Quatro Movimentos`],
  // THATPIX callout header: "🏢 THATPIX — Capital Técnico..."
  [`          🏢 THATPIX — Capital Técnico Insubstituível`, `          THATPIX — Capital Técnico Insubstituível`],
  // Funding paths header: "💰 Caminhos de Captação..."
  [`          💰 Caminhos de Captação — Rodada de Escala`, `          Caminhos de Captação — Rodada de Escala`],
  // Server transition: "🖥️ Transição do Servidor"
  [`          🖥️ Transição do Servidor`, `          Transição do Servidor`],
])

writeFileSync(longFile, longContent, 'utf8')
console.log('✓ LongPrazoSection.tsx cleaned')

// ─────────────────────────────────────────────────────────────────────────────
// File: ParceriasSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

const parcFile = resolve(ROOT, 'src/components/ParceriasSection/ParceriasSection.tsx')
let parcContent = readFileSync(parcFile, 'utf8')

parcContent = applyReplacements(parcContent, [
  // Section badge: 🤝 {number}
  [`          🤝 {number}`, `          {number}`],
  // 🚨 is in a <span> icon container on its own line — keep it
  // ⚡ before partner deadline text — remove it (it's inline text, not icon container)
  [`              <div className="text-[12px] font-semibold" style={{ color: st.deadline }}>⚡ {p.deadline}</div>`,
   `              <div className="text-[12px] font-semibold" style={{ color: st.deadline }}>{p.deadline}</div>`],
  // Dissemination header: "📡 Estratégia de Disseminação..."
  [`            📡 Estratégia de Disseminação dos Resultados`, `            Estratégia de Disseminação dos Resultados`],
  // Timeline header: "📅 Sequência Crítica de Ações"
  [`        📅 Sequência Crítica de Ações`, `        Sequência Crítica de Ações`],
])

writeFileSync(parcFile, parcContent, 'utf8')
console.log('✓ ParceriasSection.tsx cleaned')

// ─────────────────────────────────────────────────────────────────────────────
// File: IndicadoresSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

const indFile = resolve(ROOT, 'src/components/IndicadoresSection/IndicadoresSection.tsx')
let indContent = readFileSync(indFile, 'utf8')

indContent = applyReplacements(indContent, [
  // ROI header: "💡 Retorno sobre Investimento Público"
  [`          💡 Retorno sobre Investimento Público`, `          Retorno sobre Investimento Público`],
  // Section badge: 📊 {number}
  [`          📊 {number}`, `          {number}`],
  // Impact narrative header: "🌱 O que esses números..."
  [`            🌱 O que esses números significam no campo`, `            O que esses números significam no campo`],
  // Impact chain header: "🔗 Cadeia de Impacto..."
  [`          🔗 Cadeia de Impacto — Como o Investimento Vira Renda Rural`, `          Cadeia de Impacto — Como o Investimento Vira Renda Rural`],
  // icon values in the inline data array — these are 'icon' properties, keep them (they go into a <span> icon element)
  // They are already rendered as icon containers: <span className="mb-1 text-[28px] leading-none">{stage.icon}</span>
  // So no change needed there.
])

writeFileSync(indFile, indContent, 'utf8')
console.log('✓ IndicadoresSection.tsx cleaned')

// ─────────────────────────────────────────────────────────────────────────────
// File: RiscosSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

const riscFile = resolve(ROOT, 'src/components/RiscosSection/RiscosSection.tsx')
let riscContent = readFileSync(riscFile, 'utf8')

riscContent = applyReplacements(riscContent, [
  // Section badge: ⚡ {number}
  [`          ⚡ {number}`, `          {number}`],
  // Sustainability header: "🌱 Sustentabilidade Pós-Projeto..."
  [`            🌱 Sustentabilidade Pós-Projeto — Cenários de Continuidade`, `            Sustentabilidade Pós-Projeto — Cenários de Continuidade`],
])

writeFileSync(riscFile, riscContent, 'utf8')
console.log('✓ RiscosSection.tsx cleaned')

// ─────────────────────────────────────────────────────────────────────────────
// File: OrcamentoSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

const orcFile = resolve(ROOT, 'src/components/OrcamentoSection/OrcamentoSection.tsx')
let orcContent = readFileSync(orcFile, 'utf8')

orcContent = applyReplacements(orcContent, [
  // Section badge: 💰 {number}
  [`          💰 {number}`, `          {number}`],
  // Equipment header: "🖥️ Detalhamento — Capital / Equipamentos..."
  [`            🖥️ Detalhamento — Capital / Equipamentos (R$ 1.450.000)`, `            Detalhamento — Capital / Equipamentos (R$ 1.450.000)`],
])

writeFileSync(orcFile, orcContent, 'utf8')
console.log('✓ OrcamentoSection.tsx cleaned')

// ─────────────────────────────────────────────────────────────────────────────
// File: ChecklistSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

const chkFile = resolve(ROOT, 'src/components/ChecklistSection/ChecklistSection.tsx')
let chkContent = readFileSync(chkFile, 'utf8')

chkContent = applyReplacements(chkContent, [
  // Section badge: ✅ {number}
  [`          ✅ {number}`, `          {number}`],
  // ⏰ is in a <span className="mt-0.5 text-[20px] leading-none"> icon container — keep it
])

writeFileSync(chkFile, chkContent, 'utf8')
console.log('✓ ChecklistSection.tsx cleaned')

console.log('\n✅ All TSX files cleaned.')
