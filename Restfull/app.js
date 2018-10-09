var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());

//Import Models
TblKendaraan = require('./models/tblKendaraan')

//Connect to Mongoose
mongoose.connect('mongodb://localhost/Restfull');
var db = mongoose.connection;


//Rest-API Methods
app.get('/', function(req, res){
	res.send('Please use /api/~(go to models that have been buld)~');
});


//Get --to show all
app.get('/api/tblKendaraan', function(req, res){
	TblKendaraan.getTblKendaraans(function(err, tblKendaraan){
		if(err){
			throw err;
		}
		res.json(tblKendaraan);
	});
});
//Get ById --to show byId
app.get('/api/tblKendaraan/:_id', function(req, res){
	TblKendaraan.getTblKendaraanById(req.params._id, function(err, tblKendaraan){
		if(err){
			throw err;
		}
		res.json(tblKendaraan);
	});
});
//Post --to add
app.post('/api/tblKendaraan', function(req, res){
	var tblKendaraan = req.body;
	TblKendaraan.addTblKendaraan(tblKendaraan, function(err, tblKendaraan){
		if(err){
			throw err;
		}
		res.json(tblKendaraan);
	});
});
//Put --to update using id
app.put('/api/tblKendaraan/:_id', function(req, res){
	var id = req.params._id;
	var tblKendaraan = req.body;
	TblKendaraan.updateTblKendaraan(id, tblKendaraan, {}, function(err, tblKendaraan){
		if(err){
			throw err;
		}
		res.json(tblKendaraan);
	});
});
//Delete --to remove using id
app.delete('/api/tblKendaraan/:_id', function(req, res){
	var id = req.params._id;
	TblKendaraan.removeTblKendaraan(id, function(err, tblKendaraan){
		if(err){
			throw err;
		}
		res.json(tblKendaraan);
	});
});

//Port that have been used
app.listen(3000);
console.log('Running on port 3000...');