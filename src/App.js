import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
    </div>
  );
}

export default App;
