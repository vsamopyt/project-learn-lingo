import { createAsyncThunk } from '@reduxjs/toolkit';
import {encodeEmail} from "../../utils/codingUserEmail"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../../config/firebase-config';
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

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (newUser, thunkAPI) => {
    console.log(newUser);
    const { email, password } = newUser;
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      return response.user.email;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/logIn', async (user, thunkAPI) => {
  const { email, password } = user;
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);

    return response.user.email;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const initializeUser = createAsyncThunk(
  'auth/initializeUser',
  async (newUser, thunkAPI) => {


    const { userEmail } = newUser;
 
    const user = { [`users/${userEmail}`]: { isInitialized: true } };

    const db = getDatabase(); // Получение базы данных
    const itemsRef = ref(db); // Ссылка на коллекцию

    console.log(user);

    try {
      await update(itemsRef, user);
      return userEmail;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const getUser = createAsyncThunk(
  'auth/getUser',
  async (user, thunkAPI) => {
    const {email } = user;
    const encodedEmail = encodeEmail(email)
    const db = getDatabase(); // Получение базы данных
    const itemsRef = ref(db, `users/${encodedEmail}`); // Ссылка на коллекцию

    let dataQuery;

    try {
      dataQuery = query(itemsRef);
      const snapshot = await get(dataQuery);

      if (snapshot.exists()) {
        const data = snapshot.val();
        return [Object.values(data), encodedEmail ];
      } else {
        return [];
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);