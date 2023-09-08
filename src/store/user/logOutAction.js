import {  createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';


export const logOut = createAsyncThunk(
  'auth/logOut',
  async (token, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`${api}/user/logout`,{
        method:'GET',
              headers: {
        "Accept": "application/json",
        "Authorization":`Bearer 11|ZuJRelrym2VWcVYJvsjIJJ0ii3MNNc1sLlucV1Xr`,
      },
      });
      const resData=await res.json()
     if(!res.ok){

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