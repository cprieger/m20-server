/**
 * Created by Chris.Rieger on 1/30/2016.
 */

var Promise = require('bluebird');

var tileList = require('../resources/tiles.js').tileList;

var buildingGenerator = require('./building.js');
var vehicleGenerator = require('./vehicle.js');


module.exports = {
    generateTile: function (req) {
        console.log('Finding Tile');
        return Promise.try(function () {

            var tile = tileList[Math.floor((Math.random() * tileList.length))];
            console.log('Tile Found');

            return tile;
        })
            .then(function (tile) {
                return buildingGenerator.generateBuilding(tile.buildingCount)
                    .then(function (buildings) {
                        tile.buildings = buildings;
                        return tile;
                    });
            })
            .then(function (tile) {
                return vehicleGenerator.generateVehicle(tile.vehicleCount)
                    .then(function (vehicles) {
                        tile.vehicles = vehicles;
                        return tile;
                    });
            });

    },
};