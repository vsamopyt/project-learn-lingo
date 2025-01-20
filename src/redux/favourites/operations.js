import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getDatabase,
  ref,
  update,
  query,
  remove,
  orderByKey,
  startAt,
  startAfter,
  endAt,
  limitToFirst,
  get,
} from 'firebase/database';


export const addFavouriteItem = createAsyncThunk(
    'favourites/addFavouriteItem',
    async (reqParams, thunkAPI) => {
const {item, encodedUser} = reqParams;
        const db = getDatabase(); // Получение базы данных
        const itemsRef = ref(db, `users/${encodedUser}/${item.key}`); // Ссылка на коллекцию
    
        try {
            update(itemsRef, item);
            return item;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
    }  
  );
  

  export const getFavouriteItems = createAsyncThunk(
    'favourites/getFavouriteItems',
    async (user, thunkAPI) => {
const { email} =user
console.log(email);

        const db = getDatabase(); // Получение базы данных
     
                const itemsRef = ref(db, `users/${email}`); // Ссылка на коллекцию
        
        
        let dataQuery;
        try {
            dataQuery = query(itemsRef);
            const snapshot = await get(dataQuery);
            if (snapshot.exists()) {
                const data = snapshot.val();
                console.log(data);
                const rawData = Object.entries(data).map(([key, value]) => ({
                  key,
                  ...value,
                })).filter(item => item.key !== "isInitialized");
               return rawData;
             
              } else {
                // console.log("mistake");
                
                return [];
              }

        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }


    }
     
  );

  export const deleteFavouriteItem = createAsyncThunk(
    'favourites/deleteFavouriteItem',
    async (reqParams, thunkAPI) => {
const {item, encodedUser} = reqParams;
        const db = getDatabase(); // Получение базы данных
        const itemsRef = ref(db, `users/${encodedUser}/${item.key}`); // Ссылка на коллекцию
    
        try {
            remove(itemsRef);
            return item.key;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
    }  
  );
  
  

 