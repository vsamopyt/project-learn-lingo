import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getDatabase,
  ref,
  query,
  orderByKey,
  startAt,
  endAt,
  limitToFirst,
  get,
} from 'firebase/database';

export const getItems = createAsyncThunk(
  'teachers/getItems',
  async (reqParams, thunkAPI) => {
    const { startKey } = reqParams;
    const db = getDatabase(); // Получение базы данных
    const itemsRef = ref(db, 'items'); // Ссылка на вашу коллекцию

    let dataQuery;

    try {
      dataQuery = query(
        itemsRef,
        orderByKey(),
        startAt(startKey || ''),
        limitToFirst(4)
      );

      const snapshot = await get(dataQuery);


      if (snapshot.exists()) {
        const data = snapshot.val();
        return Object.entries(data).map(([key, value]) => ({
          key,
          ...value,
        }));
      } else {
        return [];
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

