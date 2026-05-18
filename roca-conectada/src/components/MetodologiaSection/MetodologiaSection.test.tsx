import MetodologiaSection from './MetodologiaSection'
import { fixture } from './MetodologiaSection.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(MetodologiaSection, fixture, [
  { label: 'shows section title', find: () => fixture.title },
  { label: 'shows first phase name', find: () => fixture.phases[0].name },
  { label: 'shows researcher title', find: () => fixture.scopeDistinction.researcher.title },
])()
