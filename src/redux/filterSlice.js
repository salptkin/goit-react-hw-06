import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    search: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
