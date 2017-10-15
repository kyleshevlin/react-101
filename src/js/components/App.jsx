import React from 'react'
import MyStatefulComponent from './MyStatefulComponent'

// Notice that we have rendered multiple copies of our stateful component.
// Each of these components is its own instance. Its state is not shared
// among the other copies. This makes our components highly reusable
// without any fear of unwanted side effects.

const App = () => (
  <div className="wrap">
    <MyStatefulComponent value={0} />
    <MyStatefulComponent value={10} />
    <MyStatefulComponent value={20} />
  </div>
)

export default App
