import React, { Component } from 'react';
import './../../bulmaswatch.min.css';


class InputGuess extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleClick(e) {
        e.preventDefault();
        this.props.compareNumbers();
    }

    handleChange(e) {
        let inputNumber = e.target.value;
        e.preventDefault();
        this.props.setInput(inputNumber);
    }

    render() {
        return (
        <div className="field is-grouped">
            <p className="control is-expanded">
                <input className="input is-large" type="text" placeholder="Guess the number" onInput={this.handleChange}/>
            </p>
            <p className="control">
                <a className="button is-info is-large" onClick={this.handleClick}>
                    Guess
            </a>
            </p>
        </div>
    );
}
}


export default InputGuess;
