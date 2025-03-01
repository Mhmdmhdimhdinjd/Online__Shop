import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/CartReducer';
import authReducer from './reducers/AuthSlice'; // فرض می‌کنیم authSlice در این مسیر است

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer, 
  },
});

export default store;
