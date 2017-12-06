/**
 * Created by mooner00 on 12/5/2017.
 * File Name: router.js
 * Description: Main router for node app
 */

var router  = require('express').Router(),
    path = require('path');

var indexPath =  path.join(__dirname,'index.html');

router
    .get('/', (req,res)=> res.sendFile(indexPath));

module.exports = router;


