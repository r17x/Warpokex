import React, { Suspense } from 'react'
import history from 'pages/history'
import { Router, Route } from 'react-router-dom'
import Loading from 'components/Loading'

const Home = () => <p>Home</p> 

export default function Routers() {
  return (
    <Router history={history}>
      <Suspense fallback={<Loading />}>
        <Route key="homepage" path="/" component={Home} exact />
      </Suspense>
    </Router>
  )
}
