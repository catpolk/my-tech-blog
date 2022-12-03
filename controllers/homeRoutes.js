const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try{
    const dbPostData = await Post.findAll({
      include: [User]
    })
    //   attributes:[
    //     'title',
    //   ],
    //   order:[
    //     ['created_at']
    //   ],
    // });

    const posts = dbPostData.map((post) => 
    post.get({ plain: true })
    );
console.log(posts);
      res.render('homepage', {
        posts, 
      });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  };
});

//login and signup

// display a post with a comment form 


    











  module.exports = router;