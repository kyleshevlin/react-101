import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GithubProfile extends Component {
  state = {
    isVisible: true
  }

  handleClick = () => {
    this.setState({ isVisible: !this.state.isVisible })
  }

  render() {
    const { login, name, url, bio, repos } = this.props.data

    return (
      <div className="github_profile">
        <div className="github_profile-name">
          <a href={url}>{name}</a>
        </div>
        <div className="github_profile-login">{login}</div>
        <div className="github_profile-bio">{bio}</div>
        <div className="github_profile-repos">
          {repos.length ? (
            <div>
              <button onClick={this.handleClick}>Toggle</button>

              {this.state.isVisible && (
                <ol className="github_profile-repos-list">
                  {repos.map(repo => (
                    <li key={repo} className="github_profile-repos-list-item">
                      {repo}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          ) : (
            <div className="github_profile-repos-empty">
              <p>No repos were found.</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

GithubProfile.propTypes = {
  data: PropTypes.shape({
    login: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    bio: PropTypes.string,
    repos: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
}

export default GithubProfile
