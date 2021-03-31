import React, { useState } from 'react';
import logo from '../images/logo.png';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Feature from './Feature';
import Contact from '../pages/Contact';
import Login from '../pages/Login';


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <nav className="nav">
            <a href='#' className='logo'>
                <img src={logo} alt='' />
            </a>
            <input type="checkbox" className='menu-btn' id='menu-btn' />
            <label className="menu-icon" for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className={click ? "nav-menu active" : 'nav-menu'} >

                <li><Link exact activeClassName="active" to="/">Home</Link></li>
                <li><Link activeClassName="active" to="/features">Features</Link></li>
                <li><Link activeClassName="active" to="/about">About</Link></li>
                <li><Link exact activeClassName="active" to="/login">Login</Link></li>
                <li><Link exact activeClassName="active" to="/contact" >Contact</Link></li>

            </ul>
        </nav>
    )
}

export default Navbar
