var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var mydonorSchema = new Schema({
    
    name:{type:String,
          required:true
         },
    bloodtype:{type:String,
               required:true},
    location:{type:String,
              reuired:true},
    email:{type:String,
           required:true},
    telf:{type:String,
          required:false},
    image:{type:String,
          required:false},
       featured: {
        type: Boolean,
        default:false
    },
	
}, {
    timestamps: true
    
  
    
});
// the schema is useless so far
// we need to create a model using it
var Mydonor = mongoose.model('Mydonor', mydonorSchema);

// make this available to our Node applications
module.exports = Mydonor;