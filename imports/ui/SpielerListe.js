// SpielerListe component, erstellt die Liste anhand der component Spieler
// React laden, um JSX ausgeben zu können
import React from 'react';
// PropTypes laden zur Überprüfung, dass die richtigen Inhalte und der Typ als props ankommen
import PropTypes from 'prop-types';
// react-flip-move importieren, um die Listendarstellung zu animieren
import FlipMove from 'react-flip-move';
// component Spieler laden. Damit die einzelnen Spieler angezeigt werden
import Spieler from './Spieler';

export default class SpielerListe extends React.Component {
    spielerRendern() {
        if(this.props.spielerliste.length === 0) {
            return (
                <div className="item">
                    <p className="item__message">Füge einen Spieler hinzu, um anzufangen.</p>
                </div>
            );
        } else {
            return this.props.spielerliste.map((spieler) => {
                return <Spieler key={spieler._id} spieler={spieler}/>;
            });
        }
    }
    render() {
        return (
            <div>
                <FlipMove maintainContainerHeight={true}>
                    {this.spielerRendern()}
                </FlipMove>
            </div>
        );
    }
}

SpielerListe.propTypes = {
    spielerliste: PropTypes.array.isRequired
};