import React from 'react'
import Router from 'pages/Router'
import Wrapper from 'components/Wrapper'
import Header from 'components/Header'

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
