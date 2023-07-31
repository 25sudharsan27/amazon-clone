import { PriceChange, PriceChangeOutlined } from "@mui/icons-material";
import "./Product.css";
import React from "react";
import reducer, {initialState} from "./reducer"
import {useStateValue} from "./StateProvider"

function Product({title,image,price,rating}){
    const [{basket},dispatch]=useStateValue();
    console.log("this is the basket >>>",basket);

    const addToBasket=()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    }

    return (
    <div className="product">
        <div className="product__info">
            <p>{title}</p>
        </div>
        <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
                
            </p>
            <div className="product__rating">
                {Array({rating}).fill().map((_,i)=>(
                    <p>⭐</p>
                ))
                }
                
                
            </div>
            <img src={image} alt="" />

            <button onClick={addToBasket}> Add to Basket</button>

    </div>
    )
}

export default Product