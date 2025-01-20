import { createSlice } from "@reduxjs/toolkit";
import {addFavouriteItem, getFavouriteItems, deleteFavouriteItem} from "./operations"

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
  //   addReducerFafouriteItem: (state, action) => {
  
  //     state.items = [...state.items, action.payload];
   

  // },
  
  },

   extraReducers: builder => {
      builder
      // .addCase(addUser.pending, state => {
      //   // state.isLoading = true;
      //   state.isError = false;
      // })
      // .addCase(addUser.fulfilled, (state, action) => {
      //   // state.items = action.payload;
      //   // state.isLoading = false; 
      //   console.log(action.payload);
        
      //   state.errorFavourite = null;
      // })
      // .addCase(addUser.rejected, (state, action) => {
      //   // state.isLoading = false;
      //   // state.isError = true;
      //   console.log(action.payload);
        
      //   state.errorFavourite = action.payload;
      // })
        .addCase(addFavouriteItem.pending, state => {
          state.isLoading = true;
          state.isError = false;
        })
        .addCase(addFavouriteItem.fulfilled, (state, action) => {
          // state.items = action.payload;
          state.items = [...state.items, action.payload];
          state.isLoading = false; 
          state.errorFavourite = null;
        })
        .addCase(addFavouriteItem.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.errorFavourite = action.payload;
        })
        .addCase(getFavouriteItems.pending, state => {
          state.isLoading = true;
          state.isError = false;
        })
        .addCase(getFavouriteItems.fulfilled, (state, action) => {
          state.items = action.payload;
          state.isLoading = false; 
          state.errorFavourite = null;
        })
        .addCase(getFavouriteItems.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.errorFavourite = action.payload;
        })
        .addCase(deleteFavouriteItem.pending, state => {
          state.isLoading = true;
          state.isError = false;
        })
        .addCase(deleteFavouriteItem.fulfilled, (state, action) => {
          state.items = state.items.filter(item => item.key !== action.payload );
          console.log(action.payload);
          
          state.isLoading = false; 
          state.errorFavourite = null;
        })
        .addCase(deleteFavouriteItem.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.errorFavourite = action.payload;
        })
       
    },


});

export const { addReducerFafouriteItem } = slice.actions;

export default slice.reducer;