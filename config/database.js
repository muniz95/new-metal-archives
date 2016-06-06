var mongoose = require("mongoose");

module.exports = function(uri){
    mongoose.set('debug', true);
    mongoose.connect(uri);
    
    mongoose.connection.on('connected', function(){
        console.log("Mongoose connected on "+ uri);
    });
    
    mongoose.connection.on('disconnected', function(){
        console.log("Mongoose has been disconnected");
    });
    
    mongoose.connection.on('error', function(err){
        console.log("Error: "+ err);
    });
    
    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log("Mongoose has been disconnected");
            process.exit(0);
        });
    });
}