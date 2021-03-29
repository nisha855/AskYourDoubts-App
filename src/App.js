import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import Contact from './Components/Contact';
import aboutimages from './images/Frame 19.png';
import aboutimages1 from './images/download.png';
import { BrowerRouter as Router, Route, } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={aboutimages} title="Solutions to all your confusions" button='Sign in' />
      <About image={aboutimages1} title="Get all information" button='Know more' />
      <Contact />
    </div>
  );
}

export default App;
