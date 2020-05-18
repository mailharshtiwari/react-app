import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
      hasError: false,
      error: { message: '', stack: '' },
      info: { componentStack: '' }
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Catch errors in any components below and re-render with error message
    this.setState({ error, info });
    // You can also log error messages to an error reporting service here
  }

  render() {
    const { hasError, error, info } = this.state;
    const { children } = this.props;

    //if (this.state.errorInfo) {
    if (hasError) {
      // Error path
      return (
        <div>
          <h1>Oops, something went wrong :(</h1>
          <p>The error: {error.toString()}</p>
          <p>Where it occured: {info.componentStack}</p>          
        </div>
      );
    }
    // Normally, just render children
    return children;
  }
}

export default ErrorBoundary