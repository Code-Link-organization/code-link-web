import { createSlice } from '@reduxjs/toolkit';
import { fetchLikesForPost } from './fetchLikesForPost';

const postsSlice=createSlice({
    name:'posts',
    initialState:{
        posts:[],
        postsLikesData:[]
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
  },
})

export const postsReducer=postsSlice.reducer
export const {deletePost,setPosts,editPost,addPost}=postsSlice.actions