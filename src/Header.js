import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';

function Header() {
  const [{basket,user}]= useStateValue();
  const login = ()=>{
    if(user)
{
  auth.signOut();
}  
};
    return (
     <nav className="header">
         {/* Logo on the Left -> img */}
         <Link to="/">  
         <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""  />
</Link>
   {/* SearchBox */}
   <div className="header_search"> <input type="text" className="header_searchInput" />
   <SearchIcon className="header_searchIcon"/></div>
  {/* 3Links */}
  <div className="header_nav">
      {/* 1st Link */}
      <Link  to={!user && "/login"} className="header_link">
          <div onClick={login} className="header_option">
            <span className="header_optionLine1">Hello, {!user?'Guest':user.email}</span> 
            <span  className="header_optionLine2">{user?'Sign Out':'Sign In'}</span> 
             </div> 
      </Link>
      {/* 2nd Link */}
      <Link  to="/"className="header_link">
          <div className="header_option">
            <span  className="header_optionLine1">Return </span> 
          <span className="header_optionLine2"> & Orders</span> 
             </div> 
      </Link>
      {/* 3rd link Link */}
      <Link  to="/"className="header_link">
          <div className="header_option">
            <span  className="header_optionLine1">Your </span> 
            <span className="header_optionLine2">Prime</span> 
             </div> 
      </Link>
     {/* 4th Link */}
     <Link to="/checkout" className="header_link">
     <div className="header_optionBasket">
         {/* Shopping Basket Icon */}
         <ShoppingBasketIcon  />
         {/* Number of item in the basket */}
         <span  className="header_optionLine2 header_basketcount">{basket?.length}</span>
     </div>
</Link>
  </div>
     </nav>
    )
}

export default Header
