import { Component } from "react";
import classes from "components/ErrorBoundary/ErrorBoundary.module.scss";

export default class ErrorBoundary extends Component {
  state = {
    error: "",
    errorInfo: "",
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error({ error, errorInfo });

    this.setState({ errorInfo });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className={classes.container}>Ooops! Some error occured!</div>
      );
    }

    return children;
  }
}
