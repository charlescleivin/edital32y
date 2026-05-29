import SectionHero from '@/components/ui/SectionHero'
import type { S12Data } from '@/types/proposal'

export type LongPrazoSectionProps = S12Data

const typeColors: Record<string, string> = {
  'public-federal': 'var(--sage)',
  'public-state':   'var(--p)',
  'international':  'var(--gold)',
  'operational':    'var(--terra)',
}
const typeTextColors: Record<string, string> = {
  'public-federal': 'var(--sage)',
  'public-state':   'var(--p)',
  'international':  'var(--gold)',
  'operational':    'var(--terra)',
}

export default function LongPrazoSection({
  number, title, subtitle, headline, heroImage, heroCaption, heroObjectPosition,
  visionStatement, visionSub, phases, thatpixCallout, fundingPaths, serverTransition,
}: LongPrazoSectionProps) {
  return (
    <section id="s12" className="relative overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20" style={{ background: 'var(--bg)' }}>
      <span aria-hidden className="pointer-events-none absolute right-8 top-4 select-none hidden sm:block text-[180px] font-bold leading-none opacity-[0.025]"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>12</span>

      {heroImage && <SectionHero image={heroImage} caption={heroCaption} objectPosition={heroObjectPosition} />}

      {/* Header */}
      <div className="relative mb-14">
        <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-[3px]"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.04)', color: 'var(--txtll)' }}>
          {number}
        </span>
        {headline && (
          <p className="mb-3 text-[16px] sm:text-[19px] lg:text-[22px] font-bold italic leading-[1.2]"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}>
            {headline}
          </p>
        )}
        <h2 className="mb-3 text-[26px] sm:text-[34px] lg:text-[44px] font-bold leading-[1.05] tracking-[-0.3px]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>{title}</h2>
        <p className="text-[15px] italic leading-relaxed"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txtl)' }}>{subtitle}</p>
      </div>

      {/* Vision callout */}
      <div className="relative mb-14 overflow-hidden rounded-3xl border p-8"
        style={{ borderColor: 'rgba(111,168,118,0.3)', background: 'rgba(111,168,118,0.06)' }}>
        <div className="absolute -right-6 -top-6 text-[120px] opacity-[0.04] select-none" aria-hidden>🌿</div>
        <div className="mb-2 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--sage)' }}>
          Visão de Longo Prazo
        </div>
        <p className="mb-4 text-[18px] font-bold leading-[1.5]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
          {visionStatement}
        </p>
        <p className="text-[14px] leading-[1.8]" style={{ color: 'var(--txtl)' }}>{visionSub}</p>
      </div>

      {/* Phase timeline */}
      <div className="mb-14">
        <div className="mb-6 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
          Plano de Quatro Movimentos
        </div>
        <div className="relative flex flex-col gap-0">
          {phases.map((phase, i) => (
            <div key={phase.id} className="relative flex gap-6">
              {/* Timeline spine */}
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-[22px]"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--bdr)' }}>
                  {phase.icon}
                </div>
                {i < phases.length - 1 && (
                  <div className="w-px flex-1 my-1" style={{ background: 'var(--bdr)', minHeight: '24px' }} />
                )}
              </div>
              {/* Content */}
              <div className="mb-6 flex-1 rounded-2xl border p-6" style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
                <div className="mb-1 text-[10px] font-bold uppercase tracking-[2px]" style={{ color: 'var(--txtll)' }}>
                  {phase.period}
                </div>
                <div className="mb-2 text-[16px] font-bold" style={{ color: 'var(--txt)' }}>{phase.title}</div>
                <p className="mb-4 text-[13px] leading-[1.8]" style={{ color: 'var(--txtl)' }}>{phase.description}</p>
                <ul className="flex flex-col gap-1.5">
                  {phase.milestones.map((m, j) => (
                    <li key={j} className="flex items-start gap-2 text-[12.5px]" style={{ color: 'var(--txtl)' }}>
                      <span className="mt-[3px] shrink-0 text-[10px]" style={{ color: 'var(--sage)' }}>✓</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* THATPIX callout */}
      <div className="mb-14 overflow-hidden rounded-3xl border p-8"
        style={{ borderColor: 'rgba(8,145,178,0.3)', background: 'rgba(8,145,178,0.05)' }}>
        <div className="mb-2 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--p)' }}>
          THATPIX — Capital Técnico Insubstituível
        </div>
        <div className="mb-3 text-[17px] font-bold" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
          {thatpixCallout.title}
        </div>
        <p className="mb-6 text-[13.5px] leading-[1.8]" style={{ color: 'var(--txtl)' }}>{thatpixCallout.body}</p>
        <div className="flex flex-col gap-3">
          {thatpixCallout.points.map((point, i) => {
            const [label, ...rest] = point.split(':')
            return (
              <div key={i} className="flex items-start gap-3 rounded-xl border p-4"
                style={{ borderColor: 'rgba(8,145,178,0.2)', background: 'rgba(8,145,178,0.04)' }}>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                  style={{ background: 'rgba(8,145,178,0.15)', color: 'var(--p)' }}>{i + 1}</span>
                <p className="text-[12.5px] leading-[1.7]" style={{ color: 'var(--txtl)' }}>
                  <span className="font-bold" style={{ color: 'var(--txt)' }}>{label}:</span>
                  {rest.join(':')}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Funding paths */}
      <div className="mb-14">
        <div className="mb-6 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
          Caminhos de Captação — Rodada de Escala
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {fundingPaths.map((fp) => (
            <div key={fp.id} className="rounded-2xl border p-5"
              style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)', borderLeftWidth: '3px', borderLeftColor: fp.color }}>
              <div className="mb-1 flex items-start justify-between gap-3">
                <div className="text-[14px] font-bold" style={{ color: 'var(--txt)' }}>{fp.name}</div>
                <span className="shrink-0 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[1.5px]"
                  style={{ background: `${fp.color}18`, color: typeTextColors[fp.type] ?? fp.color }}>
                  {fp.typeLabel}
                </span>
              </div>
              <div className="mb-2 text-[11px]" style={{ color: 'var(--txtll)' }}>{fp.funder}</div>
              <p className="mb-3 text-[12.5px] leading-[1.7]" style={{ color: 'var(--txtl)' }}>{fp.description}</p>
              <div className="flex items-start gap-1.5 text-[11.5px]">
                <span style={{ color: fp.fitLevel === 'high' ? 'var(--sage)' : 'var(--gold)' }}>
                  {fp.fitLevel === 'high' ? '●' : '◐'}
                </span>
                <span style={{ color: 'var(--txtl)' }}>{fp.fit}</span>
              </div>
              {fp.amount && (
                <div className="mt-2 text-[11px] font-bold" style={{ color: fp.color }}>{fp.amount}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Server transition */}
      <div className="rounded-3xl border p-8" style={{ borderColor: 'rgba(26,92,56,0.3)', background: 'rgba(26,92,56,0.06)' }}>
        <div className="mb-2 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--sage)' }}>
          Transição do Servidor
        </div>
        <div className="mb-3 text-[17px] font-bold" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
          {serverTransition.title}
        </div>
        <p className="mb-6 text-[13.5px] leading-[1.8]" style={{ color: 'var(--txtl)' }}>{serverTransition.body}</p>
        <div className="flex flex-col gap-2">
          {serverTransition.steps.map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                style={{ background: 'rgba(111,168,118,0.15)', color: 'var(--sage)' }}>
                {i + 1}
              </span>
              <p className="text-[12.5px] leading-[1.7]" style={{ color: 'var(--txtl)' }}>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
