var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = mongoose.model('tblKendaraan', tblKendaraanSchema);
module.exports = mongoose.model('tblUser', tblUserSchema);
module.exports = mongoose.model('tblAlamatTujuan', tblTujuanSchema);

//tblPesanan Schema
var tblPesananSchema = mongoose.Schema({
	deskripsiPesanan:{
		type: String,
		require:true,
	},
	jumlahPesanan:{
		type: Number,
		require:true,
	},
	id_kendaraan:[
      {type: Schema.Types.ObjectId, ref: 'tblKendaraan'}
    ],
    id_user:[
      {type: Schema.Types.ObjectId, ref: 'tblUser'}
    ],
    id_Tujuan:[
      {type: Schema.Types.ObjectId, ref: 'tblAlamatTujuan'}
    ]
});

var TblPesanan =  module.exports = mongoose.model('TblPesanan', tblPesananSchema);

// get TblPesanans
module.exports.getTblPesanans = function(callback, limit){
	TblPesanan.find(callback).limit(limit);
}