import Sidebar from './Sidebar'
import { fixture } from './Sidebar.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(Sidebar, fixture, [
  { label: 'shows project name', find: () => fixture.projectName },
  { label: 'shows first section label', find: () => fixture.sections[0].label },
  { label: 'shows last section label', find: () => fixture.sections[fixture.sections.length - 1].label },
])()
