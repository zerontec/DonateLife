// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Usermaps = require('../models/usermap');

// Opens App Routes

var usermapRouter = express.Router();
usermapRouter.use(bodyParser.json());
    // GET Routes
    // --------------------------------------------------------
    // Retrieve records for all users in the db
    usermapRouter.route('/')
        .get (function(req, res){
        
       // Uses Mongoose schema to run the search (empty conditions)
       var query = Usermaps.find({});
        query.exec(function(err, usermap){
            if(err)
                res.send(err);

           // If no errors are found, it //responds with a JSON of all users
           res.json(usermap);
       });
   })

    // POST Routes
    // --------------------------------------------------------
    // Provides method for saving new users in the db
    .post( function(req, res){

        // Creates a new User based on the Mongoose schema and the post bo.dy
        var newuser = new Usermap(req.body);

        // New User is saved in the db.
        newuser.save(function(err){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of the new user
            res.json(req.body);
        });
    });
  module.exports = usermapRouter;