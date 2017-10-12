import * as actions from '../../src/js/actions'

describe('Actions', () => {
  it('testActionCreator should return a POJO with type TEST_ACTION_CREATOR', () => {
    const action = actions.testActionCreator()

    expect(typeof action).toBe('object')
    expect(action.type).toBe('TEST_ACTION_CREATOR')
  })
})
