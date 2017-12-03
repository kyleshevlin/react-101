import React from 'react'

// Higher Order Components are a useful advanced pattern in React.
// They are based on higher order functions, which are functions that
// either accept a function as an argument, or return a function (or both).

// In the case of Higher Order Components, they are a function that take
// a Component as an argument, and return a new component. Since we know
// that components are just functions in React, we can understand that these
// are just higher order functions.

// Typically, the pattern of writing a higher order component involves taking
// some arguments and a Component argument. Once these arguments are partially
// applied, a HOC returns a function that waits for its props before finally
// evaluating and returning the resulting Component.

// HOCs are very useful for sharing functionality with several components.
// Another nice reason to use HOCs is the ability to compose them as you would
// curried functions in functional programming. I'll show you an example.

// Here we have your basic compose function. Takes any number of functions,
// awaits a value and then applies them right to left to the value and
// each accumulated value.

export const compose = (...fns) => x =>
  fns.reduceRight((acc, fn) => fn(acc), x)

// Here we have several HOCs. Each of these accepts a value and applies it
// to the component passed in, potentially overriding any props with the
// corresponding name. We can compose these together to make a custom enhancing
// function.

export const withName = name => Component => props => (
  <Component {...props} name={name} />
)

export const withAge = age => Component => props => (
  <Component {...props} age={age} />
)

export const withJobTitle = jobTitle => Component => props => (
  <Component {...props} jobTitle={jobTitle} />
)

export const withKyle = compose(
  withJobTitle('Senior Software Engineer'),
  withAge(32),
  withName('Kyle')
)
