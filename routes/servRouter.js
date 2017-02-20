var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Serv= require('../models/servs');

var servRouter = express.Router();
servRouter.use(bodyParser.json())
servRouter.route('/')
.get(  function(req, res){
   Serv.find(function(err, serv){
        
        if(err)
            res.send(err);
        res.json(serv);
    })
   
})

.post(  function(req, res){
    Serv.create(req.body, function(err, serv){
        
        if(err)
            res.send(err);
        res.json(serv);
    })
   
})

    
    
   
servRouter.route('/:id')
.get(  function(req, res){
   Serv.findOne({_id:req.params.id},function(err, serv){
        
        if(err)
            res.send(err);
        res.json(serv);
    })
   
               })

.delete( function(req, res){
    Serv.findOneAndRemove({_id:req.params.id}, function(err, serv){
        
        if(err)
            res.send(err);
        res.json(serv);
    })
        
    
   
})
    
    
.put( function(req, res){
    var query = {_id:req.params.id};
    update = {
        
        name:req.body.name,
       location:req.body.location,
        need:req.body.need,
        email:req.body.email,
        telf:req.body.telf,
        
        
    }
    Serv.findOneAndUpdate(query , update, function(err, serv){
        
        if(err)
            res.send(err);
        res.json(serv);
    })
        
    
   
});

module.exports = servRouter;
