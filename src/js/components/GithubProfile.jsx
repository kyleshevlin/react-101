import React from 'react'
import PropTypes from 'prop-types'
import GithubReposContainer from '../containers/GithubReposContainer'

const GithubProfile = ({ data }) =>
  data ? (
    <div className="github_profile">
      <div className="github_profile-name">
        <a href={data.url}>{data.name}</a>
      </div>
      <div className="github_profile-login">{data.login}</div>
      <div className="github_profile-bio">{data.bio}</div>
      <GithubReposContainer />
    </div>
  ) : null

GithubProfile.propTypes = {
  data: PropTypes.shape({
    login: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    bio: PropTypes.string
  })
}

GithubProfile.defaultProps = {
  data: null
}

export default GithubProfile
