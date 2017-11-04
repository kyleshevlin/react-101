import * as types from '../constants/actionTypes'

const initialState = {
  waitingForUser: false,
  hasUserError: false,
  hasReposError: false,
  reposError: null,
  user: {
    login: '',
    name: '',
    url: '',
    bio: '',
    repos: []
  },
  userError: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_USER_PROFILE:
      return {
        ...state,
        waitingForUser: true,
        hasUserError: false,
        userError: null
      }

    case types.RECEIVE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        waitingForUser: false,
        user: action.user
      }

    case types.RECEIVE_USER_PROFILE_FAIL:
      return {
        ...state,
        waitingForUser: false,
        hasUserError: true,
        userError: action.error
      }

    case types.REQUEST_USER_REPOS:
      return {
        ...state,
        waitingForRepos: true,
        hasReposError: false,
        reposError: null
      }

    case types.RECEIVE_USER_REPOS_SUCCESS:
      return {
        ...state,
        waitingForRepos: false,
        user: {
          ...state.user,
          repos: action.repos
        }
      }

    case types.RECEIVE_USER_REPOS_FAIL:
      return {
        ...state,
        waitingForRepos: false,
        hasReposError: true,
        reposError: action.error
      }

    default:
      return state
  }
}

export default reducer
