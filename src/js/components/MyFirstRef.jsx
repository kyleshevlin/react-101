import React, { Component } from 'react'

// One thing to remember about React components is that the markup
// we right inside of them is not the actual DOM. This is made obvious
// when we use self-eradicating components such as the Aux component in
// this repo, or when we start getting into container components that
// will have no markup of their own. Instead, what we are writing in our
// components becomes the "Virtual DOM". Often shortened to VDOM, the Virtual
// DOM is React's means of keeping track of what will eventually be rendered
// as DOM in the browser (or whatever rendering environment you choose).

// There are times, though, where we might need access to the actual DOM node.
// There are a few ways to do this. You could wait for the component to mount
// and perform a `document.querySelector` for a specific class in your component,
// much like you used to with jQuery. This is reasonable, but not necessarily
// the most optimal way of achieving this.

// Instead, React provides a means of getting the DOM node via a ref callback.
// You can use the `ref` prop and a callback function to assign the DOM node to
// a class property. If you look below, we provide a callback to the ref prop on
// our div. This callback receives the `reference`, shortened to `r` as an argument,
// and we simply assign a class property to that reference. In this case, I named
// the class property `nodeRef`. There might come an occasion that you need to
// store multiple refs. In this case, give each ref a different class property name.

// You can also get clever, and pass ref callbacks as props to other components, to be
// able to get refs in parent child relationships. We will explore this once we are using
// Redux, because connected components have some challenges to overcome with ref callbacks.

// You will also see that we assign event listeners in a vanilla JavaScript way.
// This is to demonstrate ways of handling events that might require the use of
// third party libraries or for other reasons you need to attach and remove them
// this way.

// Always remember if you add event listeners this way to clean them up in the
// componentWillUnmount lifecycle hook.

class MyFirstRef extends Component {
  state = {
    times: 0
  }

  componentDidMount() {
    this.nodeRef.addEventListener('click', this.handleClick, false)
  }

  componentWillUnmount() {
    this.nodeRef.removeEventListener('click', this.handleClick)
  }

  handleClick = () => {
    console.log('clicked')
    this.setState(prevState => ({
      times: prevState.times + 1
    }))
  }

  render() {
    const { times } = this.state

    return (
      <div style={{ margin: 30 }}>
        <div
          ref={r => {
            this.nodeRef = r
          }}
          style={{
            display: 'inline-block',
            backgroundColor: 'teal',
            color: 'white',
            padding: 15,
            cursor: 'pointer'
          }}
        >
          This is for demonstration purposes only.
          <br />
          I would never make a button this way.
        </div>

        <p>
          The button has been clicked {times} {times === 1 ? 'time' : 'times'}.
        </p>
      </div>
    )
  }
}

export default MyFirstRef
