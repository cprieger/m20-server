/**
 * Created by Chris.Rieger on 1/30/2016.
 */


var endpointRouter = require('./modules/endpoints.js');
var Promise = require('bluebird');
var bodyParser = require('body-parser');

//Lets define a port we want to listen to
const PORT = 8080;

var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use(endpointRouter);

app.listen(PORT, function () {
    console.log('Example app listening on port %s!', PORT);
});