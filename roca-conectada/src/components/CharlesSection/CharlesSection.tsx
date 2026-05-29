'use client'

import { useState } from 'react'
import type { CharlesData } from '@/types/proposal'

export const componentMeta = { slug: 'charles-section', label: 'Charles Cleivin' }

export type CharlesSectionProps = CharlesData

export default function CharlesSection({
  name, title, subtitle, location, bio,
  highlights, skills, projects, softSkills, videos, cvFile,
  heroImage, heroCaption, heroHeadline, heroSubtext, badgeLabel,
  gallery, profilePhoto, isPlaceholder,
}: CharlesSectionProps) {
  const [cvOpen, setCvOpen] = useState(false)

  const featuredVideo = videos?.[0] ?? null
  const extraVideos = videos?.slice(1) ?? []

  return (
    <section id="s-charles" className="relative overflow-hidden px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20" style={{ background: 'var(--bg)' }}>
      {/* watermark */}
      <span aria-hidden className="pointer-events-none absolute right-6 top-2 select-none hidden sm:block text-[180px] font-bold leading-none opacity-[0.025]"
        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>CC</span>

      {/* ── HERO BANNER ── */}
      {heroImage && (
        <div className="relative -mx-4 -mt-10 sm:-mx-8 sm:-mt-14 lg:-mx-16 lg:-mt-20 mb-8 sm:mb-14 h-[260px] sm:h-[360px] lg:h-[460px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={heroImage} alt="Charles Cleivin presenting at international event"
            className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to right, rgba(12,11,9,0.97) 0%, rgba(12,11,9,0.75) 40%, rgba(12,11,9,0.2) 75%, transparent 100%)',
          }} />
          <div className="absolute inset-0 flex flex-col justify-end p-4 pb-5 sm:p-10 sm:pb-10 lg:p-16 lg:pb-14">
            {heroCaption && (
              <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-[3px]"
                style={{ borderColor: 'rgba(200,85,48,0.4)', background: 'rgba(200,85,48,0.1)', color: 'var(--terra)' }}>
                🌏 {heroCaption}
              </span>
            )}
            <h2 className="mb-4 text-[26px] sm:text-[38px] lg:text-[52px] font-bold leading-[1.02] tracking-[-0.5px]"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
              {heroHeadline ? heroHeadline.split('\n').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              )) : <><span>Inventor.</span><br /><span>Cientista.</span><br /><span>Comunicador Global.</span></>}
            </h2>
            <p className="max-w-[500px] text-[14px] leading-[1.85]" style={{ color: 'var(--txtl)' }}>
              {heroSubtext ?? 'Premiado internacionalmente, com presença comprovada em competições na China, Emirados Árabes Unidos e Brasil. Tecnologias próprias apresentadas em palcos globais.'}
            </p>
          </div>
        </div>
      )}

      {/* ── section badge + name ── */}
      <div className="relative mb-12">
        <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-[3px]"
          style={{ borderColor: 'var(--bdr)', background: 'rgba(237,229,211,0.04)', color: 'var(--txtll)' }}>
          {badgeLabel ?? '👨‍💻 Co-Pesquisador'}
        </span>
        <h2 className="mb-2 text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.02] tracking-[-0.5px]"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>{name}</h2>
        <p className="mb-1 text-[16px] font-semibold" style={{ color: 'var(--terra)' }}>{title}</p>
        <p className="text-[14px] italic" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txtl)' }}>
          {subtitle} · {location}
        </p>
      </div>

      {/* ── FEATURED INTERVIEW — full-width, leads the section ── */}
      {featuredVideo && (
        <div className="mb-14 overflow-hidden rounded-2xl border"
          style={{ borderColor: 'rgba(200,85,48,0.25)', background: 'var(--bg-card)' }}>

          {/* header bar */}
          <div className="flex flex-wrap items-center gap-2 px-4 py-3 sm:px-7 sm:py-4"
            style={{ background: 'rgba(200,85,48,0.08)', borderBottom: '1px solid rgba(200,85,48,0.15)' }}>
            <span className="text-[9px] font-bold uppercase tracking-[3px]"
              style={{ color: 'var(--terra)' }}>🎙 Entrevista Internacional</span>
            <span className="rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[1.5px]"
              style={{ background: 'rgba(200,85,48,0.15)', color: 'var(--terra)' }}>🇨🇳 China</span>
            <span className="rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[1.5px]"
              style={{ background: 'rgba(111,168,118,0.12)', color: 'var(--sage)' }}>🌐 Em inglês</span>
            <span className="hidden sm:inline-block rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[1.5px]"
              style={{ background: 'rgba(212,150,14,0.12)', color: 'var(--gold)' }}>📡 Reconhecimento internacional</span>
          </div>

          {/* two-column: context LEFT · video RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_62%]">

            {/* left — context */}
            <div className="flex flex-col justify-between p-5 sm:p-8"
              style={{ borderRight: '1px solid rgba(200,85,48,0.12)' }}>

              {/* headline */}
              <div>
                <h3 className="mb-4 text-[26px] font-bold leading-[1.2] tracking-[-0.2px]"
                  style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
                  Tecnologia inventada por Charles apresentada em evento internacional na China
                </h3>
                <p className="mb-6 text-[13.5px] leading-[1.85]" style={{ color: 'var(--txtl)' }}>
                  Charles foi convidado para apresentar, em inglês, uma tecnologia de sua própria autoria em um evento internacional realizado na China. A entrevista demonstra reconhecimento técnico global, domínio do inglês em contexto científico e a capacidade de comunicar inovação complexa para audiências internacionais — habilidades diretamente transferíveis para a execução e disseminação do SABIA.
                </p>
              </div>

              {/* credential pills */}
              <div className="flex flex-col gap-2.5">
                {[
                  { icon: '🏆', text: 'Inventor — tecnologia apresentada no exterior' },
                  { icon: '🌏', text: 'Evento internacional — China' },
                  { icon: '🗣️', text: 'Apresentação em inglês' },
                  { icon: '📺', text: 'Entrevista pública registrada em vídeo' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 rounded-xl px-4 py-2.5"
                    style={{ background: 'rgba(237,229,211,0.04)', border: '1px solid var(--bdr)' }}>
                    <span className="text-[16px] leading-none">{item.icon}</span>
                    <span className="text-[12.5px] font-medium" style={{ color: 'var(--txtl)' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* right — video embed */}
            <div className="relative w-full" style={{ paddingBottom: '0', aspectRatio: 'unset' }}>
              <iframe
                src={featuredVideo.url}
                className="w-full h-full"
                style={{ border: 'none', minHeight: '360px', display: 'block' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={featuredVideo.title}
              />
            </div>
          </div>
        </div>
      )}

      {/* ── placeholder notice ── */}
      {isPlaceholder && (
        <div className="mb-10 rounded-2xl border-l-[3px] px-7 py-6"
          style={{ borderColor: 'var(--gold)', background: 'rgba(212,150,14,0.06)' }}>
          <div className="mb-1 text-[9px] font-bold uppercase tracking-[2.5px]" style={{ color: 'var(--gold)' }}>
            ⏳ Perfil em Construção
          </div>
          <p className="text-[13.5px] leading-[1.8]" style={{ color: 'var(--txtl)' }}>
            Informações detalhadas serão adicionadas em breve. Deposite os dados em{' '}
            <code className="rounded px-1.5 py-0.5 text-[12px]"
              style={{ background: 'rgba(212,150,14,0.15)', color: 'var(--gold)' }}>
              data/team/
            </code>.
          </p>
        </div>
      )}

      {/* ── bio + highlights LEFT | CV viewer RIGHT ── */}
      <div className={`mb-10 grid gap-8 ${cvFile ? 'grid-cols-1 lg:grid-cols-[1fr_400px]' : 'grid-cols-1'}`}>

        <div className="flex flex-col gap-6">
          {/* profile photo + bio */}
          <div className="rounded-2xl border-l-[3px] p-7"
            style={{ borderColor: 'var(--terra)', background: 'var(--bg-card)' }}>
            {profilePhoto && (
              <div className="mb-5 flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={profilePhoto} alt={name}
                  className="h-[72px] w-[72px] shrink-0 rounded-full object-cover"
                  style={{
                    objectPosition: 'center 15%',
                    border: '2px solid rgba(200,85,48,0.4)',
                    boxShadow: '0 0 0 4px rgba(200,85,48,0.07)',
                  }} />
                <div>
                  <div className="text-[14px] font-bold" style={{ color: 'var(--txt)' }}>{name}</div>
                  <div className="text-[12px]" style={{ color: 'var(--terra)' }}>{title}</div>
                  <div className="text-[11.5px] italic" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txtl)' }}>{location}</div>
                </div>
              </div>
            )}
            <p className="text-[14.5px] leading-[1.85]" style={{ color: 'var(--txtl)' }}>{bio}</p>
          </div>

          {/* highlights — 36px Playfair numbers */}
          {highlights && highlights.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <div key={i} className="rounded-2xl border p-5"
                  style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
                  <span className="block text-[36px] font-bold leading-tight"
                    style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}>{h.value}</span>
                  <span className="mt-1 block text-[12px]" style={{ color: 'var(--txtl)' }}>{h.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* soft skills */}
          {softSkills && softSkills.length > 0 && (
            <div className="rounded-2xl border p-6"
              style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
              <div className="mb-4 text-[10px] font-bold uppercase tracking-[2.5px]"
                style={{ color: 'var(--txtll)' }}>Perfil Profissional</div>
              <div className="flex flex-col gap-2.5">
                {softSkills.map((s, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[13.5px]"
                    style={{ color: 'var(--txtl)' }}>
                    <span style={{ color: 'var(--sage)' }}>◆</span>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CV viewer */}
        {cvFile && (
          <div className="self-start overflow-hidden rounded-2xl border"
            style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
            <div className="flex items-center justify-between px-5 py-3.5"
              style={{ background: 'var(--bg-raised)', borderBottom: '1px solid var(--bdr)' }}>
              <span className="text-[10px] font-bold uppercase tracking-[2px]"
                style={{ color: 'var(--txtll)' }}>Curriculum Vitae</span>
              <div className="flex gap-2">
                <a href={cvFile} target="_blank" rel="noopener noreferrer"
                  className="rounded-lg px-3 py-1.5 text-[11px] font-bold transition-opacity hover:opacity-80"
                  style={{ background: 'var(--bg-elevated)', color: 'var(--txt)', border: '1px solid var(--bdr-strong)' }}>
                  ↗ Abrir
                </a>
                <a href={cvFile} download
                  className="rounded-lg px-3 py-1.5 text-[11px] font-bold transition-opacity hover:opacity-80"
                  style={{ background: 'var(--terra)', color: 'var(--txt)' }}>
                  ↓ Baixar
                </a>
              </div>
            </div>
            <div style={{ height: cvOpen ? '680px' : '440px', transition: 'height 0.3s ease' }}>
              <iframe src={cvFile} className="w-full h-full"
                style={{ border: 'none', background: '#fff' }} title={`${name} CV`} />
            </div>
            <button onClick={() => setCvOpen(v => !v)}
              className="w-full py-2.5 text-[11px] font-semibold transition-opacity hover:opacity-70"
              style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--bdr)', color: 'var(--txtl)' }}>
              {cvOpen ? '▲ Mostrar menos' : '▼ Ver CV completo'}
            </button>
          </div>
        )}
      </div>

      {/* ── photo gallery ── */}
      {gallery && gallery.length > 0 && (
        <div className="mb-10">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[2.5px]"
            style={{ color: 'var(--txtll)' }}>Reconhecimentos & Presenças Internacionais</div>

          {/* Featured cards — full width */}
          {gallery.filter(p => p.featured).map((photo, i) => photo.awards ? (
            /* Two-column awards layout — for cards with structured prize lists */
            <div key={`f${i}`} className="mb-4 overflow-hidden rounded-2xl border"
              style={{ borderColor: 'rgba(200,85,48,0.4)', background: 'var(--bg-card)' }}>
              <div className="grid grid-cols-1 sm:grid-cols-[400px_1fr]" style={{ minHeight: '360px' }}>
                {/* left — image */}
                <div className="relative overflow-hidden" style={{ minHeight: '220px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photo.src} alt={photo.caption}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 25%' }} />
                  <div className="absolute inset-0" style={{
                    background: 'linear-gradient(to right, rgba(12,11,9,0.05) 50%, rgba(23,20,17,0.98) 100%)',
                  }} />
                </div>
                {/* right — awards content */}
                <div className="flex flex-col justify-between p-5 sm:p-8"
                  style={{ borderLeft: '1px solid rgba(200,85,48,0.15)' }}>
                  <div>
                    {/* badges row */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[8px] font-bold uppercase tracking-[2px]"
                        style={{ borderColor: 'rgba(212,150,14,0.4)', background: 'rgba(212,150,14,0.08)', color: 'var(--gold)' }}>
                        ★ Maior Competição Científica do Brasil
                      </span>
                      <span className="inline-flex items-center rounded-full border px-3 py-1 text-[8px] font-bold uppercase tracking-[2px]"
                        style={{ borderColor: 'rgba(200,85,48,0.3)', background: 'rgba(200,85,48,0.06)', color: 'var(--terra)' }}>
                        {photo.badge}
                      </span>
                    </div>
                    {/* headline */}
                    <h4 className="mb-5 text-[26px] font-bold leading-[1.2]"
                      style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
                      {photo.caption}
                    </h4>
                    {/* award pills */}
                    <div className="flex flex-col gap-2">
                      {photo.awards.map((award, j) => (
                        <div key={j} className="flex items-center gap-3 rounded-xl px-4 py-2.5"
                          style={{ background: 'rgba(237,229,211,0.04)', border: '1px solid var(--bdr)' }}>
                          <span className="shrink-0 text-[17px] leading-none">{award.icon}</span>
                          <span className="text-[13px] font-medium leading-[1.4]"
                            style={{ color: 'var(--txtl)' }}>{award.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* arc narrative at bottom */}
                  {photo.context && (
                    <div className="mt-5 rounded-xl border-l-[3px] px-4 py-3"
                      style={{ borderColor: 'var(--terra)', background: 'rgba(200,85,48,0.05)' }}>
                      <p className="text-[12px] italic leading-[1.7]"
                        style={{ color: 'var(--txtl)' }}>{photo.context}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Original overlay layout — for featured photos without awards */
            <div key={`f${i}`} className="relative mb-4 overflow-hidden rounded-2xl border"
              style={{ borderColor: 'rgba(200,85,48,0.4)', height: '320px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover"
                style={{ objectPosition: 'center 25%' }} />
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to top, rgba(12,11,9,0.97) 0%, rgba(12,11,9,0.65) 40%, rgba(12,11,9,0.1) 100%)',
              }} />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-[8px] font-bold uppercase tracking-[2.5px]"
                  style={{ borderColor: 'rgba(212,150,14,0.5)', background: 'rgba(212,150,14,0.1)', color: 'var(--gold)' }}>
                  ★ Maior Competição Científica e de Engenharia do Brasil
                </div>
                <div className="mt-1 mb-2 text-[10px] font-bold uppercase tracking-[2px]"
                  style={{ color: 'var(--terra)' }}>{photo.badge}</div>
                <h4 className="mb-3 text-[20px] font-bold leading-[1.25]"
                  style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>{photo.caption}</h4>
                {photo.context && (
                  <p className="max-w-[720px] text-[13px] leading-[1.75]" style={{ color: 'var(--txtl)' }}>{photo.context}</p>
                )}
              </div>
            </div>
          ))}

          {/* Regular cards grid */}
          {gallery.filter(p => !p.featured).length > 0 && (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.filter(p => !p.featured).map((photo, i) => (
                <div key={i} className="relative overflow-hidden rounded-2xl border"
                  style={{ borderColor: 'var(--bdr)', height: photo.context ? '340px' : '285px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{
                    background: 'linear-gradient(to top, rgba(12,11,9,0.93) 0%, rgba(12,11,9,0.25) 55%, transparent 100%)',
                  }} />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="mb-1.5 block text-[9px] font-bold uppercase tracking-[2px]"
                      style={{ color: 'var(--terra)' }}>{photo.badge}</span>
                    <span className="block text-[12.5px] font-semibold leading-[1.35]"
                      style={{ color: 'var(--txt)' }}>{photo.caption}</span>
                    {photo.context && (
                      <p className="mt-2 text-[11.5px] leading-[1.65]" style={{ color: 'var(--txtl)' }}>{photo.context}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── skills ── */}
      {skills && skills.length > 0 && (
        <>
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[2.5px]"
            style={{ color: 'var(--txtll)' }}>Competências Técnicas</div>
          <div className="mb-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((sk, i) => (
              <div key={i} className="rounded-2xl border p-5"
                style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
                <div className="mb-3 text-[26px] leading-none">{sk.icon}</div>
                <div className="mb-3 text-[13px] font-bold" style={{ color: 'var(--txt)' }}>{sk.area}</div>
                <div className="flex flex-col gap-1.5">
                  {sk.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2 text-[12px]"
                      style={{ color: 'var(--txtl)' }}>
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: 'var(--sage)' }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ── projects ── */}
      {projects && projects.length > 0 && <div className="mb-4 text-[10px] font-bold uppercase tracking-[2.5px]"
        style={{ color: 'var(--txtll)' }}>Projetos Notáveis — Relevância Direta para o SABIA</div>}
      {projects && projects.length > 0 && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <div key={i} className="flex flex-col overflow-hidden rounded-2xl border"
            style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
            <div className="px-6 py-4" style={{ borderBottom: '1px solid var(--bdr)', background: 'var(--bg-raised)' }}>
              <div className="text-[14px] font-bold" style={{ color: 'var(--txt)' }}>{p.name}</div>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <p className="text-[13px] leading-[1.75]" style={{ color: 'var(--txtl)' }}>{p.description}</p>
              <div className="rounded-xl border-l-[3px] px-4 py-3 text-[12px] italic leading-[1.6]"
                style={{ borderColor: 'var(--p)', background: 'var(--pale)', color: 'var(--sage)' }}>
                {p.relevance}
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.tags.map((t, j) => (
                  <span key={j} className="rounded-full px-2.5 py-0.5 text-[10px] font-medium"
                    style={{ background: 'rgba(237,229,211,0.06)', color: 'var(--txtl)', border: '1px solid var(--bdr)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>}

      {/* ── extra videos (2+) ── */}
      {extraVideos.length > 0 && (
        <div className="mt-10">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[2.5px]"
            style={{ color: 'var(--txtll)' }}>Mais Vídeos</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {extraVideos.map((v, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border"
                style={{ borderColor: 'var(--bdr)', background: 'var(--bg-card)' }}>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe src={v.url} className="absolute inset-0 h-full w-full"
                    style={{ border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen title={v.title} />
                </div>
                <div className="px-5 py-3 text-[13px] font-medium" style={{ color: 'var(--txtl)' }}>{v.title}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
