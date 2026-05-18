import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const args = process.argv.slice(2)
const get = (flag) => {
  const idx = args.indexOf(flag)
  return idx !== -1 ? args[idx + 1] : null
}

const name = get('--name')
const slug = get('--slug')
const label = get('--label')

if (!name || !slug || !label) {
  console.error('Usage: node scripts/new-component.mjs --name MySection --slug my-section --label "My Section"')
  process.exit(1)
}

const camel = slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
const dir = path.join(root, 'src', 'components', name)
fs.mkdirSync(dir, { recursive: true })

// Component file
fs.writeFileSync(path.join(dir, `${name}.tsx`), `\
export const componentMeta = { slug: '${slug}', label: '${label}' }

export interface ${name}Props {
  title: string
}

export default function ${name}({ title }: ${name}Props) {
  return (
    <section className="p-6">
      <h2 className="text-xl font-bold">{title}</h2>
    </section>
  )
}
`)

// Fixture file
fs.writeFileSync(path.join(dir, `${name}.fixture.ts`), `\
import type { ${name}Props } from './${name}'

export const fixture: ${name}Props = {
  title: '${label} — fixture',
}
`)

// Test file
fs.writeFileSync(path.join(dir, `${name}.test.tsx`), `\
import ${name} from './${name}'
import { fixture } from './${name}.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(${name}, fixture, [
  { label: 'shows title', find: () => fixture.title },
])()
`)

// Patch registry
const registryPath = path.join(root, 'src', 'lib', 'componentRegistry.ts')
let registry = fs.readFileSync(registryPath, 'utf8')

const importLines = `import ${name}, { componentMeta as ${camel}Meta } from '@/components/${name}/${name}'\nimport { fixture as ${camel}Fixture } from '@/components/${name}/${name}.fixture'\n`
const entryLine = `  [${camel}Meta.slug]: { Component: ${name}, fixture: ${camel}Fixture, label: ${camel}Meta.label },\n`

// Insert imports after the last import line (or at top before export)
if (registry.includes('// entries added here by generator')) {
  registry = importLines + registry
  registry = registry.replace('  // entries added here by generator\n', entryLine + '  // entries added here by generator\n')
} else {
  // Fallback: append imports at top and entry before closing brace
  registry = importLines + registry
  registry = registry.replace(/\}\s*$/, entryLine + '}')
}

fs.writeFileSync(registryPath, registry)

console.log(`✓ Created ${name}/ in src/components/`)
console.log(`✓ Patched componentRegistry.ts`)
console.log(`→ Preview at /comp/${slug}`)
console.log(`→ Test: npm test -- ${name}`)
