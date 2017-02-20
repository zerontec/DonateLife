var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var servSchema = new Schema({
    
    name:{type:String,
          required:true
         },
    image:{type:String,
          required:false
         },
    asunto:{type:String,
          required:true
         },
    
    need:{type:String,
          required:true},
    email:{type:String,
           required:true},
    
    telf:{type:String,
          required:false},
    featured: {
        type: Boolean,
        default:false
    },
    
     }, {
    timestamps: true
  
})

// the schema is useless so far
// we need to create a model using it
var Serv = mongoose.model('Serv',servSchema);

// make this available to our Node applications
module.exports = Serv;