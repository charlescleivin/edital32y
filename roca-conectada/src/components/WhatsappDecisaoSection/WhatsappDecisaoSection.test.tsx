import WhatsappDecisaoSection from './WhatsappDecisaoSection'
import { fixture } from './WhatsappDecisaoSection.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(WhatsappDecisaoSection, fixture, [
  { label: 'shows section title', find: () => fixture.title },
  { label: 'shows confrontation label', find: () => 'A Contradição Aparente — Respondida Diretamente' },
  { label: 'shows first data point value', find: () => fixture.dataPoints[0].value },
])()
