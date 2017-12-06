
var redis = require('redis');
var redisConfig = require('./../config').redis;

var client = redis.createClient(redisConfig.client);

client.on("connect", function () {
    console.log('Redis has been connected');
});

client.on('error',function(e){
    console.log("redis error");
    console.log(e);
});



module.exports = client;