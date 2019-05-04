import React, { Component } from 'react';
import './../../bulmaswatch.min.css';

class Notification extends Component {
    render() {
        if(this.props.information) {
            return (
                <div class="notification is-primary">
                    <p>{this.props.information}</p>
                </div>
            );
        }
        else {
            return (" ");
        }

    }
}

export default Notification;







