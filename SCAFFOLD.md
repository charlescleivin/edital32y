# Roca Conectada — Scaffold Guide for AI

This document is the source of truth for setting up and extending the Next.js project.
Read it fully before writing any code. Every decision here is intentional.

---

## Stack

| Concern | Tool |
|---|---|
| Framework | Next.js 14 (App Router, static export) |
| Styling | Tailwind CSS only — no custom CSS files |
| Language | TypeScript (strict) |
| Tests | Jest + React Testing Library |
| Deploy | Vercel (zero config with static export) |

---

## Directory structure

```
roca-conectada/
├── data/
│   └── proposal.json              ← ALL content (text, numbers, labels). Edit here for content changes.
├── scripts/
│   └── new-component.mjs          ← generator: run to scaffold a new component
├── src/
│   ├── app/
│   │   ├── layout.tsx             ← sidebar, progress bar, fonts
│   │   ├── page.tsx               ← composes all sections, imports from proposal.json
│   │   └── comp/
│   │       ├── page.tsx           ← /comp index: lists all registered components
│   │       └── [slug]/
│   │           └── page.tsx       ← /comp/[slug]: renders one component with fixture data
│   ├── components/
│   │   ├── ui/                    ← primitive reusable components (MetaCard, Badge, Table...)
│   │   │   └── [Name]/
│   │   │       ├── [Name].tsx
│   │   │       ├── [Name].fixture.ts
│   │   │       └── [Name].test.tsx
│   │   └── [SectionName]/         ← one folder per section component
│   │       ├── [SectionName].tsx
│   │       ├── [SectionName].fixture.ts
│   │       └── [SectionName].test.tsx
│   ├── lib/
│   │   ├── componentRegistry.ts   ← maps slug → { Component, fixture, label }
│   │   └── testUtils.ts           ← createComponentTest() factory
│   └── types/
│       └── proposal.ts            ← TypeScript interfaces for proposal.json
├── jest.config.ts
├── jest.setup.ts
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Rule: content vs. structure

- **To change any text, number, label, or list** → edit `data/proposal.json` only.
- **To change layout or visual structure of a section** → edit that section's component file.
- **To change a color, font, or spacing token** → edit `tailwind.config.ts` only.
- **Never put content strings inside component files.**

---

## The 3-file component pattern

Every component — section or UI primitive — must have exactly these 3 files.

### 1. `[Name].tsx`

```tsx
// Must export: componentMeta, props interface, default component

export const componentMeta = {
  slug: 'my-section',        // kebab-case, unique, used as URL slug
  label: 'My Section',       // human readable, shown in /comp index
}

export interface MySectionProps {
  title: string
  items: Array<{ id: string; label: string; value: string }>
  // all props typed explicitly — no `any`, no optional unless truly optional
}

export default function MySection({ title, items }: MySectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      {items.map(i => <div key={i.id}>{i.label}: {i.value}</div>)}
    </section>
  )
}
```

### 2. `[Name].fixture.ts`

```ts
// Typed realistic sample data. Used by: preview route, tests.
// Must match the real shape of data from proposal.json.

import type { MySectionProps } from './MySection'

export const fixture: MySectionProps = {
  title: 'Example Title',
  items: [
    { id: '1', label: 'Item A', value: 'Value A' },
    { id: '2', label: 'Item B', value: 'Value B' },
  ],
}
```

### 3. `[Name].test.tsx`

```tsx
// Import component and fixture. Call createComponentTest. Nothing else needed.

import MySection from './MySection'
import { fixture } from './MySection.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(MySection, fixture, [
  { label: 'shows title', find: () => fixture.title },
  { label: 'shows first item label', find: () => fixture.items[0].label },
])()
```

---

## Infrastructure files (write once, never change except to add registry entries)

### `src/lib/testUtils.ts`

```ts
import { render, screen } from '@testing-library/react'

export function createComponentTest<T extends object>(
  Component: React.ComponentType<T>,
  fixture: T,
  checks: Array<{ label: string; find: () => string }> = []
) {
  return () => {
    const name = Component.displayName ?? Component.name
    describe(name, () => {
      it('renders without crashing', () => {
        const { container } = render(<Component {...fixture} />)
        expect(container.firstChild).toBeTruthy()
      })
      checks.forEach(({ label, find }) => {
        it(label, () => {
          render(<Component {...fixture} />)
          expect(screen.getByText(find())).toBeInTheDocument()
        })
      })
    })
  }
}
```

### `src/lib/componentRegistry.ts`

```ts
// Add 2 lines per new component: one import block, one registry entry.

import MySection, { componentMeta as msMeta } from '@/components/MySection/MySection'
import { fixture as msFixture } from '@/components/MySection/MySection.fixture'

export const registry: Record<string, {
  Component: React.ComponentType<any>
  fixture: any
  label: string
}> = {
  [msMeta.slug]: { Component: MySection, fixture: msFixture, label: msMeta.label },
}
```

### `src/app/comp/[slug]/page.tsx`

```tsx
import { registry } from '@/lib/componentRegistry'

