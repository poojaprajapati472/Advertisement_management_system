'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Addresses', [{
    id:"1",
    address_line1:"pitamber nagar unnao" ,
    address_line2: "krishna pg,sector 62",
    landmark: "near mithas",
    city:"noida",
    state:"up",
    address_type: "alternate",
    user_id:"1" ,
    zip_code: "209305",
    country: "india",
    status: "true",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
    id:"2",
    address_line1:"pitamber nagar unnao" ,
    address_line2: "krishna pg,sector 62",
    landmark: "near mithas",
    city:"noida",
    state:"up",
    address_type: "alternate",
    user_id:"2" ,
    zip_code: "209305",
    country: "india",
    status: "true",
    createdAt: new Date(),
    updatedAt: new Date()
  },
{
  id:"3",
  address_line1:"pune ,near xyz" ,
    address_line2: "gtb nagar delhi",
    landmark: "near gtb gate no 2",
    city:"delhi",
    state:"delhi",
    address_type: "alternate",
    user_id:"3" ,
    zip_code: "110009",
    country: "india",
    status: "true",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
  address_line1:"ontario ,canada" ,
    address_line2: "dirham university of ontario",
    landmark: "near dhram",
    city:"ontario",
    state:"ontario",
    address_type: "alternate",
    user_id:"4" ,
    zip_code: "1123345",
    country: "canada",
    status: "true",
    createdAt: new Date(),
    updatedAt: new Date()
},
{
  id:"4",
  address_line1:"ontario ,canada" ,
    address_line2: "dirham university of ontario",
    landmark: "near dhram",
    city:"ontario",
    state:"ontario",
    address_type: "alternate",
    user_id:"5" ,
    zip_code: "1123345",
    country: "canada",
    status: "true",
    createdAt: new Date(),
    updatedAt: new Date()
}]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};
