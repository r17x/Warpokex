import React from 'react';
import { render } from "react-dom";
import constants from 'constants.js'
import App from './App';
import { ThemeProvider, DefaultTheme, StyleReset } from 'atomize';
import * as serviceWorker from './serviceWorker';

// create dom 
const domElementReact = document.createElement('div')

// Theme Configuration 
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: 'black',
  },
};

const Application = () => (
    <ThemeProvider theme={theme}>
      <StyleReset />
      <App />
    </ThemeProvider>
)

// Add profiling & trace performance 
// only development mode 
if(constants.isDevelopment){
    const { unstable_Profiler: Profiler }  = React 
    const trace = require( "scheduler/tracing").unstable_trace 
    const count = {
        mount: 0,
        update: 0,
    }
    trace("initial render", performance.now(), () =>{
        const onRender = (x,y) => {
            count[y]++ 
            console.info(x,y, count[y])
        } 
        return render(
            <Profiler id="Application" onRender={onRender}>
              <Application  />
            </Profiler>,
            domElementReact
        ) 
    })
}

else render(<Application />, domElementReact);


// inject react application to current DOM/HTML in Browser
document.body.appendChild(
    domElementReact,
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
