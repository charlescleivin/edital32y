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
