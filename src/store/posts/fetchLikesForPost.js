/* eslint-disable no-useless-catch */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOptions } from '../../options';

const API_ENDPOINT = 'http://localhost:8000/api/posts';

export const fetchLikesForPost = createAsyncThunk(
  'posts/fetchLikesForPost',
  async (postId) => {
        const token=JSON.parse(localStorage.getItem('user')).token

    try {
      const response = await fetch(`${API_ENDPOINT}/${postId}/likes`,getOptions(token));
      if (!response.ok) {
        throw 'Failed to fetch likes data';
      }
      const resData = await response.json();
      return resData.data; // Return the fetched like data
    } catch (error) {
      return error;
    }
  }
);
