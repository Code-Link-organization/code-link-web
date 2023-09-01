import {  createAsyncThunk } from '@reduxjs/toolkit';


export const signUp = createAsyncThunk(
  'user/signUp',
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

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