import WhatsappDecisaoSection from './WhatsappDecisaoSection'
import { fixture } from './WhatsappDecisaoSection.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(WhatsappDecisaoSection, fixture, [
  { label: 'shows section title', find: () => fixture.title },
  { label: 'shows migration roadmap title', find: () => fixture.migrationRoadmap.title },
  { label: 'shows first data point value', find: () => fixture.dataPoints[0].value },
])()
