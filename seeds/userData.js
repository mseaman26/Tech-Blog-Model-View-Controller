const { User } = require('../models');

const userData = [
  {
    username: 'mseaman26',
    email: 'mseaman26@gmail.com',
    password: '????????',
  },
  {
    username: 'zingzangzong',
    email: "zingzangzong@gmail.com",
    password: 'davedave',
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
