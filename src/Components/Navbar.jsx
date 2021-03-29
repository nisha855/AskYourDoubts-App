import React, { useState } from 'react';
import logo from '../images/logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Feature from './Feature';
import Form from './Form';
import Login from './Login';


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
                <Router>
                    <li><Link exact activeClassName="active" to="/">Home</Link></li>
                    <li><Link activeClassName="active" to="/features">Features</Link></li>
                    <li><Link activeClassName="active" to="/about">About</Link></li>
                    <li><Link exact activeClassName="active" to="/login">Login</Link></li>
                    <li><Link exact activeClassName="active" to="/">Register</Link></li>

                    <Switch>

                        <Route exact path="/about" component={About} />
                        <Route exact path="/features" component={Feature} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Form} />
                    </Switch>
                </Router>
            </ul>
        </nav>
    )
}

export default Navbar
