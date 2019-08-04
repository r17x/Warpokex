import React, { Suspense } from 'react'
import history from 'pages/history'
import { Router, Route } from 'react-router-dom'
import Loading from 'components/Loading'
import Home from './Home'
import Pokemon from './Pokemon'
export default function Routers() {
  return (
    <Router history={history}>
      <Suspense fallback={<Loading />}>
        <Route key="homepage" path="/" component={Home} exact />
        <Route key="pokemon" path="/pokemon" component={Pokemon} exact />
      </Suspense>
    </Router>
  )
}
