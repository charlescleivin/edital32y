import Link from 'next/link'
import { registry } from '@/lib/componentRegistry'

export default function CompIndex() {
  const entries = Object.entries(registry)
  return (
    <div className="min-h-screen p-10 font-mono" style={{ background: 'var(--bg)', color: 'var(--txt)' }}>
      <h1 className="mb-1 text-sm font-bold" style={{ color: 'var(--txt)' }}>Component Registry</h1>
      <p className="mb-8 text-xs" style={{ color: 'var(--txtll)' }}>
        {entries.length} component{entries.length !== 1 ? 's' : ''} registered
      </p>
      <ul className="space-y-2">
        {entries.map(([slug, { label }]) => (
          <li key={slug} className="flex items-center gap-3">
            <Link href={`/comp/${slug}`} className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: 'var(--terra)' }}>
              {label}
            </Link>
            <span className="text-xs" style={{ color: 'var(--txtll)' }}>/comp/{slug}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
