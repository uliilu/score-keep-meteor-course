import React from 'react';
import PropTypes from 'prop-types';

import {Players} from './../api/players';

export default class Spieler extends React.Component {
    render() {
        let itemClassName = `item item--position-${this.props.spieler.rank}`;
        return (
            <div key={this.props.spieler._id} className={itemClassName}>
                <div className="spieler">
                    <div>
                        <h3 className="spieler__name">{this.props.spieler.name}</h3>
                        <p className="spieler__stats">
                            {this.props.spieler.position} Platz! <span style={{color: 'blue'}}>{this.props.spieler.score}</span> Punkt(e)
                        </p>
                    </div>
                    <div className="spieler__actions">
                        <button className="button button--round" onClick={() => Players.update(this.props.spieler._id, {$inc: {score: 1}})}>+1</button>
                        <button className="button button--round" onClick={() => Players.update(this.props.spieler._id, {$inc: {score: -1}})}>-1</button>
                        <button className="button button--round" onClick={() => Players.remove(this.props.spieler._id)}>X</button>
                    </div>
                </div>
            </div>
        );
    }
}

Spieler.propTypes = {
    spieler: PropTypes.object.isRequired
};

// <button className="button button--round" onClick={() => Players.update(this.props.spieler._id, { $inc: { score: 2 } })}>+2</button>
// <button className="button button--round" onClick={() => Players.update(this.props.spieler._id, { $inc: { score: -2 } })}>-2</button>
