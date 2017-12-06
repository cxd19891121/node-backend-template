/**
 * Created by mooner00 on 12/5/2017.
 * File Name: bin.js
 * Description: Start node app
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session');

var router = require("./router"),
    session = require("./session");


var PORT = process.env.PORT || 3000;
session.start(express());

express()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use('/',router)
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));






