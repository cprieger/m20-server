/**
 * Created by Chris.Rieger on 1/30/2016.
 */

var Promise = require('bluebird');
var vehicleList = require('../resources/vehicles.js').vehicleList;
var supplies = require('./supplies.js');


class VehicleGenerator {
    generateVehicle(numberToGenerate) {
        console.log('Finding vehicles');
        return Promise.try(() => {

                var vehicle = {};
                var vehicles = [];
                var i = 0;
                while (i < numberToGenerate) {
                    vehicle = vehicleList[Math.floor((Math.random() * vehicleList.length))];
                    vehicles.push(vehicle);

                    i++;
                }
                console.log('vehicles Found');

                return vehicles;
            })
            .map((vehicle) => {
                return supplies.generateSupplies(vehicle.supplies)
                    .then((supplyList) => {
                        vehicle.supplyList = supplyList;
                        return vehicle;
                    });

            });
    }
}
;

module.exports = new VehicleGenerator();