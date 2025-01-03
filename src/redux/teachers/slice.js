import { createSlice } from "@reduxjs/toolkit";
import {getItems} from "./operations"

const slice = createSlice({
  name: "teachers",
  initialState: {
		items:[],
        isLoading: false,
        isError: false,
        error: null
	},

  reducers: {},
   extraReducers: (builder) => {
      builder
      .addCase(getItems.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
        })
        .addCase(getItems.fulfilled, (state, action) => {
          state.isLoading = false;
          state.items = action.payload;
          state.error = null;
  
        })
        .addCase(getItems.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.error = action.payload;
        })
        
      }

});

export const {  } = slice.actions;

export default slice.reducer;