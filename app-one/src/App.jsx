import { Suspense, useEffect } from "react";
import { Provider } from "react-redux";
import { Welcome } from "components/Welcome";
import classes from "src/App.module.scss";
import { store } from "state/store";
import ErrorBoundary from "components/ErrorBoundary";

export const App = () => {
  useEffect(() => {
    console.log("App Mounted!");
  }, []);

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <div className={classes.container}>
          <Suspense fallback={<div>Loading...</div>}>
            <Welcome />
          </Suspense>
        </div>
      </ErrorBoundary>
    </Provider>
  );
};
