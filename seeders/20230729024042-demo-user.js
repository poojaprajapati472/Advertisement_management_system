'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Users', [{
        id:"1",
        name:'pooja',
        username:'pooja@',
        emal:'poojantech11@',
        dob:'09/09/1999',
        gender:'female',
        mobile:'9560380440',
        status:'true',
        profile:'xyzzzzz',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
      id:"2",
      name:'siddhi',
        username:'siddhi@',
        emal:'siddhi@@',
        dob:'15/09/1999',
        gender:'female',
        mobile:'7678261851',
        status:'true',
        profile:'Abcccccc',
        createdAt: new Date(),
        updatedAt: new Date()
    },
  {     
        id:"3",
        name:'praveen',
        username:'praveen@',
        emal:'praveen@@',
        dob:'22/05/1997',
        gender:'male',
        mobile:'7988505212',
        status:'true',
        profile:'praveeennnnn',
        createdAt: new Date(),
        updatedAt: new Date()

  },
{      id:"4",
       name:'ruth',
        username:'ruth@',
        emal:'ruth@@',
        dob:'15/09/1998',
        gender:'female',
        mobile:'9560380440',
        status:'true',
        profile:'Abcccccc',
        createdAt: new Date(),
        updatedAt: new Date()
},
{
       id:"5",
       name:'zehan',
        username:'zehan@',
        emal:'zehan@@',
        dob:'15/09/1998',
        gender:'male',
        mobile:'945706567',
        status:'true',
        profile:'kehnfg',
        createdAt: new Date(),
        updatedAt: new Date()
}]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
