var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Team = require('../models/team');
/*var Verify = require('./verify');*/

var teamRouter = express.Router();
teamRouter.use(bodyParser.json());

teamRouter.route('/')
.get( function(req, res){
    Team.find(function(err, team){
        
        if(err)
            res.send(err);
        res.json(team);
    })
   
})

.post( function(req, res){
    Team.create(req.body,function(err, team){
        
        if(err)
            res.send(err);
        res.json(team);
    })
   
})


teamRouter.route('/:id')
  .get(function(req, res){
    Team.findOne({_id:req.params.id},
    function(err, team){
        
        if(err)
            res.send(err);
        res.json(team);
    })
   
})

.delete(   function(req, res){
    Team.findOneAndRemove({_id:req.params.id},function(err, team){
        
        if(err)
            res.send(err);
        res.json(team);
    })
   
})
.put( function(req, res){
    var query = {_id:req.params.id};
    update = {
        
        image:req.body.image,
        name:req.body.name,
        designation:req.body.designation
        
    }
    
    Team.finOneAndUpdate(query , update, function(err, team){
        
        if(err)
            res.send(err);
        res.json(team);
    })




});

module.exports = teamRouter;