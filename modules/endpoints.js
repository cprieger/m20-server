/**
 * Created by Chris.Rieger on 1/30/2016.
 */

var tile = require('../generators/tile.js');
var supplies = require('../generators/supplies.js');

var express = require('express');
var router = express.Router();
var Promise = require('bluebird');

router.get('/', function (req, res) {
    res.send('Hello World!');
});

router.get('/tile', function (req, res) {

    return tile.generateTile(req).then(
        function (results) {
            res.json(results);
        })
        .catch(function(err){
            res.send(err);
        });
});

router.get('/scavenge', function (req, res) {

    var level = req.query.level;

    var amountToGenerate = Math.floor(level / 2);

    return supplies.getRandomSupply(amountToGenerate).then(
        function (results) {
            res.json(results);
        })
        .catch(function(err){
            res.send(err);
        });
});

console.log('Endpoints were set.');

module.exports = router;