import React from 'react'
import PropTypes from 'prop-types'

// Render props are the evolution of a pattern called "Function as Children".
// Most of the time, we would expect the child of a component to be JSX.
// But because `children` is just a prop on a component, we can actually
// set the child to something other than more components easily. As the name
// would imply, in this pattern, we provide a function as a child to our
// component. We then supply arguments to this child function. It looks like this:

const KyleAsAFAC = ({ children }) =>
  children('Kyle', 32, 'Senior Software Engineer')

// So we call `children()` and pass in our arguments. To then use this in our,
// we would use it like so:

// eslint-disable-next-line no-unused-vars
const useFAC = (
  <KyleAsAFAC>
    {(name, age, jobTitle) => (
      <div>
        <h2>
          {name} - {age}
        </h2>
        <h5>{jobTitle}</h5>
      </div>
    )}
  </KyleAsAFAC>
)

// As you can see, our component supplies the child function with the arguments
// we specified. This can be another useful way for sharing functionality in
// our React applications.

// When you take this a bit further, we can move the function from the
// `children` prop and onto our own prop, most commonly called `render`,
// hence the name Render Prop for the pattern. They are virtually identical
// patterns.

const KyleProvider = ({ render }) =>
  render({
    name: 'Kyle',
    age: 32,
    jobTitle: 'Senior Software Engineer'
  })

KyleProvider.propTypes = {
  render: PropTypes.func.isRequired
}

export default KyleProvider
