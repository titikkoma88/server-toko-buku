'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      'Categories', 
    [
      {
        name: 'Business & Economics',
        user: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Art & Design',
        user: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Programming',
        user: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Categories', null, {});

  }
};