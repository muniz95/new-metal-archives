var mongoose = require("mongoose");

module.exports = function(){
    var schema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        instrument: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        active_since: {
            type: Number,
            required: true
        }
    });

    return mongoose.model('Artist', schema);
}
