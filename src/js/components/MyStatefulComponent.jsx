import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Now, we'll make our first stateful component. We will use React's ES6
// `class` API to do so. If you are unfamiliar with ES6 classes, I
// recommend looking them up. The "You Don't Know JS" series by Kyle Simpson
// is a great place to start.

// We will build a simple counter component. This component only has one
// prop, `value` which is used as the starting/default value of the component.
// You can see in the constructor method, that the value prop is used to set
// our state's `value` prop. It takes some practice, but you'll be very familiar
// with the difference in props and state in no time. If we do not supply a
// `value` prop to our component, a default value of 0 is supplied in the
// `defaultProps` property near the bottom of this file.

// Our counter wouldn't be much use if we weren't able to update our state's value.
// To do so, we have setup a few buttons that are ready to fire a function when
// that event is triggered. In our case, we define three methods, an increment,
// a decrement, and a reset. We need to bind these methods to this instance of
// the component, and so we do so in the constructor method.

// Play around with the components and notice how each of them maintains their
// own state. This is called encapsulation. State does not bleed outside of
// this instance of a component (unless we pass it to a component as props,
// which we will see in the near future).

class MyStatefulComponent extends Component {
  // We don't always have to pass props to the constructor and the super.
  // If you do not need to use props in the constructor, you may omit
  // the argument from the method call, which in turn, means you may
  // omit it from the super call.
  constructor(props) {
    super(props)

    this.state = {
      value: props.value
    }

    // As mentioned above, we have to bind our methods to this instance
    // of the component, or they won't work correctly. In the future,
    // I'll show an easier way to do this using a Babel plugin
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
  }

  increment() {
    this.setState({ value: this.state.value + 1 })
  }

  decrement() {
    this.setState({ value: this.state.value - 1 })
  }

  reset() {
    this.setState({ value: this.props.value })
  }

  render() {
    // As a little bonus here, I am demonstrating the ability to set inline styles
    // with JSX. This can be really handy when a style is dependent upon some
    // JavaScript logic. We will explore CSS-in-JS in the future.
    return (
      <div className="counter" style={{ marginBottom: '1em' }}>
        <div className="counter-value">
          <span style={{ fontWeight: 'bold' }}>Value:</span>
          {' '}
          {this.state.value}
        </div>
        <div className="counter-actions">
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.reset}>Reset</button>
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
