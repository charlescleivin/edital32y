import { registry } from '@/lib/componentRegistry'

export default async function Preview({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = registry[slug]

  if (!entry) {
    return (
      <div className="p-10 font-mono text-sm" style={{ background: 'var(--bg)', color: 'var(--terra)' }}>
        <p>Not found: /comp/{slug}</p>
        <p className="mt-2 text-xs" style={{ color: 'var(--txtll)' }}>
          Check that <code>{slug}</code> is registered in src/lib/componentRegistry.ts
        </p>
      </div>
    )
  }

  const { Component, fixture, label } = entry
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <div className="px-8 py-4 font-mono text-[11px]" style={{ color: 'var(--txtll)', borderBottom: '1px solid var(--bdr)' }}>
        /comp/{slug} — {label}
      </div>
      <Component {...fixture} />
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(registry).map((slug) => ({ slug }))
}
