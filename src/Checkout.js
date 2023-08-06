import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout(){
    const[{basket},dispatch]=useStateValue();

    return (
        
        <div className="checkout">
            <div className="checkout__left" height="100px" width=" 100px">
                <img className="checkout__ad"
                src="https://www.apunkagames.biz/wp-content/uploads/2019/03/header-banner.jpg" width="100%" />
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                
                {basket.map(item=>(
                    <CheckoutProduct 
                    id ={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
                {/* BasketItem */}
                {/* BasketItem */}
                </div>
            </div>
            
            <div className="checkout__right">
                <Subtotal />
                
            </div>

        </div>

        
            
        
    );
}
export default Checkout;