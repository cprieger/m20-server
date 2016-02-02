/**
 * Created by Chris.Rieger on 1/30/2016.
 */

var Promise = require('bluebird');

var medicalList = require('../resources/supplies.js').medicalList;
var rangedList = require('../resources/supplies.js').rangedList;
var meleeList = require('../resources/supplies.js').meleeList;
var craftingList = require('../resources/supplies.js').craftingList;

var supplyCategories = ['medical', 'rangedWeapons', 'meleeWeapons', 'crafting'];

module.exports = {
    generateSupplies: function (suppliesObject) {
        console.log('Finding supplies');
        return Promise.try(function () {

                var supply = {};
                var supplies = [];
                var numberGenerated = 0;
                var numberToGenerate = 0;

                if (suppliesObject.crafting) {
                    console.log('Finding crafting supplies');

                    numberToGenerate = suppliesObject.crafting;
                    numberGenerated = 0;
                    while (numberGenerated < numberToGenerate) {
                        supply = craftingList[Math.floor((Math.random() * craftingList.length))];
                        supplies.push(supply);

                        numberGenerated++;
                    }
                }

                if (suppliesObject.medical) {
                    console.log('Finding medical supplies');


                    numberToGenerate = suppliesObject.medical;
                    numberGenerated = 0;
                    while (numberGenerated < numberToGenerate) {
                        supply = medicalList[Math.floor((Math.random() * medicalList.length))];
                        supplies.push(supply);

                        numberGenerated++;
                    }
                }

                if (suppliesObject.rangedWeapons) {
                    console.log('Finding ranged weapons supplies');

                    numberToGenerate = suppliesObject.rangedWeapons;
                    numberGenerated = 0;
                    while (numberGenerated < numberToGenerate) {
                        supply = rangedList[Math.floor((Math.random() * rangedList.length))];
                        supplies.push(supply);

                        numberGenerated++;
                    }
                }

                if (suppliesObject.meleeWeapons) {
                    console.log('Finding melee weapons supplies');

                    numberToGenerate = suppliesObject.meleeWeapons;
                    numberGenerated = 0;
                    while (numberGenerated < numberToGenerate) {
                        supply = meleeList[Math.floor((Math.random() * meleeList.length))];
                        supplies.push(supply);

                        numberGenerated++;
                    }
                }


                console.log('supplies Found');

                return supplies;
            })
            .catch(function (err) {
                console.log(err);
            });

    },
    getRandomSupply: function (numberToGenerate) {

        var supply = supplyCategories[Math.floor((Math.random() * supplyCategories.length))];

        var genny = {};
        genny[supply] = numberToGenerate;

        return module.exports.generateSupplies(genny);
    },
};