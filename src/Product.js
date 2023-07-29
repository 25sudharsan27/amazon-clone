import "./Product.css";
import React from "react";



function Product(){
    return (
    <div className="product">
        <div className="product__info">
            <p>The lean startup</p>
            <p className="product__price">
                <small>$</small>
                <strong>19.99</strong>
            </p>
            <div className="product__rating">
                <p>⭐</p>
                <p>⭐</p>
                <p>⭐</p>
            </div>
            <img src="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg" alt="" />

            <button> Add to Basket</button>
        </div>

    </div>
    )
}

export default Product