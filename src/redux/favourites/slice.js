import { createSlice } from "@reduxjs/toolkit";
import {addItem, getFavouriteItems, addUser} from "./operations"

const slice = createSlice({
  name: "favourites",
  initialState: {
    user: "",
    items: [],
    isLoading: false,
    isError: false,
    errorFavourite: "",
		
	},

  reducers: {
  
  },

   extraReducers: builder => {
      builder
      .addCase(addUser.pending, state => {
        // state.isLoading = true;
        state.isError = false;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        // state.items = action.payload;
        // state.isLoading = false; 
        console.log(action.payload);
        
        state.errorFavourite = null;
      })
      .addCase(addUser.rejected, (state, action) => {
        // state.isLoading = false;
        // state.isError = true;
        console.log(action.payload);
        
        state.errorFavourite = action.payload;
      })
        .addCase(addItem.pending, state => {
          state.isLoading = true;
          state.isError = false;
        })
        .addCase(addItem.fulfilled, (state, action) => {
          state.items = action.payload;
          state.isLoading = false; 
          state.errorFavourite = null;
        })
        .addCase(addItem.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.errorFavourite = action.payload;
        })
        .addCase(getFavouriteItems.pending, state => {
          // state.isLoading = true;
          state.isError = false;
        })
        .addCase(getFavouriteItems.fulfilled, (state, action) => {
          // state.items = action.payload;
          // state.isLoading = false; 
          console.log(action.payload);
          
          state.errorFavourite = null;
        })
        .addCase(getFavouriteItems.rejected, (state, action) => {
          // state.isLoading = false;
          // state.isError = true;
          console.log(action.payload);
          
          state.errorFavourite = action.payload;
        })
       
    },


});

export const {  } = slice.actions;

export default slice.reducer;