import React from 'react'
import ProductFrame from '../../components/ProductFrame';
const Products = (props) => {
  const items = props.data;
   
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