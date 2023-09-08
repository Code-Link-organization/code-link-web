// import {  createAsyncThunk } from '@reduxjs/toolkit';
// import { api } from '../../api';


// export const logIn = createAsyncThunk(
//   'auth/logIn',
//   async (data, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;


//     try {
//       const res = await fetch(`${api}/user/login`,{
//         method:'POST',
//               headers: {
//         "Accept": "application/json",
//         "Authorization":"application/json",
//       },
//       body:data.formData
//       });
//       const resData=await res.json()
//     if (response.status === 401) {
//         return resData.data
//       }
//      if(!res.ok){

//       throw resData.errors
//      }
//       return resData.data
//     }
//     catch(error){
//             return rejectWithValue(error)

//     }
//   }
// );


import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';

export const logIn = createAsyncThunk('auth/logIn', async (data, { rejectWithValue }) => {
  try {
    const response = await fetch(`${api}/user/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Authorization":"application/json",
      },
      body: data.formData
    });
      const resData=await response.json()


    if (!response.ok && !response.status === 401) {
      throw resData.errors;
    }

    return resData.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});