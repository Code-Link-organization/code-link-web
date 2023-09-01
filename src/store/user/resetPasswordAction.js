import {  createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';


export const resetPassword = createAsyncThunk(
  'user/resetPassword',
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`${api}/user/reset-password`,{
        method:'POST',
              headers: {
        "Accept": "application/json",
        "Authorization":`Bearer ${data.token}`,
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