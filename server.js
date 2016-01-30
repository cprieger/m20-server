/**
 * Created by Chris.Rieger on 1/30/2016.
 */

//Lets require/import the HTTP module
var http = require('http');
var endpoints = require('./modules/endpoints.js');
var Promise = require('bluebird');

//Lets define a port we want to listen to
const PORT = 8080;

var express = require('express');
var app = express();

app = endpoints.addEndpointsToApp(app);

app.listen(PORT, function () {
    console.log('Example app listening on port %s!', PORT);
});