import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cards",

  initialState: {},

  reducers: {},

  extraReducers: {},
});

const { actions, reducer } = slice;

/* ATM INGEN REMOVE FUNKTION ÄNNU, SKA FIXAS EN TILL REMOVE CARD */
export const { removeCard } = actions;

export default reducer;
