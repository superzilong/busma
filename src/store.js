import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./pages/auth/auth";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
