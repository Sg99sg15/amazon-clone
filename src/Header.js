import React from "react";
import './Header.css';
import { Link } from "react-router-dom";
import Search from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from './logo.png';
import {useStateValue} from './StateProvider';
import { auth } from "./firebase";



const Header = () => {  
    const [{basket,  user}] = useStateValue(); 
    console.log(basket);

    const login = () => {
        if(user){
            auth.signOut();
        }
    };


    return(
<>
<nav className="header">
    {/* logo on the left (img) */}
    <Link to='/'>
    <img className="header-logo"
    src={logo}
    alt="logo"
    />
    </Link>
    {/* Search box*/}
    <div className="header-search">
    <input type="text" className="header-searchInput" />
        <Search className="header-searchIcon" />
    </div>
    {/* 3 links */}
    <div className="header-nav">
        {/* 1st Link */}
        <Link to={!user && "/login"} className="header-link">
            <div onClick={login} className="header-option">
                 <span className="header-optionLineOne">Hello {user?.email}</span>
                <span className="Header-optionLineTwo">{user!=null?"Sign Out":"Sign In"}
                </span>
            </div>
        </Link>
        {/* 2st Link */}
        <Link to="/" className="header-link">
            <div className="header-option">
                <span className="header-optionLineOne">Returns</span>
                <span className="Header-optionLineTwo">& Orders</span>
            </div>
        </Link>
        {/* 3st Link */}
        <Link to="/checkout" className="header-link">
            <div className="header-option">
                <span className="header-optionLineOne">Your</span>
                <span className="Header-optionLineTwo">Prime</span>
            </div>
        </Link>
        {/* 4th link */}
        {/* basket icon or number */}
        <Link to="/checkout" className="header-link">
        {/* basket icon and number */}
            <div className="header-optionBasket">
            <ShoppingCartIcon />
            <span className="header-optionLineTwo header-basketCount">{basket?.length}</span>
            </div>
        </Link>
    </div>
</nav>
</>
    );
};
export default Header; 