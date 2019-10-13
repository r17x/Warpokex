import * as React from 'react'
import * as Components from 'components'
import * as Router from 'pages/Router'

var Router$1 = /* module */ []

var Header = /* module */ []

var Wrapper = /* module */ []

function make(param) {
  return React.createElement(
    React.Fragment,
    undefined,
    React.createElement(Components.Header, {}),
    React.createElement(Components.Wrapper, {
      children: React.createElement(Router.default, {})
    })
  )
}

var $$default = make

export {
  Router$1 as Router,
  Header,
  Wrapper,
  make,
  $$default,
  $$default as default
}
/* react Not a pure module */
