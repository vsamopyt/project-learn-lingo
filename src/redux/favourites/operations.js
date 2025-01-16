import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getDatabase,
  ref,
  update,
  query,
  orderByKey,
  startAt,
  startAfter,
  endAt,
  limitToFirst,
  get,
} from 'firebase/database';



export const addUser = createAsyncThunk(
    'favourites/addUser',
    async (newUser, thunkAPI) => {
        console.log();
        
        const {userEmail} = newUser;
        console.log(userEmail);
        const user = {[`users/${userEmail}`]:{ isInitialized: true } };
     
        const db = getDatabase(); // Получение базы данных
        const itemsRef = ref(db); // Ссылка на коллекцию

        console.log(user);
        
    
        try {
            update(itemsRef, user)
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }


    }
     
  );

export const addItem = createAsyncThunk(
    'favourites/addItem',
    async (newItem, thunkAPI) => {

        const db = getDatabase(); // Получение базы данных
        const itemsRef = ref(db, 'users'); // Ссылка на коллекцию
    
        try {
            update(itemsRef, newItem)
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }


    }
     
  );
  

  export const getFavouriteItems = createAsyncThunk(
    'favourites/getFavouriteItems',
    async (user, thunkAPI) => {
const {userEmail} =user
        const db = getDatabase(); // Получение базы данных
        // const itemsRef = ref(db, `users/${userEmail}`); // Ссылка на коллекцию
                const itemsRef = ref(db, `users`); // Ссылка на коллекцию
        console.log(itemsRef);
        
        let dataQuery;
        try {
            dataQuery = query(itemsRef);
            const snapshot = await get(dataQuery);
            if (snapshot.exists()) {
                const data = snapshot.val();
                console.log(data);
                
                return Object.keys(data).length;
              } else {
                console.log("mistake");
                
                return [];
              }

        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }


    }
     
  );
  

 