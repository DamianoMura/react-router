import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Products from './pages/Products';

import 'bootstrap/dist/css/bootstrap.min.css';
// Required Bootstrap imports

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
        </Route>  
    </Routes>

 </BrowserRouter>
  )
}

export default App
