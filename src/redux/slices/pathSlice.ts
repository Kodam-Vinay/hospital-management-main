import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type pathSliceTypes = {
  activePath: string;
  previousPath: string;
};

const initialState: pathSliceTypes = {
  activePath: "",
  previousPath: "",
};

const pathSlice = createSlice({
  name: "path",
  initialState,
  reducers: {
    storeActivePath: (state, action: PayloadAction<string>) => {
      const currentPath = state.activePath;
      const newPath = action.payload;
      if (currentPath !== newPath) {
        state.previousPath = currentPath;
        state.activePath = newPath;
      }
    },
  },
});
export const { storeActivePath } = pathSlice.actions;
export default pathSlice.reducer;
