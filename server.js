/**
 * Created by Chris.Rieger on 1/30/2016.
 * Updated By Chris.Rieger on 10/06/2019. 
 * Intended as a learning and practicing service. 
 */

const endpointRouter = require('./modules/endpoints.js');
const bluebird = require('bluebird');
const bodyParser = require('body-parser');

//Lets define a port we want to listen to
const PORT = 8080;

const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(endpointRouter);

app.listen(PORT, function () {
    console.log('M20-Server listening on port %s!', PORT);
});