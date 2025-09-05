import { useState,useEffect } from "react"
import axios from "axios"
import { Link, NavLink } from 'react-router-dom'
const endpoint="https://fakestoreapi.com/products";


const LandingPage = () => {
  const [data,setData]=useState([]);

  useEffect(()=>{
    //receive the list to create my call to action composed by 4 pictures to compose a sort of collage with high count and high rating
    axios.get(endpoint).then((resp)=>{
      
      const filteredData= resp.data.filter((item)=>{
        return item.rating.rate>3 && item.rating.count>100;
      })
      setData(filteredData);
    })
  },[])
  return (
    <main>
      <div className="container">
        <div className="row">
          
          <div className="col-12 text-center">
            <h2>Welcome to our online shop, </h2>
            <div className="cta">
              
              {data.map((item)=>{
                return(
                  <div className="cta-pic" key={item.id}>
                    <img src={item.image} alt={`item${item.id}`} />
                  </div>
                  
                )
              })} 
                
           
             
            <div className="overhead-title">
              <h4>UNBEATABLE PRICES!!!</h4>
              <NavLink className="btn btn-success" to="/products">SHOP NOW!!! </NavLink>
            </div>  
            </div>
          </div>
        </div>
      </div>
    </main>
            

  )
}

export default LandingPage