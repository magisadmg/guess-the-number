
import React, { Component } from 'react';
import './../../bulmaswatch.min.css';
import InputGuess from './../InputGuess/InputGuess.js';
import Instructions from './../Instructions/Instructions.js';
import NewGame from './../NewGame/NewGame.js';
import Notification from './../Notification/Notification.js';


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            guessedNumber: -1,
            randomNumber: 0,
            min: 0,
            max: 100,
            information: null,
        };

        this.getRandomNumber = this.getRandomNumber.bind(this);
        this.compareNumbers = this.compareNumbers.bind(this);
        this.newGame = this.newGame.bind(this);
        this.setInput = this.setInput.bind(this);

    }

    componentDidMount() {
        let freshRandomNumber = this.getRandomNumber();
        this.setState(
            { "randomNumber": freshRandomNumber }
        );
    }

    newGame() {
        let freshRandomNumber = this.getRandomNumber();
        this.setState(
            { "randomNumber": freshRandomNumber }
        );
        return freshRandomNumber;
    }

    setInput(inputNumber) {
        this.setState(
            { "guessedNumber": inputNumber }
        );
    }

    getRandomNumber() {
        return Math.floor(Math.random() * (this.state.max - this.state.min)) + this.state.min;
    }

    compareNumbers() {
        if (this.state.guessedNumber > this.state.randomNumber) {
            this.setState({ "information": "Too high" });
        }
        else if (this.state.guessedNumber < this.state.randomNumber) {
            this.setState({ "information": "Too low" });
        }
        else {
            this.setState({ "information": "Great job!" });
        }

        console.log("RANDOM NUMBER:", this.state.randomNumber);
        console.log("GUESS NUMBER:", this.state.guessedNumber);
    }

    render() {
        return (
            <div>
                <section className="section">
                    <div className="container">
                        <Instructions />
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <NewGame newGame={this.newGame} />
                    </div>
                </section>

                    <div className="container">
                        <Notification information={this.state.information}/>
                    </div>

                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-two-fifths">
                                <InputGuess compareNumbers={this.compareNumbers}
                                    setInput={this.setInput} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Main;







