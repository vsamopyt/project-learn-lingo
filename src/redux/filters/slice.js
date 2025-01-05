import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    startKey: ' ',
  },

  reducers: {
    updateStartKey: (state, action) => {
      state.startKey = action.payload;
    },
  },
});

export const { updateStartKey } = slice.actions;

export default slice.reducer;
