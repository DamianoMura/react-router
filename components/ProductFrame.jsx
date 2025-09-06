import React from 'react'


const ProductFrame = (props) => {
  const item=props.data;
  return (
    <div className="col-12 ">
      <div className="item-card">
        <div className="item-pic">
          <img src={item.image} alt={item.title} />
          <div className="rating"><strong>rate:{item.rating.rate}</strong> </div>
        </div>
        <div className="item-info">
          <div className="category"><strong>Category: </strong>{item.category}</div>
          <div className="title"><h5>{item.title}</h5></div>

        </div>
      </div>
    </div>

  )
}

export default ProductFrame