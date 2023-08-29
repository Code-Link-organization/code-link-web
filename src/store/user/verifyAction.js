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
      const data=await res.json()
      console.log(data)
     if(data.errors && !data.result){
      console.log('error')
      throw data.errors
     }
      return data
    }
    catch(error){
            return rejectWithValue(error)

    }
  }
);

