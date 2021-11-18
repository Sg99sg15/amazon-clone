import React from "react";
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct( {id, title, image, price, rating}){
    const [{basket}, dispach] = useStateValue();
    
    const removeFromBasket = () => {
        // removing items from basket
        dispach({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
return(
    <div className="CheckoutProduct">
        <img className="CheckoutProduct-image" src={image} alt="image ayegi" />
        <div className="CheckoutProduct-info" key={id} >
            <p className="CheckoutProduct-title">{title}</p>
            <p className="CheckProduct-price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="CheckoutProduct-rating">
                {Array(rating)
                .fill()
                .map((_)=>(
                    <p>⭐</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
    </div>
);
};
export default CheckoutProduct;
                
                