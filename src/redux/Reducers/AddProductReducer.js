// AddProductSlice.js
import { createSlice } from '@reduxjs/toolkit';

const storedData = JSON.parse(localStorage.getItem('ProductInformation'));

const AddProductSlice = createSlice({
  name: 'NewProduct',
  initialState: {
    ProductInformation: storedData ? storedData : null
  },
  reducers: {
    setInformation: (state, action) => {
      state.ProductInformation = action.payload;
      localStorage.setItem('ProductInformation', JSON.stringify(action.payload));
      console.log(state.ProductInformation);
    },
  }
});

export const { setInformation } = AddProductSlice.actions;

export default AddProductSlice.reducer;
