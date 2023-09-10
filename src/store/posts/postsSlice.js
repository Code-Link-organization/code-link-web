import { createSlice } from '@reduxjs/toolkit';
import { comment } from 'postcss';
import { fetchCommentForPost } from './fetchCommentsForPost';
import { fetchLikesForPost } from './fetchLikesForPost';

const postsSlice=createSlice({
    name:'posts',
    initialState:{
        posts:[],
        postsLikesData:[],
        postsCommentsData:[]
    },
    reducers:{
        setPosts:(state,action)=>{
          state.posts=action.payload  
        },
        addPost:(state,action)=>{
            const newPost=action.payload
            state.posts.unshift(newPost)
        },
        deletePost:(state,action)=>{
            const allPosts=state.posts
            state.posts=allPosts.filter(post=>post.id!=action.payload.id)
        },
        addComment:(state,action)=>{
      const { postId, comments } = action.payload;

      // Find the index of the post with the matching postId
      const postIndex = state.postsCommentsData.findIndex(post => post.postid === postId);

      if (postIndex !== -1) {
        // Replace the old comments with the updated ones
        state.postsCommentsData[postIndex].commentsData = comments;
      }
        },
        editPost:(state,action)=>{
           const allPosts=state.posts
           const editedPost=allPosts.find(post=>post.id==action.payload)
           editedPost.content=action.payload.content
           editedPost['image_path']=action.payload['image_path']
           state.posts=allPosts.map(post=>{
            if(post.id==action.payload.id){
              return editedPost
            }
            else{
                return post
            }
           })
        },
        // setPostLike:(state,action)=>{
        //    const allPosts=state.posts
        //    const user
        //    const editedPost=allPosts.find(post=>post.post_id==action.payload.postid)            
        //    const condition =  editedPost.likesData.some((userData) => userData.user_id === user_id);

        //     }
        // }
        
    },
  extraReducers: (builder) => {
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
})

export const postsReducer=postsSlice.reducer
export const {deletePost,setPosts,editPost,addPost,addComment}=postsSlice.actions