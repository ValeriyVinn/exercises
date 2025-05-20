import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error in component:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Check your code!</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
