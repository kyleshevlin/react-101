import reducer from '../../src/js/reducers'
import * as actions from '../../src/js/actions'

describe('Reducer', () => {
  it('returns state when action is unaccounted for', () => {
    const state = {
      testState: false
    }
    const action = { type: 'UNACCOUNTED_ACTION' }

    expect(reducer(state, action)).toEqual(state)
  })

  it('requestUserProfile updates waitingForUser, hasUserError and userError', () => {
    const state = {
      waitingForUser: false,
      hasUserError: true,
      userError: { message: 'foo' }
    }
    const action = actions.requestUserProfile('foo')
    const nextState = reducer(state, action)

    expect(nextState.waitingForUser).toBe(true)
    expect(nextState.hasUserError).toBe(false)
    expect(nextState.userError).toBeNull()
  })

  it('receiveUserProfileSuccess updates waitingForUser and user', () => {
    const state = {
      waitingForUser: true,
      user: null
    }
    const user = { name: 'Kyle' }
    const action = actions.receiveUserProfileSuccess(user)
    const nextState = reducer(state, action)

    expect(nextState.waitingForUser).toBe(false)
    expect(nextState.user).toEqual(user)
  })

  it('receiveUserProfileFail updates waitingForUser and error', () => {
    const state = {
      waitingForUser: true,
      hasUserError: false,
      userError: null
    }
    const error = { message: 'foo' }
    const action = actions.receiveUserProfileFail(error)
    const nextState = reducer(state, action)

    expect(nextState.waitingForUser).toBe(false)
    expect(nextState.hasUserError).toBe(true)
    expect(nextState.userError).toEqual(error)
  })

  it('requestUserRepos updates waitingForRepos, hasReposError, and reposError', () => {
    const state = {
      waitingForRepos: false,
      hasReposError: true,
      reposError: { message: 'foo' }
    }
    const action = actions.requestUserRepos()
    const nextState = reducer(state, action)

    expect(nextState.waitingForRepos).toBe(true)
    expect(nextState.hasReposError).toBe(false)
    expect(nextState.reposError).toBeNull()
  })

  it('receiveUserReposSuccess updates waitingForRepos and repos', () => {
    const state = {
      waitingForRepos: true,
      user: {
        repos: []
      }
    }
    const repos = ['foo', 'bar']
    const action = actions.receiveUserReposSuccess(repos)
    const nextState = reducer(state, action)

    expect(nextState.waitingForRepos).toBe(false)
    expect(nextState.user.repos).toEqual(repos)
  })

  it('receiveUserReposFail updates waitingForRepos and error', () => {
    const state = {
      waitingForRepos: true,
      hasReposError: false,
      reposError: null
    }
    const error = { message: 'foo' }
    const action = actions.receiveUserReposFail(error)
    const nextState = reducer(state, action)

    expect(nextState.waitingForRepos).toBe(false)
    expect(nextState.hasReposError).toBe(true)
    expect(nextState.reposError).toEqual(error)
  })
})
