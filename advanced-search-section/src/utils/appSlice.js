import { createSlice } from "@reduxjs/toolkit";

const appslice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closemenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});
export const { toggleMenu, closemenu } = appslice.actions;
export default appslice.reducer;
