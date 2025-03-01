import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from "react-redux";
import store from './redux/store'
import Home from './pages/Home/index'
import Products from './pages/Products/index';
import Notfound from './pages/Notfound/Notfound';
import Shoppingbasket from './pages/Shoppingbasket/ShoppingBasket';
import PrivateRoute from './navigation/PrivateRoute';
import Profile from './pages/profile/Profile';
import ProductDetails from './pages/productdetail/ProductDetails';
import AddProduct from './pages/AddProduct/AddProduct';


const App = () => {


  return (

    <Provider store={store}>

      <Router>

        <Routes>

          <Route path='/Online__Shop/' element={<Home />} />

          <Route path='/Online__Shop/Home' element={<Home />} />

          <Route path="/Online__Shop/profile" element={<Profile />} />

          <Route path="/Online__Shop/Products" element={<Products />} />

          <Route path="/Online__Shop/product/:id" element={<ProductDetails />}/>

          <Route path="/Online__Shop/Shoppingbasket" element={<PrivateRoute><Shoppingbasket /></PrivateRoute>} />

          <Route path='/Online__Shop/add-product' element={<AddProduct/>}/>

          <Route path="/Online__Shop/*" element={<Notfound />} />

        </Routes>

      </Router>

    </Provider>

  )

};

export default App;
