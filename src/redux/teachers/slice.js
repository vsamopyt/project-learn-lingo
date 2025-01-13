import { createSlice } from '@reduxjs/toolkit';
import { getItems, getAllItems } from './operations';

const slice = createSlice({
  name: 'teachers',
  initialState: {
    items: [],
    startKey: ' ',
    hasFilter: false,
    totalAvailableItems: 0,
    totalSavedItems: 0,
    isLoading: false,
    isError: false,
    error: null,
  },

  reducers: {
    updateStartKey: (state, action) => {
  
        state.startKey = action.payload;
     
      // state.startKey = action.payload;
    },
    updateHasFilter: (state, action) => {
      const hasFilter = Object.values(action.payload).some(
        filter => filter !== '' && filter !== null && filter !== undefined
      );
      state.hasFilter = hasFilter;

      if(state.hasFilter) {
        state.startKey = ' ';
      }
    },
  },

  // reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getItems.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.isLoading = false;

        console.log(state.startKey);

        if (state.hasFilter) {
          state.items = action.payload;
        } else {
          if(state.startKey === ' ') {
            state.items=[]
          }
          const newItems = action.payload.filter(
            newItem => !state.items.some(oldItem => oldItem.key === newItem.key)
          );

          if (state.items.length > 0) {
            state.items = [...state.items, ...newItems];
            state.totalSavedItems = state.items.length;
          } else {
            state.items = action.payload;
            state.totalSavedItems = action.payload.length;
          }
        }


        state.error = null;
      })

      .addCase(getItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(getAllItems.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getAllItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.totalAvailableItems = action.payload;
        state.error = null;
      })
      .addCase(getAllItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { updateStartKey,  updateHasFilter } = slice.actions;

export default slice.reducer;
