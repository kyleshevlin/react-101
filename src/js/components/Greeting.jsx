// @flow

import React from 'react'

const Greeting = ({ message }: { message: string }) => <h1>{message}</h1>

Greeting.defaultProps = {
  message: 'Hello world!'
}

export default Greeting
