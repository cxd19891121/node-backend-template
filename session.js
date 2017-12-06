var expressSession = require('express-session'),
    sessionConfig = require('./config').session;

var session = (function sessionAPI(){

    return {
        start: start
    }

    function start(app){
        app.use(expressSession(sessionConfig));
        console.log("Session has been activated");
    }

}());

module.exports = session;
