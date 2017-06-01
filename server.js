var express = require('express'),
	exphbs  = require('express-handlebars'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');

var app = express(),
	PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

require('./controllers/searchController')(app);

app.use('/public', express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

mongoose.connect('mongodb://localhost/nytreact');

var db = mongoose.connection;

db.on('error', function(err){
	console.log('Mongoose error:', err)
});

db.once('open', function(){
	console.log("Mongoose DB connected!")
});

app.listen(PORT, function(){
  console.log("App listening on PORT", PORT);
});

//function testing............



