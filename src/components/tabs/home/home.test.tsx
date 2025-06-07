import { render } from '@testing-library/react'
import Home from './home'

describe('Home', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />)
    expect(asFragment()).toMatchSnapshot()
  })
})
