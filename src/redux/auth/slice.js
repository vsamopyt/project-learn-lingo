import { createSlice } from "@reduxjs/toolkit";
import {signUp, logIn, logOut} from "./operations";

const slice = createSlice({
  name: "auth",
  initialState: {
        user: null,
        isLoading: false,
        isLoggedIn: false,
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
        state.error = null;

      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLoggedIn =true;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isLoggedIn =false;
        state.error = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
    }
});

export const {  } = slice.actions;

export default slice.reducer;