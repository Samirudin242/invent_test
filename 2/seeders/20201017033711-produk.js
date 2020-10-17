'use strict';
const produks = require('../data/produk.json')
produks.forEach((produk) => {
  produk.createdAt = new Date();
  produk.updatedAt = new Date();
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Produks", produks, {})
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Produks', null, {});
  }
};
