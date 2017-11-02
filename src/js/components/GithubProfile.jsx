import React from 'react'
import PropTypes from 'prop-types'

// This is our presentational component. The only thing this component
// is concerned with is mapping our data to the appropriate places in our
// DOM. As you can see, we've defined the shape of our data down below
// with propTypes. This gives us some safety with our information. We can
// certainly go further if we'd like.

// Notice this is a stateless functional component. Typically, presentational
// components are stateless functional components as they derive all their state
// via props from other components.

const GithubProfile = ({ data }) => {
  const { login, name, url, bio, repos } = data

  return (
    <div className="github_profile">
      <div className="github_profile-name">
        <a href={url}>{name}</a>
      </div>
      <div className="github_profile-login">{login}</div>
      <div className="github_profile-bio">{bio}</div>
      <div className="github_profile-repos">
        {repos.length ? (
          <ol className="github_profile-repos-list">
            {repos.map(repo => (
              <li key={repo} className="github_profile-repos-list-item">
                {repo}
              </li>
            ))}
          </ol>
        ) : (
          <div className="github_profile-repos-empty">
            <p>No repos were found.</p>
          </div>
        )}
      </div>
    </div>
  )
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
