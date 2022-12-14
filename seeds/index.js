const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    //automatically synchronize all models
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPosts();
    await seedComments();
    
    //end the process without any kind of failure
    process.exit(0);    
}
seedAll();
