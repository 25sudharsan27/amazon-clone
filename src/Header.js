import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import {Link} from "react-router-dom"
import {useStateValue} from "./StateProvider"
import {auth} from "./firebase"


function Header(){
    const [{basket,user},dispatch]=useStateValue();
    
    const handleAuthentication=()=>{
        if (user){
            console.log("sign out")
            auth.signOut();
        }
    }
    return(
        <div className="header">
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div class="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to="/signin">
                <div onClick={handleAuthentication} className="header__option">
                
                    <span id="sign" className="header__optionLineOne"> {user? "Hello "+user.email:"Hello Guest"} </span><br/>
                    
                    <span className="header__optionLineTwo"  >{user ? 'Sign Out':"Sign In"}</span>
                    
                </div> 
                </Link>
                <Link to="/orders">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                </Link>
                <Link to="/prime">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                </Link>
                <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;