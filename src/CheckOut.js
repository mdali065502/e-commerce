import React from 'react'
import { useStateValue } from './StateProvider'
import "./CheckOut.css";
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';
function CheckOut() {
    const [{basket}]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
          <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""  />  
         {/* <h1>Hii tHi is is ALi </h1> */}
         {basket?.length ===0?(
             <div>
                 <h2>Your Shopping basket is Empty</h2>
                 <p>You have no items in your basket.To buy one or more items,click "Add to basket" next to the item</p>
                 </div>
         ):(
             <div>
                 <h2  className="checkout_title">Your Shopping Basket List:</h2>
                 {/* List of all of the Checkout Products */}
                 {basket.map(item=>(
                     <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     price={item.price}
                     rating={item.rating}
                     image={item.image}
                     
                     />
                 ))}
                 
                 
             </div>
         )}
         </div>
         {basket.length >0 &&
         (
             <div className="checkout_right">
                 {/* <h1>SubTotal</h1> */}
                 <SubTotal/>

             </div>
         )}
     </div>
       
    )
}

export default CheckOut
