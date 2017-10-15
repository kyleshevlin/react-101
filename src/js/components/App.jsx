import React from 'react'
import MyStatefulComponent from './MyStatefulComponent'

const App = () => (
  <div className="wrap">
    <MyStatefulComponent value={0} />
    <MyStatefulComponent value={10} />
    <MyStatefulComponent value={20} />
  </div>
)

export default App
