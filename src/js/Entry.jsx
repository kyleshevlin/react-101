import React from 'react'
import ReactDOM from 'react-dom'

import '../scss/app.scss'

/*
Before there was JSX, there was/is React.createElement(). This method is the foundation of React.

The reason we start here is so that we clearly understand that React components are functions,
and a React app is just a composition of functions all the way down.

React.createElement takes three arguments, a HTML element type, a props object,
and then any number of children. We can return a string like we are here,
or an array of nested createElement calls.
*/

const ourFirstComponent = React.createElement('h1', null, 'React 101')

ReactDOM.render(ourFirstComponent, document.getElementById('app'))
