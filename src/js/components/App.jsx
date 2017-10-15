import React from 'react'
import MyStatelessFunctionalComponent from './MyStatelessFunctionalComponent'

// Our App component is a simple stateless functional component (abbreviated to SFC).
// As you can see, our component is a function. This one happens to take no
// arguments, and simply returns the markup of the component. In this case,
// we are only returning a wrapping div and a child component that takes a few props

const App = () => (
  <div className="wrap">
    <MyStatelessFunctionalComponent name='Kyle' age={32} />
  </div>
)

export default App
