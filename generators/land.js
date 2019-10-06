/**
 * Created by Chris.Rieger on 1/30/2016.
 */

const bluebird = require('bluebird');

const tileGenerator = require('./tile.js');


class LandGenerator {
    generateLand(tileCount) {
        console.log('Building Land');
        return bluebird.try(() => {
            let landbluebirds = [];

            for (let i = 0; i < tileCount; ++i) {
                landbluebirds.push(tileGenerator.generateTile());
            }

            return bluebird.all(landbluebirds)
                .then((lands) => {
                    return lands;
                });
        })
    }
}
;

module.exports = new LandGenerator();