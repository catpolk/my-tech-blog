const router = require('express').Router();
const { User, Task, Message, Gallery, Painting } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

// GET all posts for homepage
router.get('/', async (req, res) => {
    try {
      const dbPostData = await Post.findAll({});
  
      const posts = dbPostData.map((post) =>
        post.get({ plain: true })
      );
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  //end point to planning
router.get('/dashboard', async (req, res) => {
    try {
      const messageData = await Message.findAll();
      console.log('yo')
      console.log(messageData)
      const messages = messageData.map((message) => message.get({ plain: true }));
      console.log(messages)
      res.render('planning', {
        messages,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });



  // Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

  module.exports = router;