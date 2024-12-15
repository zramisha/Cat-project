import { configureStore } from "@reduxjs/toolkit";
import mainLayoutReducer from "@/redux/layout/mainLayoutSlice";


export default configureStore({
  reducer: {
    mainLayout: mainLayoutReducer,

  },
  devTools: import.meta.env.NODE_ENV !== "production",
});