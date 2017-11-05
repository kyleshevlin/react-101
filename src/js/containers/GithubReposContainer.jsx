import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUserRepos } from '../actions'
import LoadingSpinner from '../components/LoadingSpinner'
import GithubProfileRepos from '../components/GithubProfileRepos'

class GithubReposContainer extends Component {
  componentDidMount() {
    const { user } = this.props

    if (user && !user.repos.length) {
      this.props.fetchUserRepos(user.repos_url)
    }
  }

  render() {
    const { isLoading, user, hasReposError, reposError } = this.props

    if (isLoading) {
      return <LoadingSpinner />
    }

    return hasReposError ? (
      <p>{reposError.message}</p>
    ) : (
      <GithubProfileRepos repos={user.repos} />
    )
  }
}

GithubReposContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    login: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    bio: PropTypes.string,
    repos: PropTypes.arrayOf(PropTypes.string)
  }),
  hasReposError: PropTypes.bool.isRequired,
  reposError: PropTypes.shape({
    message: PropTypes.string
  }),
  fetchUserRepos: PropTypes.func.isRequired
}

GithubReposContainer.defaultProps = {
  reposError: null,
  user: null
}

const mapStateToProps = state => ({
  isLoading: state.waitingForRepos,
  user: state.user,
  hasReposError: state.hasReposError,
  reposError: state.reposError
})

const mapDispatchToProps = {
  fetchUserRepos
}

export default connect(mapStateToProps, mapDispatchToProps)(
  GithubReposContainer
)
