CREATE DATABASE soal_test2;

USE soal_test2

CREATE TABLE tblUSer (
    id_user int NOT NULL,
    nama varchar(25),
    alamat varchar(100),
	nomorHP varchar(20),
    PRIMARY KEY (id_user)
);

CREATE TABLE tblSupir (
    id_supir int NOT NULL,
    nama varchar(25),
    alamat varchar(100),
	nomorHP varchar(20),
    PRIMARY KEY (id_supir)
);

CREATE TABLE tblAlamatJemput (
    id_alamatJemput int NOT NULL,
    alamatLengkap varchar(100),
    PRIMARY KEY (id_alamatJemput)
);

CREATE TABLE tblKendaraan (
    id_kendaraan int NOT NULL,
    tipeKendaraan varchar(25),
    imageSource varchar(100),
	beban varchar(20),
	order_urutan int,
    PRIMARY KEY (id_kendaraan),
    id_supir int FOREIGN KEY REFERENCES tblSupir(id_supir)
);

CREATE TABLE tblAlamatTujuan (
    id_alamatTujuan int NOT NULL,
    alamatLengkap varchar(100),
	jarak int,
	prioritas varchar(20),
    PRIMARY KEY (id_alamatTujuan),
    id_alamatJemput int FOREIGN KEY REFERENCES tblAlamatJemput(id_alamatJemput)
);

CREATE TABLE tblPesanan (
    id_pesanan int NOT NULL,
    deskripsiLengkap varchar(100),
	jumlahPesanan int,
    PRIMARY KEY (id_pesanan),
    id_kendaraan int FOREIGN KEY REFERENCES tblKendaraan(id_kendaraan),
	id_user int FOREIGN KEY REFERENCES tblUser(id_user),
	id_alamatTujuan int FOREIGN KEY REFERENCES tblAlamatTujuan(id_alamatTujuan)
);

CREATE TABLE tblAdditionalService (
    id_add int NOT NULL,
    deskripsiLayanan varchar(100),
	totalHarga int,
    PRIMARY KEY (id_add),
    id_pesanan int FOREIGN KEY REFERENCES tblPesanan(id_pesanan)
);