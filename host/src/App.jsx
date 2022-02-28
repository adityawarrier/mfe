import { Suspense, useEffect } from "react";
import { Provider } from "react-redux";
import { Welcome } from "components/Welcome";
import ErrorBoundary from "components/ErrorBoundary";
import { store } from "state/store";
import classes from "src/App.module.scss";

export const App = () => {
  useEffect(() => {
    console.log("App Mounted!");
  }, []);

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <div className={classes.container}>
          <Suspense fallback={<div>Loading...</div>}>
            <Welcome />
          </Suspense>
        </div>
      </Provider>
    </ErrorBoundary>
  );
};
