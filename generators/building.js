/**
 * Created by Chris.Rieger on 1/30/2016.
 */

var Promise = require('bluebird');
var buildingList = require('../resources/buildings.js').buildingList;
var supplies = require('./supplies.js');
var monsters = require('./monster.js');

class BuildingGenerator {
    generateBuilding(numberToGenerate) {
        console.log('Finding buildings');
        return Promise.try(() => {

                var building = {};
                var buildings = [];
                var i = 0;
                while (i < numberToGenerate) {
                    building = buildingList[Math.floor((Math.random() * buildingList.length))];
                    buildings.push(building);

                    i++;
                }

                console.log('Buildings Found');

                return buildings;
            })
            .map((building) => {
                return supplies.generateSupplies(building.supplies)
                    .then((supplyList) => {
                        building.supplyList = supplyList;
                        return building;
                    });

            })
            .map((building) => {
                return monsters.generateMonster(building.spawnCount, building.buildingSize)
                    .then((monsters) => {
                        building.monsters = monsters;
                        return building;
                    });
            });
    }
};

module.exports = new BuildingGenerator();