import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/Users/UserSlice";
export const store = configureStore({
  reducer: {
    user: userReducer
  }
});
