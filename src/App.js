import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bulmaswatch.min.css';
import Footer from './components/Footer/Footer.js';
import InputGuess from './components/InputGuess/InputGuess.js';
import NavBar from './components/NavBar/NavBar.js';
import Instructions from './components/Instructions/Instructions.js';
import NewGame from './components/NewGame/NewGame.js';


function App() {
  return (
    <div>
      <NavBar />
      <section className="section">
        <div className="container">
          <Instructions />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <NewGame />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-two-fifths">
              <InputGuess />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
