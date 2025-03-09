import { createSlice } from '@reduxjs/toolkit';

const initialItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const initialItemsQuantity = initialItems.reduce((sum, item) => sum + item.quantity, 0);

const cartReducer = createSlice({
  name: 'cart',
  initialState: {
    items: initialItems,
    itemsQuantity: initialItemsQuantity
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      state.itemsQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      state.itemsQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cartItems');
      state.itemsQuantity = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartReducer.actions;
export default cartReducer.reducer;
