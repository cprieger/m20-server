/**
 * Created by Chris.Rieger on 1/30/2016.
 */

var Promise = require('bluebird');

var tileGenerator = require('./tile.js');


class LandGenerator {
    generateLand(tileCount) {
        console.log('Building Land');
        return Promise.try(() => {
            var landPromises = [];

            for (var i = 0; i < tileCount; ++i) {
                landPromises.push(tileGenerator.generateTile());
            }

            return Promise.all(landPromises)
                .then((lands) => {
                    return lands;
                });
        })
    }
}
;

module.exports = new LandGenerator();