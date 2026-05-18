'use client'

import { useState } from 'react'
import SectionHero from '@/components/ui/SectionHero'
import type { S3Data } from '@/types/proposal'

export const componentMeta = { slug: 'objetivos-section', label: 'Objetivos' }

export type ObjetivosSectionProps = S3Data

export default function ObjetivosSection({ number, title, subtitle, headline, heroImage, heroCaption, heroStatement, heroObjectPosition, generalObjective, axes, theoryOfChange }: ObjetivosSectionProps) {
  const [activeAxis, setActiveAxis] = useState(axes[0]?.id ?? '')

  return (
    <section id="s3" className="relative overflow-hidden px-16 py-20" style={{ background: 'var(--bg)' }}>
      <span aria-hidden className="pointer-events-none absolute right-8 top-4 select-none text-[180px] font-bold leading-none opacity-[0.025]"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>3</span>
      {heroImage && <SectionHero image={heroImage} caption={heroCaption} statement={heroStatement} objectPosition={heroObjectPosition} />}

      <div className="relative mb-14">
        <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-[3px]"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.04)', color: 'var(--txtll)' }}>
          🎯 {number}
        </span>
        {headline && (
          <p className="mb-3 text-[22px] font-bold italic leading-[1.2]"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}>
            {headline}
          </p>
        )}
        <h2 className="mb-3 text-[44px] font-bold leading-[1.05] tracking-[-0.3px]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>{title}</h2>
        <p className="text-[15px] italic leading-relaxed"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txtl)' }}>{subtitle}</p>
      </div>

      {/* general objective */}
      <div className="mb-8 rounded-2xl border-l-[3px] p-7 text-[14.5px] leading-[1.8]"
        style={{ borderColor: 'var(--p)', background: 'var(--bg-card)', color: 'var(--txtl)' }}>
        <span className="font-bold" style={{ color: 'var(--p)' }}>Objetivo Geral — </span>
        {generalObjective}
      </div>

      {/* theory of change */}
      {theoryOfChange && (
        <div className="mb-8 mt-2">
          <div className="mb-3 text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--txtll)' }}>
            🔗 Teoria da Mudança — Cadeia Lógica Completa
          </div>
          <div className="mb-4 rounded-2xl border-l-[3px] px-6 py-4"
            style={{ borderColor: 'var(--p)', background: 'rgba(111,168,118,0.05)' }}>
            <p className="text-[13.5px] italic leading-[1.8]" style={{ color: 'var(--txtl)' }}>
              <span className="font-bold not-italic" style={{ color: 'var(--p)' }}>Premissa — </span>
              {theoryOfChange.premise}
            </p>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {theoryOfChange.chain.map((stage, i) => (
              <div key={i} className="rounded-2xl border p-4"
                style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
                <div className="mb-2 text-[9px] font-bold uppercase tracking-[2px]" style={{ color: 'var(--p)' }}>
                  {stage.stage}
                </div>
                <ul className="flex flex-col gap-1.5">
                  {stage.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-1.5 text-[11.5px] leading-[1.6]" style={{ color: 'var(--txtl)' }}>
                      <span style={{ color: 'var(--p)' }}>›</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* axis tabs */}
      <div className="flex flex-wrap gap-2 mb-0">
        {axes.map((ax) => (
          <button
            key={ax.id}
            onClick={() => setActiveAxis(ax.id)}
            className="rounded-t-xl px-5 py-3 text-[12.5px] font-medium transition-all duration-150"
            style={{
              background: activeAxis === ax.id ? 'var(--bg-card)' : 'transparent',
              border: activeAxis === ax.id ? '1px solid var(--bdr-strong)' : '1px solid transparent',
              borderBottom: activeAxis === ax.id ? '1px solid var(--bg-card)' : '1px solid transparent',
              color: activeAxis === ax.id ? 'var(--txt)' : 'var(--txtl)',
            }}
          >
            {ax.label}
          </button>
        ))}
      </div>

      {axes.map((ax) => (
        <div key={ax.id}
          className={`${activeAxis === ax.id ? 'block' : 'hidden'} rounded-b-2xl rounded-tr-2xl border p-7`}
          style={{ borderColor: 'var(--bdr-strong)', background: 'var(--bg-card)' }}>
          <div className="flex flex-col gap-5">
            {ax.objectives.map((obj, i) => (
              <div key={obj.id} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-[11px] font-bold"
                  style={{ background: 'var(--pale)', color: 'var(--p)' }}>{i + 1}</span>
                <span className="pt-0.5 text-[14px] leading-[1.75]" style={{ color: 'var(--txtl)' }}>
                  <strong style={{ color: 'var(--txt)' }}>{obj.code}</strong> {obj.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
