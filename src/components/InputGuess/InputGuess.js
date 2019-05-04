import React from 'react';
import './../../bulmaswatch.min.css';


function InputGuess() {
    return (
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
    );
}








export default InputGuess;
