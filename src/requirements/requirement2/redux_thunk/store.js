import { configureStore } from "@reduxjs/toolkit";
import { settylReducer } from "./redux_thunk";

export const store = configureStore({
  reducer: {
    settyl: settylReducer,
  },
});
