import {  createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';
import { toastEmitter } from '../../Functions/toastEmitter';


export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
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
     if(res.ok){
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