import React from "react"
import './Product.css';
import './Home.css'
import Product from "./Product"
function Home(){
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__Image" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/Home_mela_july_3000x1200._CB598959250_.jpg" alt=""/>

                <div className="home__row">
                    <Product 
                    id="12321341"
                    title="The lean startup" 
                    image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg" 
                    price={29.99} 
                    rating={5} />
                    <Product 
                    id="49538094"
                    title="Kernwood Mix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" 
                    image="https://m.media-amazon.com/images/I/81rgIlDm6wL.__AC_SX300_SY300_QL70_ML2_.jpg" 
                    price={239.0} 
                    rating={3} />
                </div>
                <div className="home__row">
                <Product 
                    id="4903850"
                    title="boAt Wave Leap Call with 1.83 HD Display, Advanced Bluetooth Calling, Coins, Multiple Watch Faces, Multi-... "
                    image="https://m.media-amazon.com/images/I/61pBjsIyVeL._AC_UY218_.jpg"
                    price={200.0}
                    rating={4}
                />
                <Product 
                    id="23445930"
                    title="Sponsored Ad - Noise ColorFit Ultra 3 Bluetooth Calling Smart Watch with Biggest 1.96 AMOLED Display, Premium Metallic Bu..."
                    image="https://m.media-amazon.com/images/I/71nzWfUAt+L._AC_UY218_.jpg"
                    price={400.0}
                    rating={4}
                />
                <Product
                    id="3254354345"
                    title="boAt Wave Call Smart Watch, Smart Talk with Advanced Dedicated Bluetooth Calling Chip, 1.69 HD Display with 550 NITS & 70%..."
                    image="https://m.media-amazon.com/images/I/61H5PEqBBAL._AC_UY218_.jpg"
                    price={200.0}
                    rating={4}
                />
                </div>
                <div className="home__row">
                <Product
                    id="90829332"
                    title="Samsung 108 cm (43 inches) Crystal 4K Series Ultra HD Smart LED TV UA43AUE60AKLXL (Black) "
                    image="https://m.media-amazon.com/images/I/71eUw15rVbL._AC_UY218_.jpg"
                    price={4000.0}
                    rating={4}
                />
                </div>
                <div className="home__row">
                </div>

            </div>

        </div>
    )
}

export default Home