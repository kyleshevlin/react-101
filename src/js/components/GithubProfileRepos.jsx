import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import bs from '../utils'

const Button = styled.button`
  display: inline-block;
  background-color: teal;
  color: white;
  padding: 5px 15px;
  border: none;
  border-radius: 3px;
  margin-bottom: ${bs()};
  cursor: pointer;
`

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
            <Button onClick={this.handleClick}>Toggle</Button>

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
