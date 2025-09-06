import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
const endpoint="https://fakestoreapi.com/products";
const Products = () => {
  
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
    <div className="products-list">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>items list</h3>
          </div>
          {
            items.map((item)=>{
              return(
                <div className="div">{item.title}</div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Products