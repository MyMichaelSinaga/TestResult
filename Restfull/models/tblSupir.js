var mongoose = require('mongoose');

//tblSupir Schema
var tblSupirSchema = mongoose.Schema({
	nama:{
		type: String,
		require:true,
	},
	alamat:{
		type: String,
		require:true,
	},
	nomorHP:{
		type: String,
		require:true,
	}
});

var TblSupir =  module.exports = mongoose.model('TblSupir', tblSupirSchema);

// get TblSupirs
module.exports.getTblSupirs = function(callback, limit){
	TblSupir.find(callback).limit(limit);
}