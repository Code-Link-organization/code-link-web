import {  createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';
import { toastEmitter } from '../../Functions/toastEmitter';


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
     if(!res.ok){
        toastEmitter(resData.message,'error')
      throw resData.errors
     }
     toastEmitter(resData.message)
      return resData.data
    }
    catch(error){
      console.log(error)
            return rejectWithValue(error)

    }
  }
);

