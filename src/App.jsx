import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from "react-redux";
import Store from '/src/redux/store'
import Home from '/src/pages/Home/index'
import Products from '/src/pages/Products/index';
import Notfound from '/src/pages/NotFound/index';
import Shoppingbasket from '/src/pages/Shoppingbasket/ShoppingBasket';
import PrivateRoute from '/src/navigation/PrivateRoute';
import Profile from '/src/pages/profile/Profile';
import ProductDetails from '/src/pages/productdetail/ProductDetails';
import AddProduct from '/src/pages/AddProduct/AddProduct';
import { Toaster } from 'react-hot-toast';

const App = () => {


  return (

    <Provider store={Store}>

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
