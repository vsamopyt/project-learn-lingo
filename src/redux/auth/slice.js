import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, initializeUser, getUser } from './operations';

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    encodedUser: null,
    isLoading: false,
    isLoggedIn: false,
    isError: false,
    error: null,
    isInitialized: false,
  },

  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(logIn.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(logOut.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.isLoading = false;
        state.user = null;
        state.isLoggedIn = false;
        state.error = null;
        state.isInitialized = false;
        state.encodedUser = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(initializeUser.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(initializeUser.fulfilled, (state, action) => {
        state.isInitialized = true;
        state.isLoading = false;
        state.encodedUser = action.payload;
        state.error = null;
      })
      .addCase(initializeUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })

      .addCase(getUser.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isInitialized = action.payload[0][0];
        state.isLoading = false;
        state.encodedUser = action.payload[1];

        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const {} = slice.actions;

export default slice.reducer;
