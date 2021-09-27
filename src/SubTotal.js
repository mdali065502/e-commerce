import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
function SubTotal() {
    const [{basket},dispatch]=useStateValue();
    return (
        <div className="subtotal">
            {/* Price */}
            
            <CurrencyFormat
                renderText={(value) => (
                    <>
                      <p>
                        {/* Part of the homework */}
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                      </p>
                      <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                      </small>
                      <button>Proceed to Checkout</button>

                    
                    </>
                  )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix="&#8377;"
           />
            
        </div>
    )
}

export default SubTotal
