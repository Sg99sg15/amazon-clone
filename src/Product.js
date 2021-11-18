import React from "react";
import './Product.css';
import {useStateValue} from "./StateProvider";


function Product ({id, title, image, price, rating}){
    const [{}, dispatch] = useStateValue();
    const addToBasket = () => {
//  Add itme to addToBasket      
dispatch({
    type: 'ADD_TO_BASKET',
    item: {
        id:id,
        title:title,
        price:price,
        image:image,
        rating:rating,
    },

});
    };

    return(
        <div className="product" key={id}>
        <div className="product-info">
            <p>{title}</p>
            <p className="product-price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="product-rating">
                {Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))
                    }
            </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add To Cart</button>
        </div>
    )
}
export default Product;