// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
objectId = mongoose.Schema.ObjectId;

var heroSchema = new Schema({
    _id: { type: objectId, auto: true },
 name: { type: String, required: true },
 contactNo: { type: String, required: true },
 address: { type: String, required: true }
    
    }, {
 versionKey: false
});






var Heros = mongoose.model('Heros', heroSchema);
 
module.exports = Heros;