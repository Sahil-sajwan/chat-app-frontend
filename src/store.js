import { configureStore } from '@reduxjs/toolkit'
import usernameReducer from './components/Home/usernameSlice'
import chatroomReducer from './components/Chatpage/chatroomSlice';

export default configureStore({
  reducer: {
    username: usernameReducer,
    chatroom: chatroomReducer
  }
});