var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Heros = require('../models/hero');


var heroRouter = express.Router();
heroRouter.use(bodyParser.json());

heroRouter.route('/')

.get( function(req, res) {
 Heros.find({}, function(err, data) {
 if (err) {
 res.send("error");
 return;
 }
     res.json(hero);
 });
    
    })
.get( function(req, res) {
 var id = req.params.id;
 Heros.find({ _id: id }, function(err, data) {
 if (err) {
 res.send("error");
 return;
 }
 res.send(data[0]);
 });
}).post( function(req, res) {
 var obj = req.body;
 var model = new hero(obj);
 model.save(function(err) {
 if (err) {
 res.send("error");
 return;
 }
 res.send("created");
 });
}).put( function(req, res) {
 var id = req.params.id;
 var obj = req.body;
 
 Heros.findByIdAndUpdate(id, { name: obj.name, contactNo: obj.contactNo, address: obj.address }, 
function(err) {
 if (err) {
 res.send("error");
 return;
 }
 res.send("updated");
 });
}).delete( function(req, res) {
 var id = req.params.id;
 Heros.findByIdAndRemove(id, function(err) {
 if (err) {
 res.send("error");
 return;
 }
 res.send("deleted");
 });
});
module.exports = heroRouter;