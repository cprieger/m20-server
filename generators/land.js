/**
 * Created by Chris.Rieger on 1/30/2016.
 */

var Promise = require('bluebird');

var tileGenerator = require('./tile.js');


module.exports = {
    generateLand: function (tileCount) {
        console.log('Building Land');
        return Promise.try(function () {
            var landPromises = [];

            for (var i = 0; i < tileCount; ++i) {
                landPromises.push(tileGenerator.generateTile());
            }

            return Promise.all(landPromises)
                .then(function (lands) {
                    return lands;
                });
        })
    },
};