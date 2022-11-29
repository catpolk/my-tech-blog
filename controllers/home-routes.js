const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// GET all posts for homepage
router.get('/', (req, res) => {
      Post.findAll({
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
  Post.findOne({
    where: {
      id: params.id
    },
    attributes: [
      'id',
      'content',
      'title',
      'created_at'
    ],
    include: [
            {
              model: Comment,
              attributes: [
                'id',
                'comment_text',
                'user_id',
                'post_id',
                'created_at' 
              ],
              include: {
                model: User, 
                attributes: ['username']
              }
            },
            {
              model: User,
              attributes: ['username']
            }
          ]
        }).then(dbPostData => {
          if (!dbPostData) {
            res.status(404).json({ message: 'Post not found' });
            return;
          }
          const post = dbPostData.get({ plain: true });
          console.log(post);
          res.render('one-post', { post, loggedIn: req.session.loggedIn });
        }).catch (err => {
          console.log(err);
          res.status(500).json(err);
        });
  });






  module.exports = router;