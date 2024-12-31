import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/slice.js";
import teachersReducer from "./teachers/slice.js";
import favouritesReducer from "./favourites/slice.js";
import filtersReducer from "./filters/slice.js";
import modalsReducer from "./modals/slice.js";


export const store =configureStore({
    reducer: {
        auth: authReducer,
        teachers: teachersReducer,
        favourites: favouritesReducer,
        filters: filtersReducer,
        modals: modalsReducer
    }
});