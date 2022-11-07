const { User } = require('../models');

const userData = [
  {
    username: 'mseaman26',
    password: '????????',
  },
  {
    username: 'zingzangzong',
    password: 'davedave',
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
