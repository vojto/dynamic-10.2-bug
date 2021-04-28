import React from 'react'
import { render } from '@testing-library/react'

import { SomeComp } from './some-comp'

it('renders without error', () => {
  render(<SomeComp />)
})
