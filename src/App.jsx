import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from "react-redux";
import { Container } from '@mui/material';
import Navbar from './Components/Navbar/Index';
import LoginComponent from './Components/auth/Login/Index';
import store from './redux/store'
import Intro from './Components/Inro/introcontainer'
import ProductShowcase from './Components/productslist/ProductShowcase';
import Slider from './Components/Slider/Slider'

import Home from './pages/Home/index'
import Products from './pages/Products/index';
import Notfound from './pages/Notfound/Notfound';
import Shoppingbasket from './pages/Shoppingbasket/ShoppingBasket';
import PrivateRoute from './navigation/PrivateRoute';
import Profile from './pages/profile/Profile';
import ProductDetails from './pages/productdetail/ProductDetails';
import AddProduct from './pages/AddProduct/AddProduct';


const App = () => {

  // return (
  //   < Provider store={store}>

  //     <Navbar />

  //     <Container>

  //       <Slider/>

  //       {/* <LoginComponent /> */}

  //       <Intro />

  //       {/* <ProductShowcase /> */}

  //       <Products/>

  //     </Container>


  //   </Provider>
  // );

  return (

    <Provider store={store}>

      <Router>

        <Routes>

          <Route path='/onlineshop-nini/' element={<Home />} />

          <Route path='/onlineshop-nini/Home' element={<Home />} />

          <Route path="/onlineshop-nini/profile" element={<Profile />} />

          <Route path="/onlineshop-nini/Products" element={<Products />} />

          <Route path="/onlineshop-nini/product/:id" element={<ProductDetails />}/>

          <Route path="/onlineshop-nini/Shoppingbasket" element={<PrivateRoute><Shoppingbasket /></PrivateRoute>} />

          <Route path='/onlineshop-nini/add-product' element={<AddProduct/>}/>

          <Route path="/onlineshop-nini/*" element={<Notfound />} />

        </Routes>

      </Router>

    </Provider>

  )

};

export default App;
