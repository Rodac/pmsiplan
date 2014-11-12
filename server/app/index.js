// Loading Config
var config = require("../config/config"),
    Bedoon = require('bedoon'),
    express = require('express'),
    passport = require('passport'),
    bedoon = new Bedoon(config),
    port = 3700
;
bedoon.app.use(express.static(__dirname + '/../../public'));
bedoon.run(3700);
console.log("Listening on port " + 3700);