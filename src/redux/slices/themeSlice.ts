import { createSlice } from "@reduxjs/toolkit";

type themeSliceType = {
  isDarkTheme: boolean;
};

const initialState: themeSliceType = {
  isDarkTheme: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});
export const { toggleThemeMode } = themeSlice.actions;
export default themeSlice.reducer;
