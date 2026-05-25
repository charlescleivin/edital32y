import SoberaniaSection from './SoberaniaSection'
import { fixture } from './SoberaniaSection.fixture'
import { createComponentTest } from '@/lib/testUtils'

createComponentTest(SoberaniaSection, fixture, [
  { label: 'shows section title', find: () => fixture.title },
  { label: 'shows headline', find: () => fixture.headline! },
  { label: 'shows sovereignty principle label', find: () => 'Soberania Digital — Princípio Fundante' },
  { label: 'shows license title', find: () => fixture.licenseTitle },
  { label: 'shows first license asset', find: () => fixture.licenseItems[0].asset },
  { label: 'shows access title', find: () => fixture.accessTitle },
  { label: 'shows pilot phase label', find: () => fixture.accessPhases[0].label },
])()
