import React, { Component } from 'react';
import './../../bulmaswatch.min.css';


class NewGame extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.newGame();
    }

    render() {
        return (
            <div>
                <a className="button is-danger" onClick={this.handleClick}>New Game</a>
            </div >
        );
    }
}

export default NewGame;



