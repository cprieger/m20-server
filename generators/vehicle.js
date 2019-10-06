/**
 * Created by Chris.Rieger on 1/30/2016.
 */

const bluebird = require('bluebird');
const vehicleList = require('../resources/vehicles.js').vehicleList;
const supplies = require('./supplies.js');


class VehicleGenerator {
    generateVehicle(numberToGenerate) {
        console.log('Finding vehicles');
        return bluebird.try(() => {

                let vehicle = {};
                let vehicles = [];
                let i = 0;
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