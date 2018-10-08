var mongoose = require('mongoose');

//tblUser Schema
var tblUserSchema = mongoose.Schema({
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

var TblUser =  module.exports = mongoose.model('TblUser', tblUserSchema);

// get TblUsers
module.exports.getTblUsers = function(callback, limit){
	TblUser.find(callback).limit(limit);
}