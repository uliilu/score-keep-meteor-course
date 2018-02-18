import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';
numeral.register('locale', 'de', {
    delimiters: {
        thousands: ' ',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal: function (number) {
        return 'ter';
    },
    currency: {
        symbol: '€'
    }
});
numeral.locale('de');

export const Players = new Mongo.Collection('players');

export const berechneSpielerPosition = (players) => {
    let rank = 1;

    return players.map((player, index) => {
        if(index !== 0 && players[index - 1].score > player.score) {
            rank++;
        }

        return {
            ...player,
            rank,
            position: numeral(rank).format('0o')
        };
    });
};