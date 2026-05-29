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
          const { container } = render(<Component {...fixture} />)
          const text = find()
          // Use textContent matching to handle AcronymText splitting text across spans
          const found = container.querySelector('*:not(script):not(style)')
          const allElements = container.querySelectorAll('*')
          const match = Array.from(allElements).some(
            el => el.textContent?.includes(text) && el.children.length < 20
          )
          expect(match).toBe(true)
        })
      })
    })
  }
}
