import React, { Component } from 'react'
import PropTypes from 'prop-types'

// In the previous commit, we created several component methods to handle
// updating our state. Let's explore a few other options we have available to us.

// One way to decrease repeating ourselves is to create state updater functions
// that can be shared around our application. Below, I have redefined our
// updater methods to be arrow functions that take our previous state and
// the current props and returns the next state. We could export these to a util
// folder to be exported and used over and over.

// The function signature we use for our updaters is an alternative way to use
// setState. Rather than returning an object that is merged with the current
// state, we create a function that returns an object to be merged in.

// There is more to this than meets the eye. One "gotcha" of set state is that
// it occurs asynchronously _and_ if you pass an object to setState, they will be
// batched by shallowly merging the objects. Be careful, you may not be accomplishing
// what you think you are. However, when you pass setState a function, these functions
// are put in a queue and fired in order, so you are guaranteed not to have bad merges
// that put you into a funky state.

// Because we are using function updaters, we have been able to remove any component
// specific methods, and thus have no need to bind methods in the constructor. We can
// use anonymous functions directly in our `onClick` attribute.

const increment = prevState => ({
  value: prevState.value + 1
})

const decrement = prevState => ({
  value: prevState.value - 1
})

const reset = (prevState, props) => ({
  value: props.value
})

class MyStatefulComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value
    }
  }

  render() {
    return (
      <div className="counter" style={{ marginBottom: '1em' }}>
        <div className="counter-value">
          <span style={{ fontWeight: 'bold' }}>Value:</span>
          {' '}
          {this.state.value}
        </div>
        <div className="counter-actions">
          <button onClick={() => this.setState(increment)}>+</button>
          <button onClick={() => this.setState(decrement)}>-</button>
          <button onClick={() => this.setState(reset)}>Reset</button>
        </div>
      </div>
    )
  }
}

MyStatefulComponent.propTypes = {
  value: PropTypes.number
}

MyStatefulComponent.defaultProps = {
  value: 0
}

export default MyStatefulComponent
