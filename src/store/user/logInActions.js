import {  createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';


export const logIn = createAsyncThunk(
  'user/logIn',
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;


    try {
      const res = await fetch(`${api}/user/login`,{
        method:'POST',
              headers: {
        "Accept": "application/json",
        "Authorization":"application/json",
      },
      body:data.formData
      });
      const resData=await res.json()
     if(resData.errors && !resData.result){
      throw resData.errors
     }
      return resData.data
    }
    catch(error){
            return rejectWithValue(error)

    }
  }
);