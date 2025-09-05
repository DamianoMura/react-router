import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
const endpoint="https://fakestoreapi.com/products";
const Products = () => {
   const [shopItems,setShopItems]=useState([]);
  useEffect(()=>{
    axios.get(endpoint).then((resp)=>{
          const newList= resp.data.map((item)=>{
            
            return item 
          })
      
        // setShopItems(newList);
    })
  })
  
  return (
    <div className="container ">
      <div className="row">
        {/* {shop.map((item)=>{
          <div className="col-4" key={item.id}>
            <div className="card">
              <div className="card-header">{item.title}</div>
              <div className="card-body">
                <img src={item.image} alt="" />
              </div>
              <div className="card-footer">{item.rating}</div>
            </div>
        </div>
        })} */}
        
      </div>
    </div>
  )
}

export default Products