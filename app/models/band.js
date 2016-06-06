var mongoose = require("mongoose");

module.exports = function(){
    var schema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        genre: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    });
    
    return mongoose.model('Band', schema);
}