const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    //automatically synchronize all models
    await sequelize.sync({ forse: true });
    await seedUsers();
    await seedComments();
    await seedPosts();
    //end the process without any kind of failure
    process.exit(0);    
}
