import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Button = React.lazy(() => import("APP_TWO/ButtonTwo"));
import counterActions from "HOST/counterActions";

export const Welcome = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h2>{count}</h2>
      <Button
        title="Increment"
        onClick={() => {
          dispatch(counterActions.increment());
        }}
      />
      <Button
        title="Decrement"
        onClick={() => {
          dispatch(counterActions.decrement());
        }}
      />
    </div>
  );
};
