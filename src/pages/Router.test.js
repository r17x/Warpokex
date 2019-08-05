import React from 'react'
import Router from './Router'

test('Should Render router correctly', () => {
  const { container } = render(<Router />)
  expect(container).toMatchSnapshot()
})
