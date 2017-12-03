import React from 'react'
import PropTypes from 'prop-types'

const User = ({ name, age, jobTitle }) => (
  <div>
    <h2>
      {name}, {age} years old
    </h2>
    <h5>{jobTitle}</h5>
  </div>
)

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  jobTitle: PropTypes.string.isRequired
}

export default User
