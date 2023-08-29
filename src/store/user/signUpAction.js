import {  createAsyncThunk } from '@reduxjs/toolkit';


export const signUp = createAsyncThunk(
  'user/signUp',
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
  console.log(formData)

    try {
      const res = await fetch('http://localhost:8000/api/user/signup',{
        method:'POST',
              headers: {
        "Accept": "application/json",
        "Authorization":"application/json",
      },
      body:formData
      });
      const resData=await res.json()
      console.log(resData.data?resData.data:resData)
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