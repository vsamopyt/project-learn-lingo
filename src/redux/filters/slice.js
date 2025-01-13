import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    // startKey: ' ',
    hasFilter: false,
    filter: {
      languages:"",
      levels: "",
      price: "",
    }
  },

  reducers: {
    // updateStartKey: (state, action) => {
    //   state.startKey = action.payload;
    // },
  //   updateFilter: (state, action)=>{
  //     state.filter= {...state.filter, ...action.payload}
  // },
      updateFilter: (state, action)=>{
        // const hasFilter = Object.values(action.payload).some(
        //   filter => filter !== '' && filter !== null && filter !== undefined
        // );
        // state.hasFilter = hasFilter
      state.filter= {...state.filter, ...action.payload}
  },


//   updateHasFilter: (state, action)=>{
//     const hasFilter = Object.values(action.payload).some(
//       filter => filter !== '' && filter !== null && filter !== undefined
//     );
//     state.hasFilter = hasFilter


//     // state.filter= {...state.filter, ...action.payload}
// }
  


}
})

export const { updateStartKey, updateFilter} = slice.actions;

export default slice.reducer;
