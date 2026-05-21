'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'

export const componentMeta = { slug: 'sidebar', label: 'Sidebar Navigation' }

export interface SidebarSection {
  id: string
  label: string
  num: string
}

export interface SidebarProps {
  projectName: string
  call: string
  deadline: string
  sections: SidebarSection[]
}

interface PdfEntry {
  label: string
  file: string
  tag?: string
}

const EDITAL_DOCS: PdfEntry[] = [
  { label: 'Edital Principal',     file: '25_03_2026_AgriFam-ICT_2026_Edital (2).pdf',       tag: 'Edital' },
  { label: 'Anexo 1',              file: '25_03_2026_AgriFam-ICT_2026_Anexo_1.pdf',           tag: 'Anx' },
  { label: 'Anexo 2',              file: '25_03_2026_AgriFam-ICT_2026_Anexo_2.pdf',           tag: 'Anx' },
  { label: 'Anexo 2 + demais',     file: '25_03_2026_AgriFam-ICT_2026_Anexo2_e_demais.pdf',  tag: 'Anx' },
  { label: 'Anexo 3',              file: '25_03_2026_AgriFam-ICT_2026_Anexo_3.pdf',           tag: 'Anx' },
  { label: 'Anexo 4',              file: '25_03_2026_AgriFam-ICT_2026_Anexo_4.pdf',           tag: 'Anx' },
  { label: 'Anexo 5',              file: '25_03_2026_AgriFam-ICT_2026_Anexo_5.pdf',           tag: 'Anx' },
  { label: 'Anexo 6',              file: '25_03_2026_AgriFam-ICT_2026_Anexo_6.pdf',           tag: 'Anx' },
  { label: 'Telas FAP',            file: '09_04_2026_Telas_FAP_e_Numero_de_Caracteres.pdf',   tag: 'FAP' },
]

function useCountdown(deadline: string) {
  const [days, setDays] = useState<number | null>(null)
  useEffect(() => {
    const calc = () => setDays(Math.ceil((new Date(deadline).getTime() - Date.now()) / 86400000))
    calc()
    const id = setInterval(calc, 60000)
    return () => clearInterval(id)
  }, [deadline])
  return days
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '')
  const key = ids.join(',')
  useEffect(() => {
    const handler = () => {
      let cur = ids[0] ?? ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 200) cur = id
      }
      setActive(cur)
    }
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])
  return active
}

