import classes from "components/Welcome/Welcome.module.css";
import React, { Suspense } from "react";
const ButtonTwo = React.lazy(() => import("APP_TWO/ButtonTwo"));
import { useSelector } from "react-redux";

export const Welcome = () => {
  const counter = useSelector((state) => state.counter.value);
  console.log(counter);

  return (
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
};
