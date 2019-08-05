import React from 'react'
import Loading from 'components/Loading'

test('should render loading component correctly', async () => {
  const { container } = render(<Loading loading={true} duration={3000} />)
  expect(container).toMatchSnapshot()
})
