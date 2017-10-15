import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import '../scss/app.scss'

// Instead of writing the markup for our app in our Entry file (which would
// become very unruly very fast), we will abstract that into a component
// in another file. We will build our first stateless functional component,
// named App, import it here, and render it in our render method.

ReactDOM.render(<App />, document.getElementById('app'))
