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
                    title="The lean startup" 
                    price={29.99} 
                    image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg" 
                    rating={5} />
                    <Product 
                    title="Kernwood Mix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" 
                    price={239.0} 
                    image="https://m.media-amazon.com/images/I/81rgIlDm6wL.__AC_SX300_SY300_QL70_ML2_.jpg" 
                    rating={3} />
                </div>
                <div className="home__row">
                <Product 
                    title="boAt Wave Leap Call with 1.83 HD Display, Advanced Bluetooth Calling, Coins, Multiple Watch Faces, Multi-... "
                    price={200.0}
                    image="https://m.media-amazon.com/images/I/61pBjsIyVeL._AC_UY218_.jpg"
                    rating={4}
                />
                <Product 
                    title="Sponsored Ad - Noise ColorFit Ultra 3 Bluetooth Calling Smart Watch with Biggest 1.96 AMOLED Display, Premium Metallic Bu..."
                    price={400.0}
                    image="https://m.media-amazon.com/images/I/71nzWfUAt+L._AC_UY218_.jpg"
                    rating={4}
                />
                <Product
                    title="boAt Wave Call Smart Watch, Smart Talk with Advanced Dedicated Bluetooth Calling Chip, 1.69 HD Display with 550 NITS & 70%..."
                    price={200.0}
                    image="https://m.media-amazon.com/images/I/61H5PEqBBAL._AC_UY218_.jpg"
                    rating={4}
                />
                </div>
                <div className="home__row">
                <Product
                    title="Samsung 108 cm (43 inches) Crystal 4K Series Ultra HD Smart LED TV UA43AUE60AKLXL (Black) "
                    price={4000.0}
                    image="https://m.media-amazon.com/images/I/71eUw15rVbL._AC_UY218_.jpg"
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