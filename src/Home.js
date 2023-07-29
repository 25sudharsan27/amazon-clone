import React from "react"
import './Product.css';
import './Home.css'
import Product from "./Product"
function Home(){
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__Image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/Post/PD23/Unrec/PC_hero_1_1x._CB599886239_.jpg" alt=""/>

                <div className="home__row">
                    <Product 
                    title="The lean startup" 
                    price={29.99} 
                    image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg" 
                    rating={5} />
                    <Product 
                    title="The lean startup" 
                    price={29.99} 
                    image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg" 
                    rating={5} />
                </div>
                <div className="home__row">
                
                </div>
                <div className="home__row">
                   
                </div>
                <div className="home__row">
                </div>

            </div>

        </div>
    )
}

export default Home