import { createSlice } from '@reduxjs/toolkit';
import { getItems, getAllItems } from './operations';

const slice = createSlice({
  name: 'teachers',
  initialState: {
    items: [],
    totalAvailableItems: 0,
    totalSavedItems: 0,
    isLoading: false,
    isError: false,
    error: null,
  },

  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getItems.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.isLoading = false;

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

export const {} = slice.actions;

export default slice.reducer;
