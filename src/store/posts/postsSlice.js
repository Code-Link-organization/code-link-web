import { createSlice } from '@reduxjs/toolkit';

const postsSlice=createSlice({
    name:'posts',
    initialState:{
        posts:[]
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
        }
    }
})

export const postsReducer=postsSlice.reducer
export const {deletePost,setPosts,editPost,addPost}=postsSlice.actions