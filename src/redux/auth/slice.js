import { createSlice } from "@reduxjs/toolkit";
import {signUp} from "./operations"
import { act } from "react";

const slice = createSlice({
  name: "auth",
  initialState: {
        user: null,
        isLoading: false,
        isLoggedIn: false,
        isloading: false,
        isError: false,
        error: null
	},

  reducers: { },

  extraReducers: (builder) => {
    builder
    .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
    }
});

export const {  } = slice.actions;

export default slice.reducer;