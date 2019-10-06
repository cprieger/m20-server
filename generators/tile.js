/**
 * Created by Chris.Rieger on 1/30/2016.
 */

const bluebird = require('bluebird');

const tileList = require('../resources/tiles.js').tileList;

const buildingGenerator = require('./building.js');
const vehicleGenerator = require('./vehicle.js');


class TileGenerator {
    generateTile(req) {
        console.log('Finding Tile');
        return bluebird.try(() => {

                let tile = tileList[Math.floor((Math.random() * tileList.length))];
                console.log('Tile Found');

                return tile;
            })
            .then((tile) => {
                return buildingGenerator.generateBuilding(tile.buildingCount)
                    .then((buildings) => {
                        tile.buildings = buildings;
                        return tile;
                    });
            })
            .then((tile) => {
                return vehicleGenerator.generateVehicle(tile.vehicleCount)
                    .then((vehicles) => {
                        tile.vehicles = vehicles;
                        return tile;
                    });
            });

    }
}
;

module.exports = new TileGenerator();