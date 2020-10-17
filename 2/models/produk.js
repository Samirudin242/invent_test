'use strict';
module.exports = (sequelize, DataTypes) => {
  const {Model} = sequelize.Sequelize;
  class Produk extends Model {}

  Produk.init({
    nama_barang: {
      type: DataTypes.STRING,
      notNull: true,
      len: [1,200]
    },
    kode_barang:{
      type: DataTypes.STRING,
      notNull: true,
      len: [1,50]
    },
    jumlah_barang: {
      type: DataTypes.STRING,
      notNull: true,
      len: [1,10]
    },
    tanggal: {
      type: DataTypes.DATE,
      notNull: true,
    },
  }, {sequelize});
  Produk.associate = function(models) {
    // associations can be defined here
  };
  return Produk;
};