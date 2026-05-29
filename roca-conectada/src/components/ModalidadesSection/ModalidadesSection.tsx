import { AcronymText } from '@/components/ui/AcronymText'
import type { S13Data, ModalityCard, ModalityProofStat } from '@/types/proposal'

export const componentMeta = { slug: 'modalidades-section', label: 'Modalidades Futuras' }

export type ModalidadesSectionProps = S13Data

const accentTokens: Record<string, { border: string; bg: string; text: string; statBg: string }> = {
  terra: {
    border: 'rgba(200,85,48,0.3)',
    bg:     'rgba(200,85,48,0.06)',
    text:   'var(--terra)',
    statBg: 'rgba(200,85,48,0.08)',
  },
  gold: {
    border: 'rgba(212,150,14,0.3)',
    bg:     'rgba(212,150,14,0.06)',
    text:   'var(--gold)',
    statBg: 'rgba(212,150,14,0.08)',
  },
  sage: {
    border: 'rgba(111,168,118,0.3)',
    bg:     'rgba(111,168,118,0.06)',
    text:   'var(--sage)',
    statBg: 'rgba(111,168,118,0.08)',
  },
  blue: {
    border: 'rgba(8,145,178,0.3)',
    bg:     'rgba(8,145,178,0.06)',
    text:   'var(--p)',
    statBg: 'rgba(8,145,178,0.08)',
  },
}

const statColor = (c?: ModalityProofStat['color']) =>
  c === 'terra' ? 'var(--terra)' :
  c === 'gold'  ? 'var(--gold)'  :
  c === 'sage'  ? 'var(--sage)'  :
  c === 'blue'  ? 'var(--p)'     : 'var(--txt)'

