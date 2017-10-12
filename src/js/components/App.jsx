import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Aux from './Aux'
import ErrorBoundary from './ErrorBoundary'
import Greeting from './Greeting'

const App = () => (
  <Provider store={store}>
    <Aux>
      <ErrorBoundary>
        <Greeting message="Greetings from React 101!" />
      </ErrorBoundary>
    </Aux>
  </Provider>
)

export default App
