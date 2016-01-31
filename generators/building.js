/**
 * Created by Chris.Rieger on 1/30/2016.
 */

var Promise = require('bluebird');
var buildingList = require('../resources/buildings.js').buildingList;

module.exports = {
    generateBuilding: function (numberToGenerate) {
        console.log('Finding buildings');
        return Promise.try(function () {

            var building = {};
            var buildings = [];
            var i = 0;
            while (i < numberToGenerate)
            {
                building = buildingList[Math.floor((Math.random() * buildingList.length))];
                buildings.push(building);

                i++;
            }


            console.log('Buildings Found');

            return buildings;
        });
    },
};