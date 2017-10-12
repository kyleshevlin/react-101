import React from 'react'
import { shallow } from 'enzyme'
import Greeting from '../../src/js/components/Greeting'

describe('Greeting', () => {
  it('should render correctly', () => {
    const component = shallow(<Greeting />)
    expect(component).toMatchSnapshot()
  })
})
