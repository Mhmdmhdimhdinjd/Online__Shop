import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Reducers/Cart';
import authReducer from './Reducers/Auth'; 
import AddProductSlice from './Reducers/AddProduct';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    AddProduct : AddProductSlice    
  },
});

export default store;
