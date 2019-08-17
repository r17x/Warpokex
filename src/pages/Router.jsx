import React, { Suspense } from 'react'
import history from 'pages/history'
import { Router, Route } from 'react-router-dom'
import { Home, Pokemon } from 'pages'
import { Loading } from 'components'

export default function Routers() {
  return (
    <Router history={history}>
      <Suspense fallback={<Loading />}>
        <Route key="homepage" path="/" component={Home} exact />
        <Route key="pokemon" path="/pokemon/:name" component={Pokemon} />
      </Suspense>
    </Router>
  )
}
