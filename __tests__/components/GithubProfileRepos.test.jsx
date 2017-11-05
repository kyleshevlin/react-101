import React from 'react'
import GithubProfileRepos from '../../src/js/components/GithubProfileRepos'

describe('GithubProfileRepos', () => {
  it('should render empty state if no repos', () => {
    const component = shallow(<GithubProfileRepos repos={[]} />)

    expect(component).toMatchSnapshot()
    expect(component.find('.github_profile-repos-empty').length).toEqual(1)
  })

  it('should list repos given to it', () => {
    const repos = ['foo', 'bar']
    const component = shallow(<GithubProfileRepos repos={repos} />)

    expect(component).toMatchSnapshot()
    expect(component.find('.github_profile-repos-list').length).toEqual(1)
    expect(component.find('.github_profile-repos-list-item').length).toEqual(
      repos.length
    )
    expect(
      component
        .find('.github_profile-repos-list-item')
        .first()
        .text()
    ).toEqual(repos[0])
  })

  it('should toggle repos visibility if toggle is clicked', () => {
    const repos = ['foo', 'bar']
    const component = shallow(<GithubProfileRepos repos={repos} />)

    expect(component).toMatchSnapshot()
    expect(component.find('.github_profile-repos-list').length).toEqual(1)

    component.find('button').simulate('click')

    expect(component).toMatchSnapshot()
    expect(component.find('.github_profile-repos-list').length).toEqual(0)

    component.find('button').simulate('click')

    expect(component).toMatchSnapshot()
    expect(component.find('.github_profile-repos-list').length).toEqual(1)
  })
})
