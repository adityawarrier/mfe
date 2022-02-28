import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Button = React.lazy(() => import("APP_TWO/ButtonTwo"));

export const Welcome = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h2>{count}</h2>
      <Button
        title="Increment"
        onClick={() => {
          import("HOST/counterActions").then(({ default: counterActions }) => {
            dispatch(counterActions.increment());
          });
        }}
      />
      <Button
        title="Decrement"
        onClick={() => {
          import("HOST/counterActions").then(({ default: counterActions }) => {
            dispatch(counterActions.decrement());
          });
        }}
      />
    </div>
  );
};
