import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "../pages/auth/auth";
import api from "./middleware/api";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [...getDefaultMiddleware(), api],
});
