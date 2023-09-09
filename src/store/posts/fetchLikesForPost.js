/* eslint-disable no-useless-catch */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOptions } from '../../options';

// Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
const API_ENDPOINT = 'http://localhost:8000/api/posts';

// Define the async thunk function
export const fetchLikesForPost = createAsyncThunk(
  'posts/fetchLikesForPost',
  async (postId) => {
    try {
      const response = await fetch(`${API_ENDPOINT}/${postId}/likes`,getOptions('38|sum7kFXDl4oezUHHh6BgP6RhKAmdKPJ7YKGKK8bC'));
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
