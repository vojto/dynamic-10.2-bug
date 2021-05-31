import React from 'react'
import { render } from '@testing-library/react'

import { SomeComp } from './some-comp'

it('renders without error', () => {
  const {container} = render(<SomeComp />)
  expect(container.innerHTML).toContain("Hello dynamic world")
})
