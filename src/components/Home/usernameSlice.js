
import { createSlice } from '@reduxjs/toolkit';

const usernameSlice = createSlice({
  name: 'username',
  initialState: {
    value:"guest"
  },
  reducers: {
    addUsername: (state, action) => {
      state.value=action.payload;
    },
  },
});


export const {  addUsername } = usernameSlice.actions

export default usernameSlice.reducer