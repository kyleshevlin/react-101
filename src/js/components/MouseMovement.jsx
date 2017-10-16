import React, { Component } from 'react'

// With this component, we introduce two things. First, we introduce handling an
// event. In this case, we're listening to `onMouseMove`. Second, we see a different
// way of defining state and methods on a component that doesn't require a `constructor`
// method nor binding of methods to `this`.

// In the first case, the event is passed as an argument to whatever function/method is
// set to handle it. In this example, we're able to get the position of the mouse cursor
// and update our state to those coordinates.

// In the second case, we're able to avoid much of the boilerplate of a React ES6 class
// component by including a babel plugin to our setup: `transform-class-properties`.
// I encourage you to look up the documentation on this plugin, as you'll see more of its
// use throughout this series.

class MouseMovement extends Component {
  // Notice we don't need a constructor if all we are defining is state.
  state = {
    x: 0,
    y: 0
  }

  // Rather than create a class method that needs to be bound in the constructor,
  // we're able to set a property equal to an arrow function to acheive the same result
  // This makes our code much more succinct.
  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  render () {
    // It is often useful to destructure properties off of `props` and `state`
    // This reduces how often `this` needs to be referenced in your markup and
    // makes for cleaner code.
    const { x, y } = this.state

    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          padding: '1em'
        }}
        onMouseMove={this.handleMouseMove}
      >
        The mouse is at X: {x}, Y: {y}
      </div>
    )
  }
}

export default MouseMovement
