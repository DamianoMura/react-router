import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import ProductFrame from '../../components/ProductFrame'
const endpoint="https://fakestoreapi.com/products";
const ProductDetail = () => {
  const {id} =useParams();
  console.log(id)
  const [product,setProduct]=useState({})
  useEffect(()=>{
    console.log(`we fetch data from the endpoint adding /${id} to its address`);
    axios.get(endpoint+`/${id}`).then((resp)=>{
      setProduct(structuredClone(resp.data))
      console.log(product)
    })
  },[])
  return (
    
  <div className="card">
    <div className="card-header d-flex justify-content between p-3">
      <div className={`cat cat-${product.category.substr(0,3)}`}> {product.category}</div>
      <div className="title"><h2>{product.title}</h2></div>
    </div>

    <div className="card-body d-flex">
      <div className="image-frame">
        <img src={product.image} alt={product.title} />
        <div className="special">
          <strong className="price mb-1">{product.price} €</strong>
          <strong className="rating">{product.rating.rate} <i className="fa-solid fa-star"></i></strong>
                                
        </div>
      </div>
      <div className="description">
      {product.description}
      </div>
    </div>
  </div>
  )
}

export default ProductDetail