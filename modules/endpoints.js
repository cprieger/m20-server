/**
 * Created by Chris.Rieger on 1/30/2016.
 */

const tile = require('../generators/tile.js');
const supplies = require('../generators/supplies.js');
const land = require('../generators/land.js');

const express = require('express');
const router = express.Router();
const bluebird = require('bluebird');

router.get('/', (req, res)  => {
    res.send('Hello World!');
});

router.get('/tile', (req, res)  => {

    return tile.generateTile(req).then(
        (results) => {
            res.json(results);
        })
        .catch(function (err) {
            res.send(err);
        });
});

router.get('/scavenge', (req, res)  => {

    const level = req.query.level;

    const amountToGenerate = Math.floor(level / 2);

    return supplies.getRandomSupply(amountToGenerate).then(
        (results) => {
            res.json(results);
        })
        .catch(function (err) {
            res.send(err);
        });
});

router.get('/craftableItemList', (req, res)  => {

    //What was I doing here?
    //I think this should be passed in. 
    let materials = undefined;

    return supplies.findCraftableItem(materials).then(
        (results) => {
            res.json(results);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.post('/findCraftableItem', (req, res) => {

    console.log('Got %s', req.params);
    const materials = req.body.materials;
    console.log('Got %s', materials);

    return supplies.findCraftableItem(materials)
        .then(
            (results) => {
                res.json(results);
            })
        .catch((err) => {
            res.send(err);
        });
});

router.post('/generateLand', (req, res)  => {
    const tileCount = (req.body.tileCount) ? req.body.tileCount : 10;
    console.log('Got %s', tileCount);

    return land.generateLand(tileCount)
        .then(
            (results) => {
                res.json(results);
            })
        .catch((err) => {
            res.send(err);
        });
});

console.log('Endpoints were set.');

module.exports = router;