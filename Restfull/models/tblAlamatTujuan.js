var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = mongoose.model('tblAlamatJemput', tblAlamatJemputSchema);

//tblAlamatTujuan Schema
var tblAlamatTujuanSchema = mongoose.Schema({
	alamatLengkap:{
		type: String,
		require:true,
	},
	jarak:{
		type: Number,
		require:true,
	},
	prioritas:{
		type: String,
		require:true,
	},
	id_AlamatJemput:[
      {type: Schema.Types.ObjectId, ref: 'tblAlamatJemput'}
    ]
});

var TblAlamatTujuan =  module.exports = mongoose.model('TblPesananAlamatTujuan', tblAlamatTujuanSchema);

// get TblAlamatTujuans
module.exports.getTblAlamatTujuans = function(callback, limit){
	TblAlamatTujuan.find(callback).limit(limit);
}