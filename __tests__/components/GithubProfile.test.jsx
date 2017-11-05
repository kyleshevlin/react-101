import React from 'react'
import GithubProfile from '../../src/js/components/GithubProfile'

describe('GithubProfile', () => {
  it('should be empty with no data', () => {
    const component = shallow(<GithubProfile />)

    expect(component).toMatchSnapshot()
  })

  it('should display UI with data', () => {
    const data = {
      url: 'foo.com',
      name: 'Kyle',
      login: 'kyle',
      bio: 'Cool bio!'
    }
    const component = shallow(<GithubProfile data={data} />)

    expect(component).toMatchSnapshot()
    expect(component.find('a').prop('href')).toEqual(data.url)
    expect(component.find('a').text()).toEqual(data.name)
    expect(component.find('.github_profile-login').text()).toEqual(data.login)
    expect(component.find('.github_profile-bio').text()).toEqual(data.bio)
  })
})
