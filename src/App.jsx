import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import DefaultLayout from './layouts/DefaultLayout';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Products from './pages/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
const endpoint="https://fakestoreapi.com/products";

function App() {
  
  const [items,setItems]=useState([]);
  

     useEffect(()=>{
    
      axios.get(endpoint).then((resp)=>{
      
        const array= resp.data.filter((item)=>{
          return item
        })
        setItems(array);
       
      })
  },[])
 return (
  
    <BrowserRouter>
      <Routes>
        <Route   element={<DefaultLayout/>}>
          <Route path="/" element={<LandingPage data={items}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products data={items}/>}/>
        </Route>  
    </Routes>

//  </BrowserRouter>
  )
}

export default App
