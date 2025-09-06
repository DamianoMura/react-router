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
          <div className="title">{item.title}</div>

        </div>
      </div>
    </div>

  )
}

export default ProductFrame