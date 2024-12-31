import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";

export const signUp= createAsyncThunk(
    'auth/signUp',
    async(newUser, thunkAPI) =>{
       console.log(newUser);
       const {email, password} = newUser
   
        try {
            const response = await(createUserWithEmailAndPassword(auth, email, password))
            
            
            return response.user.email;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
            
        }
      
    }
)