var mongoose = require('mongoose');

//tblAlamatJemput Schema
var tblAlamatJemputSchema = mongoose.Schema({
	alamatLengkap:{
		type: String,
		require:true,
	}
});

var TblAlamatJemput =  module.exports = mongoose.model('TblPesananAlamatJemput', tblAlamatJemputSchema);

// get TblAlamats
module.exports.getTblAlamatJemputs = function(callback, limit){
	TblAlamatJemput.find(callback).limit(limit);
}