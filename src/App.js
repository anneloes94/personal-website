import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Stack from './components/Stack'

function App() {
  return (
    <div className="App">
      <div id="preloader"> 
        <div id="loader"></div>
      </div>
      <Navigation />
      <Home />
      <About />
      <Stack />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
