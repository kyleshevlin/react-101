import React, { Component } from 'react'
import axios from 'axios'
import GithubProfile from './GithubProfile'
import LoadingSpinner from './LoadingSpinner'

// This is our container component. It is responsible for fetching our data
// and determining which component to render based on that data. In our case,
// we are making two requests, one after the other, based on what's returned in
// the first response. I would not use this code in prod, as we aren't handling
// any error state, but this should show you how we use the lifecycle hook
// `componentDidMount` to fire off our requests. This is a very common pattern in
// React applications.

class GithubContainer extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/kyleshevlin')
      .then(response => {
        this.setState(() => ({
          data: {
            ...response.data,
            repos: []
          }
        }))

        return response.data.repos_url
      })
      .then(reposUrl => {
        axios.get(reposUrl).then(response => {
          this.setState(prevState => ({
            data: {
              ...prevState.data,
              repos: response.data.map(repo => repo.full_name)
            }
          }))
        })
      })
  }

  render() {
    const { data } = this.state

    return data ? <GithubProfile data={data} /> : <LoadingSpinner />
  }
}

export default GithubContainer
