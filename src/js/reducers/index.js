import * as types from '../constants/actionTypes'

const initialState = {
  testState: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TEST_ACTION_CREATOR:
      return { ...state, testState: !state.testState }

    default:
      return state
  }
}

export default reducer
