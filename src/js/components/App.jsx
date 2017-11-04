import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import GithubContainer from '../containers/GithubContainer'

const App = () => (
  <Provider store={store}>
    <div className="wrap">
      <GithubContainer />
    </div>
  </Provider>
)

export default App
