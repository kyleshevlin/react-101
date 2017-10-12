import reducer from '../../src/js/reducers'
import * as actions from '../../src/js/actions'

describe('Reducer', () => {
  it('returns state when action is unaccounted for', () => {
    const initialState = {
      testState: false
    }

    expect(reducer(
      initialState,
      { type: 'UNACCOUNTED_ACTION' }
    )).toEqual(initialState)
  })


  it('toggles testState with action TEST_ACTION_CREATOR', () => {
    const initialState = {
      testState: false
    }

    const expectedState = {
      testState: true
    }

    const action = actions.testActionCreator()

    expect(
      reducer(initialState, action)
    ).toEqual(expectedState)
  })
})
