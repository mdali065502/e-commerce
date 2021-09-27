import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'
function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch]=useStateValue();
    const removefromBasket=()=>{
          dispatch({
              type:"Remove_From_Basket",
              id:id,
          })
    }
    return (
        <div className="checkout_product">
            <img src={image} alt="" />
            <div className="checkout_product_info">
        <p>{title}</p>
        <p className="checkout_product_price">
          <small>&#8377;</small>
          <strong>{price}  </strong>
                </p>
        <div className="checkout_product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>&#11088;</p>
            ))}
        </div>
        <button onClick={removefromBasket}>Remove item from the Basket </button>
      </div>
            
        </div>
    )
}

export default CheckoutProduct
