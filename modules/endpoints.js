/**
 * Created by Chris.Rieger on 1/30/2016.
 */

var tile = require('../generators/tile.js');

module.exports = {
    addEndpointsToApp: function (app) {
        app.get('/', function (req, res) {
            res.send('Hello World!');
        });

        app.get('/tile', function (req, res) {

            res.send(tile.generateTile());
        });

        console.log('Endpoints were set.');
        return app;
    },
};