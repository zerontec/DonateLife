// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*require('mongoose-currency').loadType(mongoose);
/*var Currency = mongoose.Types.Currency;*/


var infoSchema = new Schema({
    titulo: {
        type: String,
        required: true,
       
    },
	image:{
		type:String,
	},
	
	conte: {
		
		type:String,
		default:""
	},
    
    featured: {
        type: Boolean,
        default:false
    },
	
}, {
    timestamps: true
    
})
// the schema is useless so far
// we need to create a model using it
var Info = mongoose.model('Info', infoSchema);

// make this available to our Node applications
module.exports = Info;