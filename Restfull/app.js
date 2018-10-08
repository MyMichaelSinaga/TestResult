var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());

//Import Models
TblAdditionalService = require('./models/tblAdditionalService')
TblAlamatJemput = require('./models/tblAlamatJemput')
TblAlamatTujuan = require('./models/tblAlamatTujuan')
TblKendaraan = require('./models/tblKendaraan')
TblPesanan = require('./models/tblPesanan')
TblSupir = require('./models/tblSupir')
TblUser = require('./models/tblUser')

//Connect to Mongoose
mongoose.connect('mongodb://localhost/restfull');
var db = mongoose.connection;


//Rest-API Methods
app.get('/', function(req, res){
	res.send('Please use /api/~(go to models that have been buld)~');
});

app.get('/api/tblAdditionalService', function(req, res){
	TblAdditionalService.getTblAdditionalServices(function(err, tblAdditionalService){
		if(err){
			throw err;
		}
		res.json(tblAdditionalService);
	});
});

app.get('/api/tblAlamatJemput', function(req, res){
	TblAlamatJemput.getTblAlamatJemputs(function(err, tblAlamatJemput){
		if(err){
			throw err;
		}
		res.json(tblAlamatJemput);
	});
});

app.get('/api/tblAlamatTujuan', function(req, res){
	TblAlamatTujuan.getTblAlamatTujuans(function(err, tblAlamatTujuan){
		if(err){
			throw err;
		}
		res.json(tblAlamatTujuan);
	});
});

app.get('/api/tblPesanan', function(req, res){
	TblPesanan.getTblPesanans(function(err, tblPesanan){
		if(err){
			throw err;
		}
		res.json(tblPesanan);
	});
});

app.get('/api/tblSupir', function(req, res){
	TblSupir.getTblSupirs(function(err, tblSupir){
		if(err){
			throw err;
		}
		res.json(tblSupir);
	});
});

app.get('/api/tblUser', function(req, res){
	TblUser.getTblUsers(function(err, tblUser){
		if(err){
			throw err;
		}
		res.json(tblUser);
	});
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
	TblKendaraan.removeTblKendaraan(id, tblKendaraan, {}, function(err, tblKendaraan){
		if(err){
			throw err;
		}
		res.json(tblKendaraan);
	});
});

//Port that have been used
app.listen(3000);
console.log('Running on port 3000...');