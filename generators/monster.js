/**
 * Created by Chris.Rieger on 1/31/2016.
 */

var Promise = require('bluebird');
var monsterList = require('../resources/monsters.js').monsterList;

module.exports = {
    generateMonster: function (numberOfSpawnpoints, buildingSize) {
        console.log('Finding monsters');
        return Promise.try(function () {

            var monster = {};
            var monsters = [];
            var i = 0;

            while (i < numberOfSpawnpoints) {
                monster = monsterList[Math.floor((Math.random() * monsterList.length))];
                monsters.push(monster);
                i++;
            }
            console.log('monsters Found');

            return monsters;
        })
            .map(function(monster){
                var capacity = 0;
                if (buildingSize == 'Small')
                {
                    capacity = 3;
                }
                if (buildingSize == 'Medium')
                {
                    capacity = 5;
                }
                if (buildingSize == 'Large')
                {
                    capacity = 7;
                }

                monster.numberSpawned = Math.floor((Math.random() * capacity) + 1);
                return monster;
            });
    },
};