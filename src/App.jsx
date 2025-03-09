import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from "react-redux";
import store from './Redux/Store'
import Home from './Pages/Home/index'
import Products from './Pages/Products/Index';
import Notfound from './Pages/NotFound/index';
import Shoppingbasket from './Pages/ShoppingBasket/ShoppingBasket';
import PrivateRoute from './Navigation/PrivateRoute';
import Profile from './Pages/Profile/Profile';
import ProductDetails from './Pages/ProductDetail/ProductDetails';
import AddProduct from './Pages/AddProduct/AddProduct';
import { Toaster } from 'react-hot-toast';

const App = () => {


  return (

    <Provider store={store}>

      <Router>

        <Toaster position='bottom-right'/>

        <Routes>

          <Route path='/Online__Shop' element={<Home />} />

          <Route path='/Online__Shop/Home' element={<Home />} />

          <Route path="/Online__Shop/profile" element={<Profile />} />

          <Route path="/Online__Shop/Products" element={<Products />} />

          <Route path="/Online__Shop/product/:id" element={<ProductDetails />} />

          <Route path="/Online__Shop/Shoppingbasket" element={<PrivateRoute><Shoppingbasket /></PrivateRoute>} />

          <Route path='/Online__Shop/add_product' element={<AddProduct />} />

          <Route path="/Online__Shop/*" element={<Notfound />} />

        </Routes>

      </Router>

    </Provider>

  )

};

export default App;
