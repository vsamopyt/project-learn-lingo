export const selectItems = (state) => state.teachers.items;
export const selectTotalItems = (state) => state.teachers.totalAvailableItems;
export const selectSavedItems = (state) => state.teachers.totalSavedItems;
export const selectIsLoading = (state) => state.teachers.isLoading;
export const selectStartKey = (state) => state.teachers.startKey;
export const selectHasFilter = (state) => state.teachers.hasFilter;