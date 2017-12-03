import React from 'react'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import bs from '../utils'
import store from '../store'
// import GithubProfileContainer from '../containers/GithubProfileContainer'
import User from './User'
import { withKyle } from '../hocs'
import KyleProvider from '../renderProps'

const Container = styled.div`
  width: 75%;
  padding-top: ${bs(2)};
  padding-bottom: ${bs(2)};
  margin-left: auto;
  margin-right: auto;
`

const Box = styled.div`margin-bottom: 50px;`

const KyleViaHoc = withKyle(User)

const App = () => (
  <Provider store={store}>
    <Container>
      <Box>
        <h2>
          <em>With a Higher Order Component</em>
        </h2>
        <KyleViaHoc />
      </Box>

      <Box>
        <h2>
          <em>With a Render Prop Component</em>
        </h2>
        <KyleProvider render={User} />
      </Box>

      <Box>
        <p>
          Both components compose and utilize the User component in
          slightly different ways, but end up with a similar result.
        </p>

        <p>
          {`For a better understanding what's going on under the hood, I
          recommend looking at the React devtools and looking at how
          different the virtual DOM is for the two patterns (Granted,
          we're not doing function composition for the render prop,
          keep that in mind!).`}
        </p>
      </Box>
    </Container>
  </Provider>
)

export default App
