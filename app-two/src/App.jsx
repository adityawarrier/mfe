import { useEffect } from "react";
import { Welcome } from "components/Welcome";
import classes from "src/App.module.scss";
import ErrorBoundary from "components/ErrorBoundary";

export const App = () => {
  useEffect(() => {
    console.log("App Mounted!");
  }, []);

  return (
    <ErrorBoundary>
      <div className={classes.container}>
        <Welcome />
      </div>
    </ErrorBoundary>
  );
};
