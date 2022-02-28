import { useEffect } from "react";
import { Provider } from 'react-redux';
import { Welcome } from "components/Welcome";
import classes from "src/App.module.scss";
import { store } from "state/store";

export const App = () => {
  useEffect(() => {
    console.log("App Mounted!");
  }, []);

  return (
    <Provider store={store}>
      <div className={classes.container}>
        <Welcome />
      </div>
    </Provider>
  );
};
