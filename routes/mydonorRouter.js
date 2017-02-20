var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Mydonor = require('../models/mydonor');


var mydonorRouter = express.Router();
mydonorRouter.use(bodyParser.json());

mydonorRouter.route('/')

.get(  function(req, res){
    Mydonor.find(function(err, mydonor){
        
        if(err)
            res.send(err);
        res.json(mydonor);
    })
   
})

.post( function(req, res){
  Mydonor.create(req.body, function(err, mydonor){
        
        if(err)
            res.send(err);
        res.json(mydonor);
    })
    
   }) 

    
   

mydonorRouter.route('/:id')
      .get( function(req, res){
    Mydonor.findOne({_id:req.params.id}, function(err, mydonor){
        
        if(err)
            res.send(err);
        res.json(mydonor);
    })
        
    
   
}) 

 .delete( function(req, res){
    Mydonor.findOneAndRemove({_id:req.params.id}, function(err, mydonor){
        
        if(err)
            res.send(err);
        res.json(mydonor);
    })
        
    
   
})

.put( function(req, res){
    var query = {_id:req.params.id};
    update = {
        
        name:req.body.name,
        bloodtype:req.body.bloodtype,
        location:req.body.location,
        email:req.body.email,
        telf:req.body.telf,
        
        
    }
   Mydonor.findOneAndUpdate(query , update, function(err, mydonor){
        
        if(err)
            res.send(err);
        res.json(mydonor);
    })
        
    
   
});
    
   


module.exports = mydonorRouter;
