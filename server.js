
var express = require ('express'),
bodyParser = require ('body-parser'),
app = express();
var logger = require('morgan');
var config = require("./config");
var mongoose = require("mongoose");
var passport = require('passport');
var mongodbUri = require('mongodb-uri');
var authenticate = require('./authenticate');
var LocalStrategy = require('passport-local').Strategy;


var app = express();




// Reformat to a Mongoose connect string and connect() 
/*var mongooseConnectString = mongodbUri.formatMongoose(Uri);
mongoose.connect(mongooseConnectString);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function callback () {
    console.log('Successfully connected to MongoDB');*/
///////////////////////////////////////////
//PARA DESAROLLO
app.set('port', (process.env.PORT || 5000));
mongoose.connect(config.mongoUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");
});
//////////////////////////////////////

/*
//PARA PRODUCCION
app.listen(process.env.PORT || 5000)

mongoose.connect(config.mongodbUri);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    // we're connected!
    console.log("Connectado correctamente al servidor");
});
*/



var routes = require('./routes/index');
var users = require('./routes/users');
var servRouter = require('./routes/servRouter');
var mydonorRouter = require('./routes/mydonorRouter');
var infoRouter = require('./routes/infoRouter');
var teamRouter =require('./routes/teamRouter');
var favoriteRouter = require('./routes/favoriteRouter');



app.use(passport.initialize());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.use('/', routes);
app.use('/users', users);
app.use('/servs', servRouter);
app.use('/mydonor', mydonorRouter);
app.use('/info', infoRouter);
app.use('/team', teamRouter);
app.use('/favorites', favoriteRouter);


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});





app.get('/', function(req, res){
    
    res.send("Hola Leoberto eres Genial");
});


app.listen(5000, function(){
    console.log('El servidor esta corriendo por el puerto 5000 genial ');
})

/*app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});*/
