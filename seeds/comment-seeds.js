const { Comment } = require('../models');

const commentData = [
{
    user_id: 1,
    post_id: 1,
    comment_text: 'This is my comment'
},
{
    user_id: 2,
    post_id: 2,
    comment_text: 'What a great post'
},
{
    user_id: 3,
    post_id: 3,
    comment_text: 'Great post'
}
];

//Create and insert multiple instances in bulk
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;