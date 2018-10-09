var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//tblKendaraan Schema
var tblKendaraanSchema = mongoose.Schema({
	tipeKendaraan:{
		type: String,
		require:true,
	},
	imageSource:{
		type: String
	},
	beban:{
		type: String
	},
	order:{
		type: Number
	}
});

var TblKendaraan =  module.exports = mongoose.model('TblKendaraan', tblKendaraanSchema);

//show TblKendaraans
module.exports.getTblKendaraans = function(callback, limit){
	TblKendaraan.find(callback).limit(limit);
}

//show TblKendaraan byId
module.exports.getTblKendaraanById = function(id, callback){
	TblKendaraan.findById(id, callback);
}

//add TblKendaraan
module.exports.addTblKendaraan = function(tblKendaraan, callback){
	TblKendaraan.create(tblKendaraan, callback);
}

//update TblKendaraan
module.exports.updateTblKendaraan = function(id, tblKendaraan, options, callback){
	var query = {_id: id};
	var update = {
		tipeKendaraan: tblKendaraan.tipeKendaraan,
		imageSource: tblKendaraan.imageSource,
		beban: tblKendaraan.beban,
		order: tblKendaraan.order
	}
	TblKendaraan.findOneAndUpdate(query, update, options, callback);
}

//delete tblKendaraan
module.exports.removeTblKendaraan = function(id, callback){
	var query = {_id: id};
	TblKendaraan.remove(query, callback);
}