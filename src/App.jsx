import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import DefaultLayout from './layouts/DefaultLayout';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Products from './pages/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from './pages/ProductDetail';

function App() {
  
 
 return (
  
    <BrowserRouter>
      <Routes>
        <Route   element={<DefaultLayout/>}>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/product_detail/:id" element={<ProductDetail/>}/>
        </Route>  
    </Routes>

//  </BrowserRouter>
  )
}

export default App
