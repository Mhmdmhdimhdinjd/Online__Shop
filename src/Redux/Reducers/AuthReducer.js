import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    logeduser: JSON.parse(localStorage.getItem('logeduser')) || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
  },
  reducers: {
    registerUser: (state, action) => {
      state.user = action.payload;
      state.logeduser = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('logeduser', JSON.stringify(state.user));
    },
    loginUser: (state, action) => {
      state.logeduser = action.payload;
      localStorage.setItem('logeduser', JSON.stringify(state.user));
    },
    logoutUser: (state) => {
      state.logeduser = null;
      localStorage.removeItem('logeduser');
    },
  },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
