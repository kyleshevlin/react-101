import React from 'react'
import PropTypes from 'prop-types'

// Stateless functional components are simple functions that output markup
// directly as a result of their arguments. Generally, SFCs are also pure
// functions, which makes them easy to use and easy to test.

// SFCs take two arguments, a `props` object and a `context` object. As you
// can see in the SFC below, we are only taking in the `props` object, and
// we are destructuring a couple properties off the object: `name` and `age`.

// We can then use those props in our markup using a JSX expression `{}`.
// We can evaluate JavaScript inside of a JSX expression anywhere in our JSX.
// In this case, we display the values of `name` and `age`.

const MyStatelessFunctionalComponent = ({ name, age }) =>
  <div className="user">
    {name} - {age}
  </div>

// You will often work with PropTypes in a React project. They were recently separated
// out into their own package for React 16, but are still available and easy to use.
// PropTypes offer a means of statically type checking your application (ensuring you
// use the correct types around your app). You might also check out using Flow or
// TypeScript to add static type checking to your application.

// Here we define the types of our props. The library will throw a warning if
// we use the wrong type or forget to supply a required prop.

MyStatelessFunctionalComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default MyStatelessFunctionalComponent