export default function Preview({ params }: { params: { slug: string } }) {
  const entry = registry[params.slug]
  if (!entry) return <p style={{ padding: 32, fontFamily: 'monospace' }}>Not found: {params.slug}</p>
  const { Component, fixture, label } = entry
  return (
    <div className="min-h-screen bg-[#f4f9f6] p-8">
      <p className="text-xs text-gray-400 mb-6 font-mono">/comp/{params.slug} — {label}</p>
      <Component {...fixture} />
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(registry).map(slug => ({ slug }))
}
```

### `src/app/comp/page.tsx`

```tsx
import Link from 'next/link'
import { registry } from '@/lib/componentRegistry'

export default function CompIndex() {
  return (
    <div className="p-8 font-mono">
      <h1 className="text-sm font-bold mb-4">Component Registry ({Object.keys(registry).length})</h1>
      <ul className="space-y-2">
        {Object.entries(registry).map(([slug, { label }]) => (
          <li key={slug}>
            <Link href={`/comp/${slug}`} className="text-blue-600 hover:underline">
              {label}
            </Link>
            <span className="text-gray-400 ml-2">/comp/{slug}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

---

## Generator script: `scripts/new-component.mjs`

This script creates all 3 component files and patches the registry.
Run with: `node scripts/new-component.mjs --name HeroSection --slug hero-section --label "Hero Section"`

```js
import fs from 'fs'
import path from 'path'

const args = process.argv.slice(2)
const get = (flag) => args[args.indexOf(flag) + 1]

const name = get('--name')    // e.g. HeroSection
const slug = get('--slug')    // e.g. hero-section
const label = get('--label')  // e.g. "Hero Section"

if (!name || !slug || !label) {
  console.error('Usage: node scripts/new-component.mjs --name X --slug x-x --label "X X"')
  process.exit(1)
}

const dir = path.resolve(`src/components/${name}`)
fs.mkdirSync(dir, { recursive: true })

// Component
fs.writeFileSync(path.join(dir, `${name}.tsx`), `
export const componentMeta = { slug: '${slug}', label: '${label}' }

export interface ${name}Props {
  title: string
}

export default function ${name}({ title }: ${name}Props) {
  return (
    <section>
      <h2>{title}</h2>
    </section>
  )
}
`.trimStart())

// Fixture
fs.writeFileSync(path.join(dir, `${name}.fixture.ts`), `
import type { ${name}Props } from './${name}'

export const fixture: ${name}Props = {
  title: '${label} — fixture title',
}
`.trimStart())

// Test
fs.writeFileSync(path.join(dir, `${name}.test.tsx`), `
import ${name} from './${name}'
import { fixture } from './${name}.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(${name}, fixture, [
  { label: 'shows title', find: () => fixture.title },
])()
`.trimStart())

// Patch registry
const registryPath = path.resolve('src/lib/componentRegistry.ts')
let registry = fs.readFileSync(registryPath, 'utf8')

const importBlock = `import ${name}, { componentMeta as ${slug.replace(/-/g, '')}Meta } from '@/components/${name}/${name}'\nimport { fixture as ${slug.replace(/-/g, '')}Fixture } from '@/components/${name}/${name}.fixture'\n`
const entryBlock = `  [${slug.replace(/-/g, '')}Meta.slug]: { Component: ${name}, fixture: ${slug.replace(/-/g, '')}Fixture, label: ${slug.replace(/-/g, '')}Meta.label },\n`

registry = registry.replace(
  /^(import .+\n)+/m,
  (match) => match + importBlock
)
registry = registry.replace('}\n', entryBlock + '}\n')

fs.writeFileSync(registryPath, registry)

console.log(`✓ Created ${name} in src/components/${name}/`)
console.log(`✓ Patched componentRegistry.ts`)
console.log(`→ Preview at /comp/${slug}`)
```

---

## Bootstrap checklist (first-time setup)

Run these in order. Do not skip steps.

```bash
npx create-next-app@latest roca-conectada \
  --typescript --tailwind --app --src-dir --import-alias "@/*" --no-eslint

cd roca-conectada

npm install -D jest jest-environment-jsdom @testing-library/react \
  @testing-library/jest-dom @types/jest ts-jest
```

Create `jest.config.ts`:
```ts
import type { Config } from 'jest'
const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterFramework: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
  transform: { '^.+\\.tsx?$': 'ts-jest' },
}
export default config
```

Create `jest.setup.ts`:
```ts
import '@testing-library/jest-dom'
```

Add to `next.config.ts`:
```ts
const config = { output: 'export' }
export default config
```

Then create in order:
1. `data/proposal.json` — empty object `{}` to start
2. `src/types/proposal.ts` — empty, add interfaces as sections are defined
3. `src/lib/testUtils.ts` — copy from this document
4. `src/lib/componentRegistry.ts` — copy empty shell from this document (empty registry object)
5. `src/app/comp/page.tsx` — copy from this document
6. `src/app/comp/[slug]/page.tsx` — copy from this document
7. `scripts/new-component.mjs` — copy from this document

Only after all 7 exist: run the generator to create first component.

---

## Adding a new component (every time)

```bash
node scripts/new-component.mjs --name MySection --slug my-section --label "My Section"
```

Then:
1. Fill in the real props interface in `MySection.tsx`
2. Fill in realistic data in `MySection.fixture.ts`
3. Add 2-3 meaningful checks to `MySection.test.tsx`
4. Import real data from `proposal.json` and pass to component in `page.tsx`

Run tests: `npm test`
Preview: `npm run dev` → visit `/comp/my-section`

---

## Verification checklist (after any component work)

- [ ] `npm test` passes with zero failures
- [ ] `/comp/[slug]` renders the component in isolation with no errors
- [ ] `/comp` index lists the component
- [ ] Component receives all data from props (no hardcoded strings inside component)
- [ ] Fixture data matches the shape of corresponding section in `proposal.json`
