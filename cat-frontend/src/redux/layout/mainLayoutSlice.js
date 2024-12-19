import { createSlice } from "@reduxjs/toolkit";

export const mainLayoutSlice = createSlice({
  name: "mainLayout",
  initialState: {
    isNavbarMenuOpen: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleMobileMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleNavbarMenu: (state) => {
      state.isNavbarMenuOpen = !state.isNavbarMenuOpen;
    }
  },
});

// Action creators are generated for each case reducer function
export const { toggleSidebar, toggleMobileMenu, toggleNavbarMenu} = mainLayoutSlice.actions;

export default mainLayoutSlice.reducer;