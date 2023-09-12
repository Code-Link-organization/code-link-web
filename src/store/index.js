import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from './teams/teamsSlice';

import { postsReducer } from './posts/postsSlice';
import {userReducer} from './user/userSlice';
export default configureStore({ reducer: {auth:userReducer ,posts:postsReducer,teams:teamsReducer } });