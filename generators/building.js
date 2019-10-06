/**
 * Created by Chris.Rieger on 1/30/2016.
 */

const bluebird = require('bluebird');
const buildingList = require('../resources/buildings.js').buildingList;
const supplies = require('./supplies.js');
const monsters = require('./monster.js');

class BuildingGenerator {
    generateBuilding(numberToGenerate) {
        console.log('Finding buildings');
        return bluebird.try(() => {
                let building = {};
                let buildings = [];
                let i = 0;
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