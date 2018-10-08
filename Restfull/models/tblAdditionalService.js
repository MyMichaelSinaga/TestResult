var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = mongoose.model('tblPesanan', tblPesananSchema);

//tblAdditionalService Schema
var tblAdditionalServiceSchema = mongoose.Schema({
	deskripsiLayanan:{
		type: String,
		require:true,
	},
	totalHarga:{
		type: Number,
		require:true,
	},
	id_pesanan:[
      {type: Schema.Types.ObjectId, ref: 'tblSupir'}
    ]
});

var TblAdditionalService =  module.exports = mongoose.model('TblAdditionalService', tblAdditionalServiceSchema);

// get TblAdditionalServices
module.exports.getTblAdditionalServices = function(callback, limit){
	TblAdditionalService.find(callback).limit(limit);
}