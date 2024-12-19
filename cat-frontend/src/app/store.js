import { configureStore } from "@reduxjs/toolkit";
import mainLayoutReducer from "@/redux/layout/mainLayoutSlice";
import authReducer from "@/redux/auth/authSlice";
import {apiSlice} from "@/redux/api/apiSlice"

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    mainLayout: mainLayoutReducer,
    auth: authReducer,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
