import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    loggedUser: null,
  },
  reducers: {
    setLoggedInInfo: (state, action) => {
      state.token = action.payload.token;
      state.loggedUser = action.payload.loggedUser;
    },
    clearLoggedInUserInfo: (state) => {
      state.token = "";
      state.loggedUser = null;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedInInfo, clearLoggedInUserInfo } = authSlice.actions;

export default authSlice.reducer;





