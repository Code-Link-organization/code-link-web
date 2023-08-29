import {  createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';


export const logOut = createAsyncThunk(
  'user/logOut',
  async (token, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
   console.log(token)
    try {
      const res = await fetch(`${api}/user/logout`,{
        method:'GET',
              headers: {
        "Accept": "application/json",
        "Authorization":`Bearer 11|ZuJRelrym2VWcVYJvsjIJJ0ii3MNNc1sLlucV1Xr`,
      },
      });
      const resData=await res.json()
     if(resData.errors && !resData.result){
            console.log(resData.data?resData.data:resData)

      throw resData.errors
     }
     console.log(resData)
      return resData.data
    }
    catch(error){
       console.log(error)
      return rejectWithValue(error)

    }
  }
);