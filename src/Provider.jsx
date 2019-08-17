import React from 'react'
import { ThemeProvider, StyleReset } from 'atomize'
import { ApolloProvider } from 'react-apollo'
import client from 'services/graph'

import constants from 'constants.js'
import { theme } from 'theming'

export default function Povider({ children }) {
  const Providers = (
    <ThemeProvider theme={theme}>
      <StyleReset />
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ThemeProvider>
  )
  // Add profiling & trace performance
  // only development mode
  if (constants.isDevelopment) {
    const Profiler = React.unstable_Profiler || React.Profiler
    const trace =
      require('scheduler/tracing').unstable_trace ||
      require('scheduler/tracing').trace
    const count = {
      mount: 0,
      update: 0
    }
    return trace('initial render', performance.now(), () => {
      const onRender = (x, y) => {
        count[y]++
        console.info(x, y, count[y])
      }
      return (
        <Profiler id="Application" onRender={onRender}>
          {Providers}
        </Profiler>
      )
    })
  }
  return Providers
}
