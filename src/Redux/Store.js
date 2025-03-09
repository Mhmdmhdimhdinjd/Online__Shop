// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Reducers/CartReducer';
import authReducer from './Reducers/AuthReducer'; // فرض می‌کنیم authSlice در این مسیر است
import addProductReducer from './Reducers/AddProductReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer, 
    newproduct: addProductReducer,
  },
});

export default store;
