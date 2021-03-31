import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Feature from './Feature';
import Contact from '../pages/Contact';
import Login from '../pages/Login';

function Header() {
    return (
        <div id="main">
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/features" component={Feature}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                </Switch>
            </Router>
            <div className="name">
                <h1><span>Confused??</span></h1>
                <h1><span>where to start</span></h1>
                <p className="details">Lorem il sit saepe ea porro minus nam ipsa accusamus suscipit magnam magni. Necessitatibus ullam dolor at hic odio placeat soluta dolorum commodi.</p>
                <a href='#' className='cv-btn'><span>Sign In</span></a>
            </div>
        </div>
    )
}

export default Header
