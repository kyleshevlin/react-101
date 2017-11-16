import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import bs from '../utils'
import GithubReposContainer from '../containers/GithubReposContainer'

const Name = styled.h1`
  font-size: 20px;
  margin-bottom: ${bs()};
`

const Login = styled.div`
  font-size: 14px;
  font-style: italic;
  margin-bottom: ${bs(0.5)};
`

const Bio = styled.div`
  width: 50%;
  margin-bottom: ${bs()};
`

const GithubProfile = ({ data }) =>
  data ? (
    <div className="github_profile">
      <Name>
        <a href={data.html_url}>{data.name}</a>
      </Name>
      <Login>{data.login}</Login>
      <Bio className="github_profile-bio">{data.bio}</Bio>
      <GithubReposContainer />
    </div>
  ) : null

GithubProfile.propTypes = {
  data: PropTypes.shape({
    login: PropTypes.string,
    name: PropTypes.string,
    html_url: PropTypes.string,
    bio: PropTypes.string
  })
}

GithubProfile.defaultProps = {
  data: null
}

export default GithubProfile
