import { PriceChange, PriceChangeOutlined } from "@mui/icons-material";
import "./Product.css";
import React from "react";
import reducer, {initialState} from "./reducer"
import {useStateValue} from "./StateProvider"

function Product({title,image,price,rating}){
    const [sate,dispatch]=useStateValue();
    console.log("this is the basket >>>")
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type:"ADD_TO_BASKET",
            item: {
                title: title,
                image:image,
                price:price,
                rating:rating,
            }
        })
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

            <button> Add to Basket</button>

    </div>
    )
}

export default Product