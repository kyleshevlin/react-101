import axios from 'axios'
import * as types from '../constants/actionTypes'

export function requestUserProfile(username) {
  return {
    type: types.REQUEST_USER_PROFILE,
    username
  }
}

export function receiveUserProfileSuccess(user) {
  return {
    type: types.RECEIVE_USER_PROFILE_SUCCESS,
    user
  }
}

export function receiveUserProfileFail(error) {
  return {
    type: types.RECEIVE_USER_PROFILE_FAIL,
    error
  }
}

export function fetchUserProfile(username) {
  return async dispatch => {
    let response

    dispatch(requestUserProfile(username))

    try {
      response = await axios.get(`https://api.github.com/users/${username}`)
    } catch (error) {
      dispatch(receiveUserProfileFail(error))
    }

    if (response) {
      dispatch(receiveUserProfileSuccess({ ...response.data, repos: [] }))
    }
  }
}

export function requestUserRepos() {
  return {
    type: types.REQUEST_USER_REPOS
  }
}

export function receiveUserReposSuccess(repos) {
  return {
    type: types.RECEIVE_USER_REPOS_SUCCESS,
    repos
  }
}

export function receiveUserReposFail(error) {
  return {
    type: types.RECEIVE_USER_REPOS_FAIL,
    error
  }
}

export function fetchUserRepos(url) {
  return async dispatch => {
    let response

    dispatch(requestUserRepos())

    try {
      response = await axios.get(url)
    } catch (error) {
      dispatch(receiveUserReposFail(error))
    }

    if (response) {
      const repos = response.data.map(repo => repo.full_name)
      dispatch(receiveUserReposSuccess(repos))
    }
  }
}
