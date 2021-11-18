import React from 'react';
import {useStateValue} from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal.js';


function Checkout () {
    const [{basket}] = useStateValue();
    console.log({basket});
    return (
        <>
    <div className="checkout">
    <div className="checkout-left">
    <img 
    className="checkout-ad"
    src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/PDAYILM/v1/01.jpg"
    alt=""
    />
    {basket.length === 0 ? (
        <div>
            <h2>Your Shopping Cart is Empty</h2>
            <p>
                You have no items in your basket. To buy one or more items, click "Add to the basket" next to the items.
            </p>
        </div>
        ) : (
            <div>
                <h2 className="checkout-title"> Your Shopping Cart.</h2>
                {/* List out all the Checkout Product */}

                {basket.map((item) => (
                    <>
                    <CheckoutProduct
                    id = {item.id}
                    title= {item.title}
                    image= {item.image}
                    price= {item.price}
                    rating= {item.rating}
                    />
                    </>
                ))}
            </div>
    )}
    </div>
    {basket.length > 0 && (
        <div className="checkout-right">
            <Subtotal />
        </div>
    )}
</div>
    
    </>
    )
}
export default Checkout;