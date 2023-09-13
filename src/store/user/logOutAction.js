import {  createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';
import { toastEmitter } from '../../Functions/toastEmitter';


export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_ ,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
    const token=await JSON.parse(localStorage.getItem('token'))
    const res = await fetch(`${api}/user/logout`,{
        method:'GET',
              headers: {
        "Accept": "application/json",
        "Authorization":`Bearer ${token}`,
      },
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