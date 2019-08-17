import React from 'react'
import Router from 'pages/Router'
import { Header, Wrapper } from 'components'

export default function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Router />
      </Wrapper>
    </>
  )
}
