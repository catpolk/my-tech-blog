const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
    try {
      const dbPostData = await Post.findAll({
        include: [
          { 
            model: Post, 
            attributes: ['title', 'created_at'],
        //     include: { 
        //       model: User, 
        //       attributes: ['username'] 
        //     }
        // },
        // { 
        //   model: User,
        //   attributes: ['username']
        // }
      }]
});
  const posts = dbPostData.map((post) => 
  post.get({ plain: true })
  );

  res.render('homepage', {
     posts, loggedIn: req.session.loggedIn 
  });
} catch(err) {
  console.log(err);
  res.status(500).json(err)
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
// Signup route 
  router.get('/sighup', (req, res) => {
    res.render('signup');
  });

//WHEN I click on an existing blog post
//THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
router.get('/post/:id', (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Post, 
          attributes: [
            'id',
            'content',
            'title',
            'created_at'
          ]
        }
      ]
    })
  }
})



  module.exports = router;