import * as React from 'react'
import * as Atomize from 'atomize'
import * as Theming from 'theming'
import * as ReactApollo from 'react-apollo'
import * as Graph from 'services/graph'

function Provider(Props) {
  var children = Props.children
  return React.createElement(
    Atomize.ThemeProvider,
    {
      children: null,
      theme: Theming.theme
    },
    React.createElement(Atomize.StyleReset, {}),
    React.createElement(ReactApollo.ApolloProvider, {
      children: children,
      client: Graph.default
    })
  )
}

var make = Provider

var $$default = Provider

export { make, $$default, $$default as default }
/* react Not a pure module */
