import {  createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';


export const verifyAction = createAsyncThunk(
  'user/verifyAction',
  async ( userdata,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log(userdata)
    try {
      const res = await fetch(`${api}/user/check-code`,{
        method:'POST',
              headers: {
        "Accept": "application/json",
        "Authorization":"application/json"
      },
      body:userdata
      });
      const resData=await res.json()
     if(resData.errors && !resData.result){
      throw resData.errors
     }
      return resData.data
    }
    catch(error){
      console.log(error)
            return rejectWithValue(error)

    }
  }
);

