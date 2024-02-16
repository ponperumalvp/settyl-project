import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  parentState: "",
};

export const myReducer = createSlice({
  name: "settyl",
  initialState,
  reducers: {
    setParentState: (state, action) => {
      state.parentState = action.payload;
    },
  },
});

export const { setParentState } = myReducer.actions;
export const settylReducer = myReducer.reducer;
