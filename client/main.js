import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
// Tracker, damit die MiniMongo Inhalte auf dem Client mit der MongoDB auf dem Server synchron gehalten werden
import {Tracker} from 'meteor/tracker';

// Selbsterstellte components
// Players laden, holt die Liste aller in Mongo abgelegten Spieler
import {Players, berechneSpielerPosition} from './../imports/api/players';
// App component laden, dient als Container
import App from './../imports/ui/App';

// const renderSpieler = (spielerListe) => {
//     return spielerListe.map((spieler) => {
//         return <Spieler key={spieler._id} spieler={spieler}/>;
//         // return (
//         //     <p key={spieler._id}>
//         //         {spieler.name} hat einen Punktestand von <span style={{fontWeight: '700', color: 'blue'}}>{spieler.score}</span>
//         //         <button onClick={() => Players.update(spieler._id, {$inc: {score: 2}})}>+2</button>
//         //         <button onClick={() => Players.update(spieler._id, {$inc: {score: 1}})}>+1</button>
//         //         <button onClick={() => Players.update(spieler._id, {$inc: {score: -1}})}>-1</button>
//         //         <button onClick={() => Players.update(spieler._id, {$inc: {score: -2}})}>-2</button>
//         //         <button onClick={() => Players.remove(spieler._id)}>X</button>
//         //     </p>
//         // );
//     });
// };

Meteor.startup(() => {
    Tracker.autorun(() => {
        const titel = 'Score Keep';
        const untertitel = 'Von Uli von Homeyer erstellt';
        let spielerListe = Players.find({}, {sort: {score: -1}}).fetch();
        let positionierteSpieler = berechneSpielerPosition(spielerListe);
        ReactDOM.render(<App titel={titel} spielerliste={positionierteSpieler}/>, document.getElementById('app'));
    });
});
