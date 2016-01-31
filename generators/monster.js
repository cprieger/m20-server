/**
 * Created by Chris.Rieger on 1/31/2016.
 */

var Promise = require('bluebird');
var monsterList = require('../resources/monsters.js').monsterList;

module.exports = {
    generateMonster: function (numberOfSpawnpoints) {
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
                monster.numberSpawned = Math.floor((Math.random() * 10) + 1);
                return monster;
            });
    },
};