function PdfViewer({ label, url, onClose }: { label: string; url: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  return createPortal(
    <div
      style={{
        position: 'fixed', top: 0, bottom: 0, left: 270, right: 0, zIndex: 200,
        background: '#0a0c08',
        display: 'flex', flexDirection: 'column',
        borderLeft: '1px solid rgba(237,229,211,0.08)',
      }}
    >
      {/* header */}
      <div
        style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '12px 20px',
          borderBottom: '1px solid rgba(237,229,211,0.08)',
          background: '#0d100b',
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: 16, lineHeight: 1 }}>📄</span>
        <span style={{ flex: 1, fontSize: 13, fontWeight: 600, color: 'var(--txt)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {label}
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase',
            color: 'var(--txtll)', textDecoration: 'none', padding: '4px 10px',
            border: '1px solid rgba(237,229,211,0.1)', borderRadius: 8,
            marginRight: 4,
          }}
        >
          Abrir ↗
        </a>
        <button
          onClick={onClose}
          style={{
            background: 'rgba(200,85,48,0.1)', border: '1px solid rgba(200,85,48,0.2)',
            borderRadius: 8, width: 28, height: 28, cursor: 'pointer',
            color: 'var(--terra)', fontSize: 14, fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          ✕
        </button>
      </div>
      {/* iframe */}
      <iframe
        src={url}
        title={label}
        style={{ flex: 1, border: 'none', display: 'block' }}
      />
    </div>,
    document.body
  )
}

export default function Sidebar({ projectName, call, deadline, sections }: SidebarProps) {
  const days = useCountdown(deadline)
  const active = useActiveSection(sections.map((s) => s.id))
  const [docsOpen, setDocsOpen] = useState(false)
  const [activePdf, setActivePdf] = useState<{ label: string; url: string } | null>(null)
  const [mounted, setMounted] = useState(false)
  const closeRef = useRef<() => void>(() => setActivePdf(null))
  closeRef.current = () => setActivePdf(null)

  useEffect(() => { setMounted(true) }, [])

  function openPdf(doc: PdfEntry) {
    setActivePdf({ label: doc.label, url: `/api/edital/${encodeURIComponent(doc.file)}` })
  }

  return (
    <>
      <aside
        className="fixed left-0 top-0 z-50 flex h-screen w-[270px] flex-col overflow-y-auto"
        style={{
          background: 'linear-gradient(180deg, #09080606 0%, #0b0e09 40%, #090c07 100%)',
          borderRight: '1px solid rgba(237,229,211,0.05)',
        }}
      >
        {/* project identity */}
        <div className="px-7 pb-6 pt-8" style={{ borderBottom: '1px solid rgba(237,229,211,0.06)' }}>
          <span className="mb-3 block text-[28px] leading-none">🌾</span>
          <div className="text-[21px] font-bold leading-[1.2] tracking-[-0.3px]"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
            {projectName}
          </div>
          <div className="mt-2.5 text-[9px] font-semibold uppercase leading-relaxed tracking-[2px]"
            style={{ color: 'var(--txtll)' }}>{call}</div>
        </div>

        {/* navigation */}
        <nav className="flex-1 py-5">
          <span className="block px-7 pb-2.5 text-[8px] font-bold uppercase tracking-[3px]"
            style={{ color: 'var(--txtll)' }}>Seções</span>

          {sections.map((s) => (
            <Link
              key={s.id}
              href={`#${s.id}`}
              className={`flex items-center gap-3 border-l-2 px-6 py-2.5 text-[12.5px] font-medium transition-all duration-150 ${
                active === s.id ? 'border-[#c85530]' : 'border-transparent'
              }`}
              style={{
                background: active === s.id ? 'rgba(200,85,48,0.08)' : 'transparent',
                color: active === s.id ? 'var(--txt)' : 'var(--txtl)',
              }}
            >
              <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-md text-[9px] font-bold"
                style={{
                  background: active === s.id ? 'var(--terra)' : 'rgba(237,229,211,0.06)',
                  color: active === s.id ? 'var(--txt)' : 'var(--txtll)',
                }}>
                {s.num}
              </span>
              <span className="truncate">{s.label}</span>
            </Link>
          ))}
        </nav>

        {/* edital documents */}
        <div style={{ borderTop: '1px solid rgba(237,229,211,0.06)', padding: '10px 0' }}>
          <button
            onClick={() => setDocsOpen((v) => !v)}
            className="flex w-full items-center gap-2.5 px-6 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[1.8px] transition-colors"
            style={{ color: docsOpen ? 'var(--txtl)' : 'var(--txtll)', background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            <span style={{ fontSize: 13 }}>📁</span>
            <span style={{ flex: 1 }}>Edital &amp; Anexos</span>
            <span style={{ fontSize: 9, opacity: 0.6 }}>{docsOpen ? '▲' : '▼'}</span>
          </button>

          {docsOpen && (
            <div style={{ paddingBottom: 4 }}>
              {EDITAL_DOCS.map((doc) => {
                const isActive = activePdf?.label === doc.label
                return (
                  <button
                    key={doc.file}
                    onClick={() => openPdf(doc)}
                    className="flex w-full items-center gap-2.5 px-5 py-2 text-left transition-colors"
                    style={{
                      background: isActive ? 'rgba(212,150,14,0.1)' : 'transparent',
                      border: 'none', cursor: 'pointer',
                      borderLeft: isActive ? '2px solid var(--gold)' : '2px solid transparent',
                    }}
                  >
                    <span style={{ fontSize: 13, lineHeight: 1, flexShrink: 0 }}>📄</span>
                    <span className="flex-1 truncate text-[12px]"
                      style={{ color: isActive ? 'var(--gold)' : 'var(--txtl)' }}>
                      {doc.label}
                    </span>
                    {doc.tag && (
                      <span style={{
                        fontSize: 8, fontWeight: 700, letterSpacing: '1px',
                        padding: '1px 5px', borderRadius: 4,
                        background: 'rgba(237,229,211,0.06)', color: 'var(--txtll)',
                        flexShrink: 0,
                      }}>
                        {doc.tag}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* deadline */}
        <div className="mx-5 mb-6 mt-2 rounded-2xl p-4 text-center"
          style={{ background: 'var(--goldp)', border: '1px solid rgba(212,150,14,0.18)' }}>
          <div className="mb-1 text-[8px] font-bold uppercase tracking-[2.5px]"
            style={{ color: 'var(--txtll)' }}>Prazo de submissão</div>
          <span className="my-1.5 block text-[19px] font-bold"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--gold)' }}>26/06/2026</span>
          <div className="text-[11px]" style={{ color: 'var(--txtl)' }}>
            {days !== null
              ? <><span className="font-bold" style={{ color: 'var(--gold)' }}>{days}</span> dias restantes</>
              : '…'}
          </div>
        </div>
      </aside>

      {mounted && activePdf && (
        <PdfViewer label={activePdf.label} url={activePdf.url} onClose={closeRef.current} />
      )}
    </>
  )
}
