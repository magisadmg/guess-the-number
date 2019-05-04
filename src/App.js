import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bulmaswatch.min.css';


function App() {
  return (
    <div>
      <nav className="navbar is-info" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
          </a>
          </div>
        </div>
      </nav>



      <section className="section">
        <div className="container">
          <h1 className="title">Instruction</h1>
          <h2 className="subtitle">
            <br />
            Insert any number from 0-100, try to guess if you guess what number computer has selected. Ready?
          </h2>
        </div>
      </section>


      <section className="section">
        <div className="container">
          <a className="button is-danger">New Game</a>
        </div>
      </section>

      <section className="section">
        <div className="container">
        <div className="columns">
        <div className="column is-two-fifths">

          <div className="field is-grouped">
            <p className="control is-expanded">
              <input className="input is-large" type="text" placeholder="Guess the number" />
            </p>
            <p className="control">
              <a className="button is-info is-large">
                Guess
          </a>
            </p>
          </div>
          </div>
          </div>
        </div>
      </section>




      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Guess the number by B. Oliwa. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
    </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
