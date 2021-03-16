var http = require('http');
var fs = require('fs');

//inherits from eventemitter
var myReadStream = fs.createReadStream(__dirname + '/data.txt', 'utf-8');
//on receiving some data
myReadStream.on('data', function(chunk){
    console.log("================================================================================================");
    console.log(chunk)
})