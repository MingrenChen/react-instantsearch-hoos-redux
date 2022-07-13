import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducers";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
