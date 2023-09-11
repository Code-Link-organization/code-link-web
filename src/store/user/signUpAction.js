import {  createAsyncThunk } from '@reduxjs/toolkit';
import { toastEmitter } from '../../Functions/toastEmitter';


export const signUp = createAsyncThunk(
  'auth/signUp',
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log(data)

    try {
      const res = await fetch('http://localhost:8000/api/user/signup',{
        method:'POST',
              headers: {
        "Accept": "application/json",
        "Authorization":"application/json",
      },
      body:data.formData
      });
      const resData=await res.json()
     if(!res.ok){
            toastEmitter(resData.message,'error')

      throw resData.errors
     }
     toastEmitter(resData.message)
      return resData.data
    }
    catch(error){
      return rejectWithValue(error)

    }
  }
);