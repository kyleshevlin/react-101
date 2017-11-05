import React from 'react'
import Greeting from '../../src/js/components/Greeting'

describe('Greeting', () => {
  it('should render correctly', () => {
    const component = shallow(<Greeting />)

    expect(component).toMatchSnapshot()
  })

  it('should render with the provided message', () => {
    const message = 'React 101'
    const component = render(<Greeting message={message} />)

    expect(component.text()).toEqual(message)
  })
})
