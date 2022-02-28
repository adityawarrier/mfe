import classes from "components/Welcome/Welcome.module.css";
import React, { Suspense } from "react";
const ButtonTwo = React.lazy(() => import("APP_TWO/ButtonTwo"));

export const Welcome = () => (
  <Suspense fallback={<div>Loading....!</div>}>
    <div className={classes.container}>
      Welcome to Host!
      <ButtonTwo
        title="Test"
        onClick={() => {
          console.log("123");
        }}
      />
    </div>
  </Suspense>
);
