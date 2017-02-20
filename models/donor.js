// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
   
    
    comment: {
        type: String,
        required:false
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    

      }, {
    timestamps: true
});  

/*
var UserSchema = new Schema({
    donorname: {type: String, required: true},
    email: {type: String, required: true},
    bloodtype: {type: String, },
    age: {type: Number, required: true},
    location: {type: [Number], required: true}, // [Long, Lat]
    htmlverified: String,
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});
*/

// Sets the created_at parameter equal to the current time
/*
UserSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

// Indexes this schema in 2dsphere format (critical for running proximity searches)
UserSchema.index({location: '2dsphere'});
*/



var donorSchema = new Schema({
    
    image:{
        
        type:String,
        required:true
    },
    
    name:  {
        type:String,
        required: true
    },
    email:  {
        type: String,
        required: true
    },
    bloodtype: {
        type: String,
        required:true
    },
    location: {
        type: String,
        required:true
    },
     comments:[commentSchema]
}, {
    timestamps: true
    
});



// the schema is useless so far
// we need to create a model using it
var Donors = mongoose.model('Donors', donorSchema);

// make this available to our Node applications
module.exports = Donors;