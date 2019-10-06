/**
 * Created by Chris.Rieger on 1/30/2016.
 */

const bluebird = require('bluebird');
const _ = require('lodash');

const medicalList = require('../resources/supplies.js').medicalList;
const rangedList = require('../resources/supplies.js').rangedList;
const meleeList = require('../resources/supplies.js').meleeList;
const craftingList = require('../resources/supplies.js').craftingList;

const supplyCategories = ['medical', 'rangedWeapons', 'meleeWeapons', 'crafting'];

class SupplyGenerator {
    generateSupplies(suppliesObject) {
        console.log('Finding supplies');
        return bluebird.try(() => {

                let supply = {};
                let supplies = [];
                let numberGenerated = 0;
                let numberToGenerate = 0;

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
            .catch((err) => {
                console.log(err);
            });

    }

    getRandomSupply(numberToGenerate) {

        let supply = supplyCategories[Math.floor((Math.random() * supplyCategories.length))];

        let genny = {};
        genny[supply] = numberToGenerate;

        return this.generateSupplies(genny);
    }

    findCraftableItem(materials) {
        return bluebird.try(() => {
            let craftableItems = _.union(medicalList, meleeList, rangedList);

            craftableItems = _.filter(craftableItems, (item) => {
                if (materials) {
                    console.log('Materials: %s Checking: %s', materials, item.materials);

                    const matched = _.intersection(materials, item.materials);
                    console.log('matched: %s', matched);
                    return matched.length > 0;
                }
                else {
                    return true;
                }
            });

            return craftableItems;

        });
    }

}
;

module.exports = new SupplyGenerator();