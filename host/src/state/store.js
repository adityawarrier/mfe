import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "state/counter";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
