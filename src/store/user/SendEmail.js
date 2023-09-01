import {  createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';


export const sendEmail = createAsyncThunk(
  'user/sendEmail',
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
     if(resData.errors && !resData.result){
      throw resData.message
     }
      return {user:resData.data.user,forgetPassword:data.forgetPassword}
    }
    catch(error){
            return rejectWithValue(error)

    }
  }
);