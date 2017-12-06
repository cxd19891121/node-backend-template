/**
 * Created by mooner00 on 12/5/2017.
 * File Name: config.js
 * Description: Module for Config object
 */

var configDriver = require('./util/configDriver'),
    configObj = configDriver.getConfigObj();

var config = (function(){


    var API = {
        session : configObj.SESSION,
        redis: configObj.REDIS,
        pg: configObj.POSTGRE_DB,
        url:configObj.URL,
    }


    return API;
})();

module.exports = config;


