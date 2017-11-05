import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GithubProfileRepos extends Component {
  state = {
    isVisible: true
  }

  handleClick = () => {
    this.setState({ isVisible: !this.state.isVisible })
  }

  render() {
    const { repos } = this.props

    return (
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
    )
  }
}

GithubProfileRepos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default GithubProfileRepos
