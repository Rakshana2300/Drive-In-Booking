var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rentalDatabase');
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

var rentalSchema = new mongoose.Schema({
	title:'string',
    image:'string',
    description:'string',
    subheading:'string',
    subdesc:'string'
});

var RentalModel = mongoose.model('rental', rentalSchema);
app.get('/',function(req,res) {
	res.send('Working');
});
app.get('/rentals', function(req,res) {
	RentalModel.find({},function(err,docs) {
		if(err) {
			res.send({error:err});
		}
		else {
			res.send({rental:docs});
		}
	});
});
app.listen(3000);
