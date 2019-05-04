import React from 'react';
import './../../bulmaswatch.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function NavBar() {
    return (
        <nav className="navbar is-info" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/about/">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">
                        Home

                    </Link>
                    <Link to="/about/" className="navbar-item">
                        About
                        </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
