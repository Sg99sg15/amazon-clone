import React from 'react';
import './Subtotal.css';
import CurrencyFormate from 'react-currency-format';
import { useStateValue } from './StateProvider';
import {getBasketTotal} from './reducer'; 

const Subtotal = () => {
    
    const[{basket}, dispatch] = useStateValue();

    return(
        <>
        <div className="subtotal">
            {/* Price */}
            <CurrencyFormate
            renderText={(value)=>(
                <>
                <p>
                    Subtotal ({basket.length} items) : <strong>{`${value}`}</strong>
                </p>
                <small className="subtotal-gift">
                    <input type="checkbox" /> This Order Contain a Gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeperate={true}
            prefix={"₹"}
            />
            <button>Proceed to Checkout</button>
        </div>
        </>
    )
}
export default Subtotal;