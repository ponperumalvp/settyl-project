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

// Action creators are generated for each case reducer function
export const { setParentState } = myReducer.actions;
export const settylReducer = myReducer.reducer;
