import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getDatabase,
  ref,
  query,
  orderByChild,
  orderByKey,
  startAt,
  endAt,
  limitToFirst,
  get,
} from 'firebase/database';



export const getItems = createAsyncThunk(
  'teachers/getItems',
  async ( reqParams, thunkAPI) => {
    const {startKey} = reqParams;
    const db = getDatabase(); // Получение базы данных
    const itemsRef = ref(db, 'items'); // Ссылка на вашу коллекцию
 
    
    
    let dataQuery;

    try {
         // Если startKey существует, используем его для пагинации
      dataQuery = query(
        itemsRef,
        orderByKey(), // Сортировка по ключу записи
        startAt(startKey || ''), // Пагинация с начального ключа
        limitToFirst(4) // Лимит на 4 элемента
      );

        
          const snapshot = await get(dataQuery);
        console.log(snapshot);
        
          if (snapshot.exists()) {
            const data = snapshot.val();
            return Object.entries(data).map(([key, value]) => ({
                key, // Включаем ключ записи как поле `key`
                ...value, // Включаем все другие данные записи
              }));
          } else {
            return [];
          }
  
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);






// copy 
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   getDatabase,
//   ref,
//   query,
//   orderByChild,
//   startAt,
//   endAt,
//   limitToFirst,
//   get,
// } from 'firebase/database';

// export const getItems = createAsyncThunk(
//   'teachers/getItems',
//   async (_, thunkAPI) => {
//     const db = getDatabase(); // Получение базы данных
//     const itemsRef = ref(db, 'items'); // Ссылка на вашу коллекцию
//     let dataQuery;

//     try {
//       dataQuery = query(itemsRef);
//       const snapshot = await get(dataQuery);

//       if (snapshot.exists()) {
//         const data = snapshot.val();

//         return Object.values(data); // Возвращаем массив данных
//       } else {
//         return [];
//       }
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
