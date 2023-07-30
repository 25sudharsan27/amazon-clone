import React from "react";
import "./Checkout.css";

function Checkout(){
    return (
        <div className="checkout">
            <div className="checkout__left" height="100px" width=" 100px">
                <img className="checkout__ad"
                src="https://www.apunkagames.biz/wp-content/uploads/2019/03/header-banner.jpg" width="100%" />
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                {/* BasketItem */}
                {/* BasketItem */}
                </div>
            </div>
            
            <div className="checkout__right">
                <Subtotal />
                <h2>The subtotal will go here</h2>
            </div>

        </div>

        
            
        
    );
}
export default Checkout;