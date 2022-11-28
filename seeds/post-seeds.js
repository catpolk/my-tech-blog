const { Post } = require('../models');

const postData = [
    {
        user_id: 1,
        title: 'First Post',
        content: 'My post is about MVC and its usability'
    },
    {
        user_id: 2,
        title: 'Second Post',
        content: 'I am writing about tech news'
    },
    {
        user_id: 3,
        title: 'Third Post',
        content: 'Coding is becoming more popular'
    }
];

//Create and insert multiple instances in bulk
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;