import React from 'react'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import bs from '../utils'
import store from '../store'
// import GithubProfileContainer from '../containers/GithubProfileContainer'
import User from './User'
import { withKyle } from '../hocs'

const Container = styled.div`
  width: 75%;
  padding-top: ${bs(2)};
  padding-bottom: ${bs(2)};
  margin-left: auto;
  margin-right: auto;
`

const Kyle = withKyle(User)

const App = () => (
  <Provider store={store}>
    <Container>
      <Kyle />
    </Container>
  </Provider>
)

export default App
