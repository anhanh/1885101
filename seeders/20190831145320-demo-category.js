'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{ name: "Men", imagepath: '/img/home/hero-slide1.png' },
    { name: "Women", imagepath: '/img/home/hero-slide2.png' },
    { name: "Accessories", imagepath: '/img/home/hero-slide3.png' },
    { name: "Footwear", imagepath: '/img/home/hero-slide1.png' },
    { name: "Bay item", imagepath: '/img/home/hero-slide2.png' },
    { name: "Electronics", imagepath: '/img/home/hero-slide3.png' },
    { name: "Bay item", imagepath: '/img/home/hero-slide1.png' }]
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item
    })
    return queryInterface.bulkInsert('Categories', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
