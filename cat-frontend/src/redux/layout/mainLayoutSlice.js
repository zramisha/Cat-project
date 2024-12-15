import { createSlice } from "@reduxjs/toolkit";

export const mainLayoutSlice = createSlice({
  name: "mainLayout",
  initialState: {
    isNavbarMenuOpen: false,
  },
  reducers: {
    toggleNavbarMenu: (state) => {
      state.isNavbarMenuOpen = !state.isNavbarMenuOpen;
    }
  },
});

// Action creators are generated for each case reducer function
export const {toggleNavbarMenu} = mainLayoutSlice.actions;

export default mainLayoutSlice.reducer;