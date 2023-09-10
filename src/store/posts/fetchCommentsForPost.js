/* eslint-disable no-useless-catch */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOptions } from '../../options';

const API_ENDPOINT = 'http://localhost:8000/api/posts';

export const fetchCommentForPost = createAsyncThunk(
  'posts/fetchLikesForPost',
  async (postId) => {
    try {
      const response = await fetch(`${API_ENDPOINT}/${postId}/comments`,getOptions('38|sum7kFXDl4oezUHHh6BgP6RhKAmdKPJ7YKGKK8bC'));
      if (!response.ok) {
        throw 'Failed to fetch likes data';
      }
      const resData = await response.json();
      return resData.data;
    } catch (error) {
      return error;
    }
  }
);
