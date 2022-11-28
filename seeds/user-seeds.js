const { User } = require('../models');

const userDate = [
    {
        username: 'Kat',
        password: '12345'
    },
    {
        username: 'Bob',
        password: '12345'
    },
    {
        username: 'Sam',
        password: '12345'
    }
];

//Create and insert multiple instances in bulk
const seedUsers = () => UserbulkCreate(userDate);

module.export = seedUsers; 