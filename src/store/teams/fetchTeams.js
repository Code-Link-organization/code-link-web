/* eslint-disable no-useless-catch */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';
import { toastEmitter } from '../../Functions/toastEmitter';
import { getOptions } from '../../options';


export const fetchTeams = createAsyncThunk(
  'posts/fetchTeams',
  async () => {
        const token=JSON.parse(localStorage.getItem('user')).token

    try {
      const response = await fetch(`${api}/teams`,getOptions(token));
            const resData = await response.json();
      if (!response.ok) {
        toastEmitter(resData.message,'error')
        throw resData.message;
      }
      return resData.data; // Return the fetched like data
    } catch (error) {
      return error;
    }
  }
);
