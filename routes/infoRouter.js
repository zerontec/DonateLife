var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Info = require('../models/info')
/*var Verify = require('./verify');*/
var infoRouter = express.Router();
infoRouter.use(bodyParser.json());

infoRouter.route('/')
.get( function(req, res){
    Info.find(function(err, info){
        
        if(err)
            res.send(err);
        res.json(info);
    })
    
})
.post( function(req, res){
   Info.create(req.body, function(err, info){
        
        if(err)
            res.send(err);
        res.json(info);
    })
    
})


infoRouter.route('/:id')
.get( function(req, res){
    Info.findOne({_id:req.params.id,}, function(err, info){
        
        if(err)
            res.send(err);
        res.json(info);
    })
    
})

.delete( function(req, res){
    Info.findOne({_id:req.params.id,}, function(err, info){
        
        if(err)
            res.send(err);
        res.json(info);
    })
    
})

.put( function(req, res){
    var query ={_id:req.params.id,};
    update = {
        
        titulo:req.body.titulo,
        image:req.body.image,
        conte:req.body.conte,
    }
    
    Info.findOneAndUpdate(query, update,
                         function(err, info){
        
        if(err)
            res.send(err);
        res.json(info);
        
    })
    
    });

module.exports = infoRouter;