import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div id="main">
            <Navbar />
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
