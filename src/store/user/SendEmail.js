import {  createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';
import { toastEmitter } from '../../Functions/toastEmitter';


export const sendEmail = createAsyncThunk(
  'auth/sendEmail',
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;


    try {
      const res = await fetch(`${api}/user/send-mail`,{
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

      throw resData.message
     }
           toastEmitter(resData.message)

      return {user:resData.data.user,forgetPassword:data.forgetPassword}
    }
    catch(error){
            return rejectWithValue(error)

    }
  }
);