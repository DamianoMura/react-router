import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import ProductFrame from '../../components/ProductFrame';
const endpoint="https://fakestoreapi.com/products";
const Products = () => {
   const [items,setItems]=useState([]);
   

     useEffect(()=>{
    
      axios.get(endpoint).then((resp)=>{
         
       
          setItems(resp.data)
        
      })
  
  },[])
   
  return (
    <main>
      <div className="container">
       
        <div className="row g-2">
          <div className="col-12">
            <h3>All Items</h3>
          </div>
          {
            items.map((item)=>{
              return(
                <ProductFrame data={item} key={item.id}/>
              )
            })
          }
        </div>
      </div>
   
    </main>
  )
}

export default Products