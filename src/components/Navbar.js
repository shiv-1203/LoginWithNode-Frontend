import React from "react";
import logo from '../asserts/images/login.png';
import '../components/Navbar.css';

const Navbar = () =>{
    return (
        <div className="navbar">
            <img src={logo} alt='logo' className="logo"></img>
            <div className="logoText">
                Snap<span style={{color:'yellow'}}>Auth</span>
            </div>
        </div>
    );
}

export default Navbar;