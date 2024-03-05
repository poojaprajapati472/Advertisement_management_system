'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categorie", [
      {
        category_name: "Fashion",
        subcategories: "indian ,western,indowestern",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "electronics",
        subcategories: "home appliances,gadgets",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Vehicles",
        subcategories: "Cars, Bikes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "furniture",
        subcategories: "table,chairs,sofa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorie', null, {});
  }
};
