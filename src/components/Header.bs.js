import * as React from 'react'
import * as Atomize from 'atomize'

function Header(Props) {
  var title = Props.title
  return React.createElement(Atomize.Div, {
    w: '100%',
    bg: 'black500',
    textAlign: 'center',
    children: React.createElement(Atomize.Text, {
      tag: 'h1',
      textSize: 'display1',
      textColor: 'white',
      m: {
        b: '4rem',
        t: '0',
        r: '0',
        l: '0'
      },
      children: title
    })
  })
}

var make = Header

export { make }
/* react Not a pure module */
