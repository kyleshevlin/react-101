import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUserProfile } from '../actions'
import GithubProfile from '../components/GithubProfile'
import LoadingSpinner from '../components/LoadingSpinner'

class GithubProfileContainer extends Component {
  componentDidMount() {
    if (!this.props.user) {
      this.props.fetchUserProfile('kyleshevlin')
    }
  }

  render() {
    const { isLoading, user, hasUserError, userError } = this.props

    if (isLoading) {
      return <LoadingSpinner />
    }

    return hasUserError ? <p>{userError.message}</p> : <GithubProfile data={user} />
  }
}

GithubProfileContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    login: PropTypes.string,
    name: PropTypes.string,
    html_url: PropTypes.string,
    bio: PropTypes.string,
    repos: PropTypes.arrayOf(PropTypes.string)
  }),
  hasUserError: PropTypes.bool.isRequired,
  userError: PropTypes.shape({
    message: PropTypes.string
  }),
  fetchUserProfile: PropTypes.func.isRequired
}

GithubProfileContainer.defaultProps = {
  userError: null,
  user: null
}

const mapStateToProps = state => ({
  isLoading: state.waitingForUser,
  user: state.user,
  hasUserError: state.hasUserError,
  userError: state.userError
})

const mapDispatchToProps = {
  fetchUserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(GithubProfileContainer)
