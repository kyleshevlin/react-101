import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import GithubProfileContainer from '../containers/GithubProfileContainer'

const App = () => (
  <Provider store={store}>
    <div className="wrap">
      <GithubProfileContainer />
    </div>
  </Provider>
)

export default App
