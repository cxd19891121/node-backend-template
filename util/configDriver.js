/**
 * Created by mooner00 on 12/5/2017.
 * File Name: config.js
 * Description: read config.json into config Module
 */

var fs = require('fs'),
    configFilePath = './config.json',
    format = 'utf-8';

var configApi = (function(){


    var API = {

        getConfigObj : getConfigObj,
        writeConfig:writeConfigJson,

    }


    function getConfigObj(){
        var configObj =  JSON.parse(fs.readFileSync(configFilePath,format));
        return configObj;
    }



    function writeConfigJson(configObj,callback){

        var configJson = JSON.stringify(configObj);
        //console.log(configObj);
        fs.open(configFilePath,'w',function(err,fd)
        {
            if (err) console.log(err)
            else {
                fs.writeSync(fd, configJson, 0, 'utf8');
                //fs.fdatasyncSync(fd);
                callback(null, configJson)


            }
        })
        //fs.writeFileSync('./config.json','1234',{flag:'w'});
        //fs.close();

    }

    return API;

})();

module.exports = configApi;


