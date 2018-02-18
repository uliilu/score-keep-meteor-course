import React from 'react';
import PropTypes from 'prop-types';

// TitleBar erstellt die oberste Zeile und bekommt von hier props übergeben
import TitleBar from './TitleBar';
// AddPlayer fügt eine Eingabemöglichkeit hinzu, um Spieler anzulegen
import AddPlayer from './AddPlayer';
// SpielerListe erstellt die Liste aller Spieler mit Hilfe der component Spieler die in SpielerListe importiert wird
import SpielerListe from './SpielerListe';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <TitleBar titel={this.props.titel} untertitel="Kreiert von Uli von Homeyer"/>
                <div className="wrapper">
                    <SpielerListe spielerliste={this.props.spielerliste}/>
                    <AddPlayer/>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    titel: PropTypes.string.isRequired,
    spielerliste: PropTypes.array.isRequired
};