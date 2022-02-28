import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "HOST/counterReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
