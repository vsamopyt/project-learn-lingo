import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    startKey: ' ',
    filter: {
      languages:"",
      levels: "",
      price: "",
    }
  },

  reducers: {
    updateStartKey: (state, action) => {
      state.startKey = action.payload;
    },
    updateFilter: (state, action)=>{
      state.filter= {...state.filter, ...action.payload}
  }
}
})

export const { updateStartKey, updateFilter } = slice.actions;

export default slice.reducer;