function ModalityCardBlock({ card }: { card: ModalityCard }) {
  const tok = accentTokens[card.accentColor] ?? accentTokens.gold

  return (
    <div className="flex flex-col rounded-3xl border overflow-hidden"
      style={{ borderColor: tok.border, background: 'var(--bg-card)' }}>

      {/* card header */}
      <div className="px-8 pt-8 pb-6" style={{ borderBottom: `1px solid ${tok.border}`, background: tok.bg }}>
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="text-[36px]" aria-hidden>{card.icon}</span>
          <span className="rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-[3px]"
            style={{ borderColor: tok.border, color: tok.text, background: tok.statBg }}>
            {card.badge}
          </span>
        </div>
        <h3 className="mb-3 text-[20px] font-bold leading-[1.25]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
          <AcronymText text={card.title} />
        </h3>
        <p className="text-[13px] leading-[1.85]" style={{ color: 'var(--txtl)' }}>
          <AcronymText text={card.description} />
        </p>
      </div>

      {/* channel note */}
      <div className="flex items-center gap-3 px-8 py-3"
        style={{ borderBottom: `1px solid var(--bdr)`, background: 'rgba(237,229,211,0.025)' }}>
        <span className="text-[14px]">📡</span>
        <p className="text-[11.5px] italic leading-snug" style={{ color: 'var(--txtl)' }}>
          <AcronymText text={card.channelNote} />
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-6 p-8">
        {/* proof of concept */}
        {card.proof && (
          <div className="rounded-2xl border p-5"
            style={{ borderColor: tok.border, background: tok.bg }}>
            <div className="mb-1.5 text-[9px] font-bold uppercase tracking-[2.5px]"
              style={{ color: tok.text }}>
              Prova de Conceito — Campo Real
            </div>
            <div className="mb-2 text-[13px] font-bold leading-snug" style={{ color: 'var(--txt)' }}>
              <AcronymText text={card.proof.label} />
            </div>
            <p className="mb-4 text-[12px] leading-[1.8]" style={{ color: 'var(--txtl)' }}>
              <AcronymText text={card.proof.description} />
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {card.proof.stats.map((s, i) => (
                <div key={i} className="rounded-xl p-3 text-center"
                  style={{ background: tok.statBg, border: `1px solid ${tok.border}` }}>
                  <div className="text-[22px] font-bold leading-tight"
                    style={{ fontFamily: 'var(--font-playfair)', color: statColor(s.color) }}>
                    {s.value}
                  </div>
                  <div className="mt-1 text-[10px] leading-snug" style={{ color: 'var(--txtll)' }}>
                    <AcronymText text={s.label} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* use cases */}
        {card.useCases && card.useCases.length > 0 && (
          <div>
            <div className="mb-3 text-[9px] font-bold uppercase tracking-[2.5px]"
              style={{ color: 'var(--txtll)' }}>
              Casos de Uso Previstos
            </div>
            <ul className="flex flex-col gap-2">
              {card.useCases.map((uc, i) => (
                <li key={i} className="flex items-start gap-3 text-[12.5px] leading-[1.75]"
                  style={{ color: 'var(--txtl)' }}>
                  <span className="mt-[4px] shrink-0 text-[9px]" style={{ color: tok.text }}>◆</span>
                  <AcronymText text={uc} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* horizon footer */}
      <div className="px-8 py-3" style={{ borderTop: `1px solid var(--bdr)` }}>
        <span className="text-[10px] font-bold uppercase tracking-[2px]" style={{ color: 'var(--txtll)' }}>
          Horizonte de Implementação: {card.horizonLabel}
        </span>
      </div>
    </div>
  )
}

export default function ModalidadesSection({
  number, title, subtitle, headline,
  disclaimer, channelCapabilityNote, channelCapabilityItems,
  modalities, architectureBridge,
}: ModalidadesSectionProps) {
  return (
    <section id="s13" className="relative overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20"
      style={{ background: 'var(--bg-alt)' }}>
      <span aria-hidden
        className="pointer-events-none absolute right-8 top-4 select-none hidden sm:block text-[180px] font-bold leading-none opacity-[0.025]"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
        AI
      </span>

      {/* Header */}
      <div className="relative mb-14">
        <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-[3px]"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.04)', color: 'var(--txtll)' }}>
          🔮 {number}
        </span>
        {headline && (
          <p className="mb-3 text-[16px] sm:text-[19px] lg:text-[22px] font-bold italic leading-[1.2]"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}>
            <AcronymText text={headline} />
          </p>
        )}
        <h2 className="mb-3 text-[26px] sm:text-[34px] lg:text-[44px] font-bold leading-[1.05] tracking-[-0.3px]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
          <AcronymText text={title} />
        </h2>
        <p className="lg:max-w-[680px] text-[15px] italic leading-relaxed"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txtl)' }}>
          <AcronymText text={subtitle} />
        </p>
      </div>

      {/* Disclaimer */}
      <div className="mb-12 flex items-start gap-4 rounded-2xl border p-6"
        style={{ borderColor: 'rgba(212,150,14,0.4)', background: 'rgba(212,150,14,0.06)' }}>
        <span className="shrink-0 text-[22px]">⚠️</span>
        <div>
          <div className="mb-1.5 text-[10px] font-bold uppercase tracking-[2.5px]"
            style={{ color: 'var(--gold)' }}>
            Potencial Pós-Projeto — Fora do Escopo Atual
          </div>
          <p className="text-[12.5px] leading-[1.8]" style={{ color: 'var(--txtl)' }}>
            <AcronymText text={disclaimer} />
          </p>
        </div>
      </div>

      {/* Channel capability */}
      <div className="mb-12 rounded-2xl border p-8"
        style={{ borderColor: 'var(--bdr-strong)', background: 'var(--bg-raised)' }}>
        <div className="mb-6 text-[10px] font-bold uppercase tracking-[2.5px]"
          style={{ color: 'var(--txtll)' }}>
          📱 O Canal Já Está Pronto
        </div>
        <p className="mb-6 text-[14px] leading-[1.8]" style={{ color: 'var(--txtl)' }}>
          <AcronymText text={channelCapabilityNote} />
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {channelCapabilityItems.map((item, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border p-4"
              style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
              <span className="shrink-0 text-[22px]">{item.icon}</span>
              <div>
                <div className="mb-1 text-[13px] font-bold leading-snug" style={{ color: 'var(--txt)' }}>
                  <AcronymText text={item.label} />
                </div>
                <div className="text-[11.5px] leading-[1.6]" style={{ color: 'var(--txtll)' }}>
                  <AcronymText text={item.note} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modality cards */}
      <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {modalities.map((card) => (
          <ModalityCardBlock key={card.id} card={card} />
        ))}
      </div>

      {/* Architecture bridge */}
      <div className="rounded-3xl border p-8"
        style={{ borderColor: 'rgba(200,85,48,0.25)', background: 'rgba(200,85,48,0.04)' }}>
        <div className="mb-2 text-[10px] font-bold uppercase tracking-[2.5px]"
          style={{ color: 'var(--terra)' }}>
          🏗️ Ponte Arquitetural — Por Que Isso É Possível
        </div>
        <h3 className="mb-4 text-[18px] font-bold leading-[1.35]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
          <AcronymText text={architectureBridge.title} />
        </h3>
        <p className="mb-6 text-[13.5px] leading-[1.85]" style={{ color: 'var(--txtl)' }}>
          <AcronymText text={architectureBridge.body} />
        </p>
        <div className="flex flex-col gap-3">
          {architectureBridge.points.map((pt, i) => {
            const [label, ...rest] = pt.split(' → ')
            return (
              <div key={i} className="flex items-start gap-3 rounded-xl border p-4"
                style={{ borderColor: 'rgba(200,85,48,0.15)', background: 'rgba(200,85,48,0.03)' }}>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                  style={{ background: 'rgba(200,85,48,0.12)', color: 'var(--terra)' }}>
                  {i + 1}
                </span>
                <p className="text-[12.5px] leading-[1.7]" style={{ color: 'var(--txtl)' }}>
                  {rest.length > 0 ? (
                    <>
                      <span className="font-bold" style={{ color: 'var(--txt)' }}>{label}</span>
                      {' → '}{rest.join(' → ')}
                    </>
                  ) : pt}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
