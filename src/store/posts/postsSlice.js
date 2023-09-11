import { createSlice } from '@reduxjs/toolkit';
import { fetchCommentForPost } from './fetchCommentsForPost';
import { fetchLikesForPost } from './fetchLikesForPost';
import { fetchPosts } from './fetchPosts';




const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    postsLikesData: [],
    postsCommentsData: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      const newPost = action.payload;
      state.posts.unshift(newPost);
    },
    deletePost: (state, action) => {
      const postId = action.payload.id;
      state.posts = state.posts.filter((post) => post.id !== postId);
    },
    editPost: (state, action) => {
      const editedPost = action.payload;
      const postIndex = state.posts.findIndex((post) => post.id === editedPost.id);
      if (postIndex !== -1) {
        state.posts[postIndex] = editedPost;
      }
    },
    addComment: (state, action) => {
      const { postId, comments } = action.payload;
      const postIndex = state.postsCommentsData.findIndex((item) => item.postid === postId);

      if (postIndex !== -1) {
        state.postsCommentsData[postIndex].commentsData = comments;
      } else {
        state.postsCommentsData.push({ postid: postId, commentsData: comments });
      }
    },
    // Define your other reducers here
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      console.log(action.payload)
      state.posts = action.payload.postData;


        
      

    });

    builder.addCase(fetchLikesForPost.fulfilled, (state, action) => {
      const fetchedData = action.payload.likeData;

      if (fetchedData.length > 0) {
        const postId = fetchedData[0].post_id;

        // Check if like data for the post already exists
        const existingPostLikeDataIndex = state.postsLikesData.findIndex((item) => item.postid === postId);

        if (existingPostLikeDataIndex === -1) {
          // If it doesn't exist, add it to the state
          state.postsLikesData.push({ postid: postId, likesData: fetchedData });
        } else {
          // If it already exists, update the likesData for that post
          state.postsLikesData[existingPostLikeDataIndex].likesData = fetchedData;
        }
      }

    });

    builder.addCase(fetchCommentForPost.fulfilled, (state, action) => {
      const fetchedData = action.payload.comments;


      if (fetchedData&& fetchedData.length > 0) {
        const postId = fetchedData[0].post_id;

        // Check if like data for the post already exists
        const existingPostDataIndex = state.postsCommentsData.findIndex((item) => item.postid === postId);

        if (existingPostDataIndex === -1) {
          // If it doesn't exist, add it to the state
          state.postsCommentsData.push({ postid: postId, commentsData: fetchedData });
        } else {
          // If it already exists, update the likesData for that post
          state.postsCommentsData[existingPostDataIndex].commentsData = fetchedData;
        }
      }
        
    });
  },
});

export const postsReducer = postsSlice.reducer;
export const { deletePost, setPosts, editPost, addPost, addComment } = postsSlice.actions;



