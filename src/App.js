import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import './bulmaswatch.min.css';
import Footer from './components/Footer/Footer.js';
import NavBar from './components/NavBar/NavBar.js';
import Main from './components/Main/Main.js';
import About from './components/About/About.js';




function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Route path="/" exact component={Main} />
      <Route path="/about/" component={About} />
      <Footer />
 
    </div>
    </Router>
  );
}

export default App;
