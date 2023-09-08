import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './posts/postsSlice';
import {userReducer} from './user/userSlice';
export default configureStore({ reducer: {auth:userReducer ,posts:postsReducer } });