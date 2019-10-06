/**
 * Created by Chris.Rieger on 1/31/2016.
 */

const bluebird = require('bluebird');
const monsterList = require('../resources/monsters.js').monsterList;

class MonsterGenerator {
    generateMonster(numberOfSpawnpoints, buildingSize) {
        console.log('Finding monsters');
        return bluebird.try(() => {
                let monster = {};
                let monsters = [];
                let i = 0;

                while (i < numberOfSpawnpoints) {
                    monster = monsterList[Math.floor((Math.random() * monsterList.length))];
                    monsters.push(monster);
                    i++;
                }
                console.log('monsters Found');

                return monsters;
            })
            .map((monster) => {
                let capacity = 0;
                if (buildingSize == 'Small') {
                    capacity = 1;
                }
                if (buildingSize == 'Medium') {
                    capacity = 2;
                }
                if (buildingSize == 'Large') {
                    capacity = 3;
                }

                monster.numberSpawned = Math.floor((Math.random() * capacity) + 1);
                return monster;
            });
    }
}
;

module.exports = new MonsterGenerator();