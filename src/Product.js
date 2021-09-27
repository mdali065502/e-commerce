import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";
function Product({ id, title, image, price, rating }) {
  const [{},dispatch]=useStateValue();
  const addToBasket=()=>{
    // Add item to basket
    dispatch({
      type:'Add_To_Basket',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating

      }
    })

  }
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>&#8377;</small>
          <small>{price}</small>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>&#11088;</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
