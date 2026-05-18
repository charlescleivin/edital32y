import ChecklistSection from './ChecklistSection'
import { fixture } from './ChecklistSection.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(ChecklistSection, fixture, [
  { label: 'shows section title', find: () => fixture.title },
  { label: 'shows first group title', find: () => fixture.groups[0].title },
  { label: 'shows first item label', find: () => fixture.groups[0].items[0].label },
])()
