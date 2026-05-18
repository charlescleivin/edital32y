import CharlesSection from './CharlesSection'
import { fixture } from './CharlesSection.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(CharlesSection, fixture, [
  { label: 'shows name', find: () => fixture.name },
  { label: 'shows title', find: () => fixture.title },
  { label: 'shows first highlight value', find: () => fixture.highlights[0].value },
])()
