
import { createSlice } from '@reduxjs/toolkit';

const chatroomSlice = createSlice({
  name: 'chatroom',
  initialState: {
    isReady: false
  },
  reducers: {
    changeToTrue: (state) => {
      state.isReady=true;
    },
    changeToFalse: (state) => {
        state.isReady=false;
      },
  },
});


export const { changeToFalse, changeToTrue } = chatroomSlice.actions

export default chatroomSlice.reducer