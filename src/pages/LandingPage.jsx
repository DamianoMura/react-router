import { useState,useEffect } from "react"
import axios from "axios"
import { Link, NavLink } from 'react-router-dom'
const endpoint="https://fakestoreapi.com/products";


const LandingPage = () => {
  const [data,setData]=useState([]);

  useEffect(()=>{
    
    axios.get(endpoint).then((resp)=>{
      
      const filteredData= resp.data.filter((item)=>{
        return item.rating.rate>3 && item.rating.count>350;
      })
      setData(filteredData);
      

    })
  },[])
  return (
    <main>
      <div className="container-fliud">
        <div className="row">
          <div className="col-12 text-center my-4">
            <h3>Best Rated Products</h3>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div className="cta">
              <div className="overhead-message">
              <h4>BEST RATES AT UNBEATABLE PRICES!!!</h4>
              <NavLink className="btn btn-success" to="/products">SHOP NOW!!! </NavLink>
            </div>  
            <div className="container-fluid">
              <div className="row">

                  {data.map((item)=>{
                    return(

                      
                      <div className="col-12 col-md-6 col-lg-3"  >

                      <div className="cta-pic p-5 m-1">
                        <img src={item.image} alt={`item${item.id}`} />
                        <div className="special">
                          <strong className="price mb-1">{item.price} €</strong>
                          <strong className="rating">{item.rating.rate} <i class="fa-solid fa-star"></i></strong>
                          
                        </div>
                        <div className="title">
                          {item.title}
                        </div>

                        {/* for now i know the 4 categories and i hardcode them here !!!not usable in real apps as categories may increment or decrement!!! */}
                        <div className={
                          item.category==="men's clothing" ? "cat cat-men" :
                          item.category==="jewelery" ? "cat cat-jewels" :
                          item.category==="electronics" ? "cat cat-electronic" :
                          "cat cat-women"
                        }> 
                        <span>{item.category}</span>

                        </div>
                        
                      </div>
                      </div>
                    )
                  })} 
              </div>
            </div>
              
              
            </div>
          </div>   
          <div className="col-12 text-center">
            <h2>Welcome to our online shop, </h2>
          </div>
          <div className="col-12 text-center">
            
          </div>
        </div>
      </div>
    </main>
  )
}

export default LandingPage




            
              
