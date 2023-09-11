import { createSlice } from '@reduxjs/toolkit';
import { logOut } from './logOutAction';
import { resetPassword } from './resetPasswordAction';
import { sendEmail } from './SendEmail';
import { signUp } from './signUpAction';
import { verifyAction } from './verifyAction';
import { logIn } from './logInActions';
const initialState = {
  user: null,
  error: null,
  loading: false,
  verified: false,
  forgetPassword: false,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    errorsToNull: (state) => {
      if (state.error && state.error.code) {
        return;
      }
      state.error = null;
    },
    setSavedUser: (state, action) => {
      state.user = action.payload;
      if (action.payload.token) {
        state.verified = true;
      }
      if (action.payload.forgetPassword) {
        state.forgetPassword = true;
      }
    },
  },
  extraReducers: (builder) => {
       builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        console.log(action.payload.user)
        state.loading = false;
        state.error = null;
        state.user = action.payload.user;
      })
      .addCase(signUp.rejected, (state, action) => {
      
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.user;
        if (action.payload.user.token) {
          localStorage.setItem('token', JSON.stringify(action.payload.user.token));
          state.verified = true;
          state.isLoggedIn = true;
        }
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      })
      .addCase(logIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log(action)
      })
      .addCase(verifyAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyAction.fulfilled, (state, action) => {
        state.verified = true;
        state.user = action.payload.user;
        state.loading = false;
        state.error = null;
        if (state.forgetPassword === false) {
          localStorage.setItem('user', JSON.stringify(action.payload.user));
          localStorage.setItem('token',JSON.stringify(action.payload.user.token))
        }
      })
      .addCase(verifyAction.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.verified = false;
        state.user = null;
        state.isLoggedIn = false;
        localStorage.clear();
      })
      .addCase(sendEmail.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(sendEmail.rejected, (state, action) => {
        state.error = { email: [action.payload] };
        state.loading = false;
      })
      .addCase(sendEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.user;
        if (action.payload.forgetPassword) {
          state.forgetPassword = true;
        }
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.forgetPassword = false;
        state.loading = false;
        localStorage.setItem('user', JSON.stringify(state.user));
        localStorage.setItem('token', JSON.stringify(state.user.token));

      });
  },
});

export const { errorsToNull, setSavedUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
















// import { createSlice } from '@reduxjs/toolkit';
// import { logIn } from './logInActions';
// import { logOut } from './logOutAction';
// import { resetPassword } from './resetPasswordAction';
// import { sendEmail } from './SendEmail';
// import { signUp } from './signUpAction';
// import { verifyAction } from './verifyAction';

// const initialState={        
//         user:null,
//         error:null,
//         loading:false,
//         verified:false,
    
        
    
//     }
// const userSlice=createSlice({
//     name:'user',
//     initialState,
//     extraReducers:{

//     //sign Up    
//         [signUp.pending]:(state)=>{
//             state.loading=true;
//             state.error=null
//         },

//         [signUp.fulfilled]:(state,action)=>{
//             state.loading=false;
//             state.error=null;
//             state.user=action.payload.user
//             localStorage.setItem('user',JSON.stringify(action.payload.user))
//         },     
//         [signUp.rejected]:(state,action)=>{
//             state.loading=false;
//             state.error=action.payload
//         },

//       //sign In    
//         [logIn.pending]:(state)=>{
//             state.loading=true;
//             state.error=null
//         },

//         [logIn.fulfilled]:(state,action)=>{
//             state.loading=false;
//             state.error=null;
//             state.user=action.payload.user;
//             if(action.payload.user['email_verified_at']){
//                  state.verified=true;
//                                                              }
                                                             
//             localStorage.setItem('user',JSON.stringify(action.payload.user))
//               },     
//         [logIn.rejected]:(state,action)=>{
//             state.loading=false;
//             state.error=action.payload
//             console.log(action.payload)
//         },
        
//         //verify
//         [verifyAction.pending]:(state)=>{
//           state.loading=true;
//           state.error=null;
//         },
//         [verifyAction.rejected]:(state,action)=>{
//             state.error=action.payload;
//             state.loading=false;
//         },
//         [verifyAction.fulfilled]:(state,action)=>{
//             state.verified=true;
//             state.user=action.payload.user
//             state.loading=false;
//             state.error=null;
//             if(state.forgetPassword===false)    
//             localStorage.setItem('user',JSON.stringify(action.payload.user))     
//         },


//         //logout
//         [logOut.fulfilled]:(state)=>{
//             state.loading=false;
//             state.error=null;
//             state.verified=false;
//             state.user=null;
//             state.isLoggedIn=false
//             localStorage.clear()
//         },

//         //send Email
//         [sendEmail.pending]:(state)=>{
//          state.error=null;
//          state.loading=true
//         },
//         [sendEmail.rejected]:(state,action)=>{
//           state.error={email:[action.payload]}
//           state.loading=false
//         },
//         [sendEmail.fulfilled]:(state,action)=>{
//             state.loading=false;
//             state.error=null;
//             state.user=action.payload.user;
//             if(action.payload.forgetPassword){
//                 state.forgetPassword=true
//             }
//         },
//         [resetPassword.pending]:(state)=>{
//           state.loading=true;
//           state.error=null;
//         },
//         [resetPassword.rejected]:(state,action)=>{
//             state.error=action.payload;
//             state.loading=false

//         },
//         [resetPassword.fulfilled]:(state)=>{
//             state.forgetPassword=false;
//             state.loading=false;
//             localStorage.setItem('user',JSON.stringify(state.user))

//         }


            
//     },
//             //set errors to null
//        reducers:{
//         errorsToNull:(state)=>{
//           if(state.error &&state.error['code']){
//             return; 
//           }
//            state.error=null
//         },

//         setSavedUser:(state,action)=>{
//             state.user=action.payload
//                         if(action.payload['email_verified_at']){
//                  state.verified=true;
//                  state.isLoggedIn=true;
//                                                              }
            
//         }
//        }

// })

// export const userReducer=userSlice.reducer;
// export const {errorsToNull,setSavedUser}=userSlice.actions;
