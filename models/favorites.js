// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var favoriteSchema = new Schema ({
	postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        donors: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Donors'
        }]
    }, 
    {
        timestamps: true
    }
);
	

// the schema is useless so far
// we need to create a model using it
var Favorites = mongoose.model('Donors', donorSchema);

// make this available to our Node applications
module.exports = Favorites;