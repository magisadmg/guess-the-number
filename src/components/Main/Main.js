
import React from 'react';
import './../../bulmaswatch.min.css';
import InputGuess from './../InputGuess/InputGuess.js';
import Instructions from './../Instructions/Instructions.js';
import NewGame from './../NewGame/NewGame.js';


function Main() {
    return (
        <div>
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
        </div>

    );
}

export default Main;







