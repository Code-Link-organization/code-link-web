import { createSlice } from '@reduxjs/toolkit';
import { logIn } from './logInActions';
import { logOut } from './logOutAction';
import { signUp } from './signUpAction';
import { verifyAction } from './verifyAction';

const initialState={        
        user:null,
        error:null,
        loading:false,
        verified:false
    
    }
const userSlice=createSlice({
    name:'user',
    initialState,
    extraReducers:{

    //sign Up    
        [signUp.pending]:(state)=>{
            state.loading=true;
            state.error=null
        },

        [signUp.fulfilled]:(state,action)=>{
            state.loading=false;
            state.error=null;
            state.user=action.payload.user
            localStorage.setItem('user',JSON.stringify(action.payload.user))
        },     
        [signUp.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload
        },

      //sign In    
        [logIn.pending]:(state)=>{
            state.loading=true;
            state.error=null
        },

        [logIn.fulfilled]:(state,action)=>{
            state.loading=false;
            state.error=null;
            state.user=action.payload.data;
            if(action.payload.data.user['email_verified_at']){
                 state.verified=true;
                                                             }
            localStorage.setItem('user',JSON.stringify(action.payload.data))
        },     
        [logIn.rejected]:(state,action)=>{
            state.loading=false;
            state.error=action.payload
        },
        
        //verify
        [verifyAction.pending]:(state)=>{
          state.loading=true;
          state.error=null;
        },
        [verifyAction.rejected]:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        [verifyAction.fulfilled]:(state,action)=>{
            state.verified=true;
            state.user=action.payload.user
            state.loading=false;
            state.error=null;    
            localStorage.setItem('user',JSON.stringify(action.payload.user))     
            console.log(action.payload.user)   
        },


        //logout
        [logOut.fulfilled]:(state)=>{
            console.log('hello')
            state.loading=false;
            state.error=null;
            state.verified=false;
            state.user=null
            localStorage.clear()
        },


            
    },
            //set errors to null
       reducers:{
        errorsToNull:(state)=>{

           state.error=null
        },

        setSavedUser:(state,action)=>{
            state.user=action.payload
                        if(action.payload['email_verified_at']){
                 state.verified=true;
                                                             }
            
        }
       }

})

export const userReducer=userSlice.reducer;
export const {errorsToNull,setSavedUser}=userSlice.actions;