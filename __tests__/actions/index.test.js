import * as actions from '../../src/js/actions'
import * as types from '../../src/js/constants/actionTypes'

describe('Actions', () => {
  it('requestUserProfile should return the correct type and username', () => {
    const username = 'Kyle'
    const action = actions.requestUserProfile(username)
    const expected = {
      type: types.REQUEST_USER_PROFILE,
      username
    }

    expect(action).toEqual(expected)
  })

  it('receiveUserProfileSuccess should return the correct type and user', () => {
    const user = { name: 'Kyle' }
    const action = actions.receiveUserProfileSuccess(user)
    const expected = {
      type: types.RECEIVE_USER_PROFILE_SUCCESS,
      user
    }

    expect(action).toEqual(expected)
  })

  it('receiveUserProfileFail should return the correct type and error', () => {
    const error = { message: 'error' }
    const action = actions.receiveUserProfileFail(error)
    const expected = {
      type: types.RECEIVE_USER_PROFILE_FAIL,
      error
    }

    expect(action).toEqual(expected)
  })

  it('requestUserRepos should return the correct type', () => {
    const action = actions.requestUserRepos()
    const expected = { type: types.REQUEST_USER_REPOS }

    expect(action).toEqual(expected)
  })

  it('receiveUserReposSuccess should return the correct type and repos', () => {
    const repos = ['foo', 'bar']
    const action = actions.receiveUserReposSuccess(repos)
    const expected = {
      type: types.RECEIVE_USER_REPOS_SUCCESS,
      repos
    }

    expect(action).toEqual(expected)
  })

  it('receiveUserReposFail should return the correct type and error', () => {
    const error = { message: 'error' }
    const action = actions.receiveUserReposFail(error)
    const expected = {
      type: types.RECEIVE_USER_REPOS_FAIL,
      error
    }

    expect(action).toEqual(expected)
  })
})
