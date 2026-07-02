import { getCore } from '@/lib/editais'

const core = getCore()

const ASSETS = [
  { tag: 'Corpus', name: 'AgroLinguaBR', desc: 'Corpus soberano de 25.000 pares Q&A em português agrícola regional, com DOI público e licença aberta.' },
  { tag: 'Modelo', name: 'AgroAssistente', desc: 'LLM fine-tuned para extensão rural, acessível via WhatsApp com arquitetura tolerante a conectividade intermitente.' },
  { tag: 'Benchmark', name: 'AgroEval', desc: 'Benchmark independente para avaliar modelos de IA no domínio agrícola brasileiro.' },
  { tag: 'API', name: 'AgroAPI', desc: 'Camada pública de integração para cooperativas, EMATERs e serviços de extensão.' },
]

/** Strip the "Barreira N, " prefix so titles read cleanly for a public audience. */
function cleanTitle(t: string): string {
  return t.replace(/^Barreira\s*\d+[,:]\s*/i, '')
}

export default function Home() {
  const { hero, s2, s5, s12 } = core
  const charles = s5.expandedProfiles?.[0]

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', color: 'var(--txt)' }}>
      {/* top bar */}
      <header className="sticky top-0 z-40 backdrop-blur"
        style={{ background: 'rgba(12,11,9,0.72)', borderBottom: '1px solid var(--bdr)' }}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src="/sabia-logo.png" alt="" aria-hidden style={{ width: 30, height: 'auto' }} />
            <span className="text-[15px] font-bold tracking-[-0.3px]" style={{ fontFamily: 'var(--font-playfair)' }}>SABIA</span>
          </div>
          <nav className="hidden gap-7 text-[11px] font-semibold uppercase tracking-[2px] sm:flex" style={{ color: 'var(--txtll)' }}>
            <a href="#problema" className="transition-opacity hover:opacity-70">O problema</a>
            <a href="#ativos" className="transition-opacity hover:opacity-70">O que construímos</a>
            <a href="#autor" className="transition-opacity hover:opacity-70">Quem faz</a>
          </nav>
        </div>
      </header>

      {/* hero */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-24 text-center">
        <p className="mb-6 text-[10px] font-bold uppercase tracking-[4px]" style={{ color: 'var(--terra)' }}>
          Infraestrutura nacional soberana de IA · Agricultura familiar
        </p>
        <h1 className="mx-auto max-w-3xl text-[clamp(56px,10vw,88px)] font-extrabold leading-[0.92] tracking-[-1.5px]"
          style={{ fontFamily: 'var(--font-playfair)' }}>
          SABIA
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-[13px] font-medium uppercase tracking-[2.5px]" style={{ color: 'var(--txtl)' }}>
          Sistema Agronômico Brasileiro de Inteligência Artificial
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-[18px] leading-relaxed" style={{ color: 'var(--txtl)' }}>
          {hero.subtitle}
        </p>
        {hero.statement && (
          <p className="mx-auto mt-6 max-w-xl text-[16px] font-semibold" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
            {hero.statement}
          </p>
        )}
      </section>

      {/* impact numbers */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {s2.stats?.map((st) => (
            <div key={st.label} className="rounded-2xl p-5"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--bdr)' }}>
              <div className="text-[34px] font-extrabold leading-none" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--terra)' }}>{st.value}</div>
              <div className="mt-2 text-[11px] leading-snug" style={{ color: 'var(--txtll)' }}>{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* the problem */}
      <section id="problema" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-[9px] font-bold uppercase tracking-[3px]" style={{ color: 'var(--txtll)' }}>O problema</p>
          <h2 className="mt-3 text-[clamp(28px,4vw,40px)] font-bold leading-[1.12]" style={{ fontFamily: 'var(--font-playfair)' }}>
            {s2.headline ?? s2.subtitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {s2.barriers?.map((b) => (
            <div key={b.title} className="rounded-2xl p-6" style={{ background: 'var(--bg-card)', border: '1px solid var(--bdr)' }}>
              <div className="flex items-start gap-4">
                {b.keyFact && (
                  <div className="shrink-0">
                    <div className="text-[26px] font-extrabold leading-none" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--gold)' }}>{b.keyFact.value}</div>
                    <div className="mt-1 max-w-[92px] text-[9px] uppercase leading-tight tracking-[1px]" style={{ color: 'var(--txtll)' }}>{b.keyFact.label}</div>
                  </div>
                )}
                <div>
                  <h3 className="text-[15px] font-bold leading-snug" style={{ color: 'var(--txt)' }}>{cleanTitle(b.title)}</h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed" style={{ color: 'var(--txtl)' }}>{b.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* the four sovereign assets */}
      <section id="ativos" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16"
        style={{ borderTop: '1px solid var(--bdr)' }}>
        <div className="mb-10 max-w-3xl">
          <p className="text-[9px] font-bold uppercase tracking-[3px]" style={{ color: 'var(--txtll)' }}>O que construímos</p>
          <h2 className="mt-3 text-[clamp(28px,4vw,40px)] font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>Quatro ativos soberanos</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed" style={{ color: 'var(--txtl)' }}>{hero.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ASSETS.map((a) => (
            <div key={a.name} className="rounded-2xl p-5" style={{ background: 'var(--bg-card)', border: '1px solid var(--bdr)' }}>
              <span className="text-[9px] font-bold uppercase tracking-[2px]" style={{ color: 'var(--gold)' }}>{a.tag}</span>
              <div className="mt-1.5 text-[18px] font-bold" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>{a.name}</div>
              <p className="mt-2 text-[12.5px] leading-relaxed" style={{ color: 'var(--txtl)' }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* who is behind it — press angle */}
      {charles && (
        <section id="autor" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16" style={{ borderTop: '1px solid var(--bdr)' }}>
          <div className="mb-10 max-w-3xl">
            <p className="text-[9px] font-bold uppercase tracking-[3px]" style={{ color: 'var(--txtll)' }}>Quem faz</p>
            <h2 className="mt-3 text-[clamp(28px,4vw,40px)] font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>{charles.name}</h2>
            {charles.title && <p className="mt-2 text-[14px]" style={{ color: 'var(--terra)' }}>{charles.title}</p>}
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
            <p className="text-[14.5px] leading-relaxed" style={{ color: 'var(--txtl)' }}>{charles.bio}</p>
            {Array.isArray(charles.highlights) && charles.highlights.length > 0 && (
              <div className="grid grid-cols-2 gap-4 self-start">
                {charles.highlights.slice(0, 4).map((h: { value: string; label: string }) => (
                  <div key={h.label} className="rounded-2xl p-4" style={{ background: 'var(--bg-card)', border: '1px solid var(--bdr)' }}>
                    <div className="text-[17px] font-extrabold leading-tight" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--gold)' }}>{h.value}</div>
                    <div className="mt-1 text-[10px] leading-snug" style={{ color: 'var(--txtll)' }}>{h.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* vision */}
      {s12.visionStatement && (
        <section className="mx-auto max-w-4xl px-6 py-20 text-center" style={{ borderTop: '1px solid var(--bdr)' }}>
          <p className="text-[9px] font-bold uppercase tracking-[3px]" style={{ color: 'var(--txtll)' }}>A visão</p>
          <p className="mx-auto mt-6 max-w-3xl text-[clamp(20px,2.6vw,28px)] font-semibold leading-[1.35]"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)' }}>
            {s12.visionStatement}
          </p>
        </section>
      )}

      {/* footer */}
      <footer className="mx-auto max-w-5xl px-6 py-12 text-center" style={{ borderTop: '1px solid var(--bdr)' }}>
        <p className="text-[12px]" style={{ color: 'var(--txtl)' }}>
          <span className="font-semibold" style={{ color: 'var(--txt)' }}>SABIA</span> · Sistema Agronômico Brasileiro de Inteligência Artificial
        </p>
        {charles?.email && (
          <p className="mt-2 text-[11px]" style={{ color: 'var(--txtll)' }}>
            Imprensa e contato: <a href={`mailto:${charles.email}`} className="underline" style={{ color: 'var(--terra)' }}>{charles.email}</a>
          </p>
        )}
      </footer>
    </div>
  )
}
