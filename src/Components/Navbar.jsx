import React, { useState } from 'react';
import logo from '../images/logo.png';

function Navbar() {

    return (
        <nav className="nav">
            <a href='#' className='logo'>
                <img src={logo} alt='' />
            </a>
            <input type="checkbox" className='menu-btn' id='menu-btn' />
            <label className="menu-icon" for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className="menu">
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Features</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Sign In</a></li>
                <li><a href='#'>Register</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
