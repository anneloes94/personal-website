import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
