import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        // console.log('e.target.spielername.value',e.target.spielername.value);
        let spielername = e.target.spielername.value;

        debugger;
        if(spielername) {
            e.target.spielername.value = '';
            Players.insert({
                name: spielername,
                score: 0
                // score: this.props.score
            });
        }
    }
    // <form onSubmit={this.handleSubmit.bind(this)}>
    render() {
        return (
            <div className="item">
                <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                    <input className="form__input" type="text" name="spielername" placeholder="Spielername" />
                    <button className="button">Neuer Spieler</button>
                </form>
            </div>
        );
    }
};