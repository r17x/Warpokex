import React from 'react'
import { render } from 'react-dom'
import Provider from 'Provider.jsx'
import App from './App.bs.js'
import * as serviceWorker from './serviceWorker'

// create dom
const domElementReact = document.createElement('div')

render(
  <Provider>
    <App />
  </Provider>,
  domElementReact
)

// inject react application to current DOM/HTML in Browser
document.body.appendChild(domElementReact)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
