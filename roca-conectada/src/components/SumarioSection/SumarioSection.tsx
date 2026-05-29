import SectionHero from '@/components/ui/SectionHero'
import { AcronymText } from '@/components/ui/AcronymText'
import type { S1Data } from '@/types/proposal'

export const componentMeta = { slug: 'sumario-section', label: 'Sumário Executivo' }

export type SumarioSectionProps = S1Data

const badgeStyle: Record<string, { bg: string; color: string }> = {
  primary: { bg: 'var(--pale)',  color: 'var(--p)' },
  blue:    { bg: 'var(--sagep)', color: 'var(--sage)' },
  amber:   { bg: 'var(--goldp)', color: 'var(--gold)' },
}

export default function SumarioSection({ number, title, subtitle, headline, heroImage, heroCaption, heroStatement, heroObjectPosition, stats, problemStatement, summary, whyNow, editalResults, institutionalStructure }: SumarioSectionProps) {
  return (
    <section id="s1" className="relative overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20" style={{ background: 'var(--bg)' }}>
      <span aria-hidden className="pointer-events-none absolute right-4 top-4 hidden select-none text-[180px] font-bold leading-none opacity-[0.025] sm:block"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>1</span>
      {heroImage && <SectionHero image={heroImage} caption={heroCaption} statement={heroStatement} objectPosition={heroObjectPosition} />}

      <div className="relative mb-10 lg:mb-14">
        <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-[3px]"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.04)', color: 'var(--txtll)' }}>
          📋 {number}
        </span>
        {headline && (
          <p className="mb-3 text-[16px] font-bold italic leading-[1.2] sm:text-[19px] lg:text-[22px]"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}>
            <AcronymText text={headline} />
          </p>
        )}
        <h2 className="mb-3 text-[26px] font-bold leading-[1.05] tracking-[-0.3px] sm:text-[34px] lg:text-[44px]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}><AcronymText text={title} /></h2>
        <p className="text-[14px] italic leading-relaxed sm:text-[15px]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txtl)' }}><AcronymText text={subtitle} /></p>
      </div>

      {problemStatement && (
        <div className="mb-8 rounded-2xl border-l-[3px] px-5 py-5 sm:px-7 sm:py-6"
          style={{ borderColor: 'var(--terra)', background: 'var(--bg-card)' }}>
          <div className="mb-3 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--terra)' }}>
            ⚠️ O Problema
          </div>
          <p className="text-[14px] leading-[1.85] sm:text-[15px]" style={{ color: 'var(--txt)' }}>
            <AcronymText text={problemStatement} />
          </p>
        </div>
      )}

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((s, i) => (
          <div key={i} className="rounded-2xl border p-5 sm:p-6"
            style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
            <span className="mb-3 block text-3xl">{s.icon}</span>
            <span className="block text-[32px] font-bold leading-tight sm:text-[38px]"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--p)' }}>{s.value}</span>
            <span className="mt-1.5 block text-[13px] leading-snug"
              style={{ color: 'var(--txtl)' }}><AcronymText text={s.label} /></span>
          </div>
        ))}
      </div>

      <div className="mb-8 rounded-2xl border-l-[3px] p-5 text-[14px] leading-[1.8] sm:p-7 sm:text-[14.5px]"
        style={{ borderColor: 'var(--p)', background: 'var(--bg-card)', color: 'var(--txtl)' }}>
        <div className="mb-3 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--p)' }}>
          💡 A Solução
        </div>
        <AcronymText text={summary} />
      </div>

      {whyNow && whyNow.length > 0 && (
        <div className="mb-8">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
            ⏱ Por Que Agora — e Por Que Este Projeto
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyNow.map((item, i) => (
              <div key={i} className="rounded-2xl border p-5"
                style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
                <div className="mb-2 text-[26px] leading-none">{item.icon}</div>
                <div className="mb-2 text-[13px] font-bold" style={{ color: 'var(--txt)' }}><AcronymText text={item.title} /></div>
                <p className="text-[12.5px] leading-[1.75]" style={{ color: 'var(--txtl)' }}><AcronymText text={item.body} /></p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border p-5 sm:p-6"
          style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[2.5px]"
            style={{ color: 'var(--p)' }}>Resultados do Edital Atendidos</div>
          <div className="flex flex-col gap-3">
            {editalResults.map((r, i) => (
              <div key={i} className="flex items-start gap-2.5 text-[13.5px] leading-snug"
                style={{ color: 'var(--txtl)' }}>
                <span style={{ color: 'var(--terra)' }}>✅</span>
                <span><AcronymText text={r} /></span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border p-5 sm:p-6"
          style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[2.5px]"
            style={{ color: 'var(--p)' }}>Estrutura Institucional</div>
          <div className="flex flex-col gap-3">
            {institutionalStructure.map((r, i) => {
              const st = badgeStyle[r.badgeVariant] ?? badgeStyle.primary
              return (
                <div key={i} className="flex items-center gap-3">
                  <span className="rounded-full px-3 py-1 text-[11px] font-bold"
                    style={{ background: st.bg, color: st.color }}>{r.badge}</span>
                  <span className="text-[13.5px]" style={{ color: 'var(--txtl)' }}><AcronymText text={r.label} /></span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
