import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorInfo: null
  }

  componentDidCatch(hasError, errorInfo) {
    this.setState({
      hasError,
      errorInfo
    })
  }

  render() {
    const { children, message } = this.props
    const { hasError, errorInfo } = this.state

    return hasError ? (
      <div>
        <p>{message}</p>
        <pre>
          <code>{errorInfo.componentStack}</code>
        </pre>
      </div>
    ) : (
      children
    )
  }
}

ErrorBoundary.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  message: PropTypes.string
}

ErrorBoundary.defaultProps = {
  message: 'There was an error. Sorry ¯_(ツ)_/¯'
}

export default ErrorBoundary
