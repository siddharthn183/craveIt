import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom';
const Navbar = ({setsoLogin}) => {
    const [menu, setmenu] = useState("home");
  return (
    <div className='navbar'>
        <a href='/'><img src={assets.logo} alt="logo_image" className='logo'/></a>
        <ul className="navbar-menu">
            <Link to='/' onClick={() => setmenu("home")} className={menu ==="home" ? "active" : ""}>Home</Link>
            <a href='#explore-menu' onClick={() => setmenu("menu")} className={menu ==="menu" ? "active" : ""}>Menu</a>
            <a href='#app-download' onClick={() => setmenu("mobile-app")} className={menu ==="mobile-app" ? "active" : ""}>Mobile App</a>
            <a href='#footer' onClick={() => setmenu("contact")} className={menu ==="contact" ? "active" : ""}>Contact Us</a>
        </ul>
    <div className="navbar-right">
        <img src={assets.search_icon} alt="search_icon" />
        <div className="navbar-search-icon">
           <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
            <div className="dot">
            </div>
        </div>
        <button onClick={() => setsoLogin(true)}>Sign In</button>
    </div>
    </div>
  )
}

export default Navbar;