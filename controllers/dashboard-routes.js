const router = require('express').Router();
const Post = require('../models/Post.js');
const User = require('../models/User');
const withAuth = require('../utils/auth.js');
//Require the correct files from the models and authorizations

router.get('/', withAuth, async (req, res) => {
  //Create the correct asychronous get route for this function
  const postData = await Post.findAll({
    where: {
      user_id: req.session.user_id
    }
  });
  const userData = await User.findByPk(req.session.user_id);
  const posts = postData.map(Element => Element.get({ plain: true }));
  const user = userData.get({ plain: true});
  console.log(posts);
  res.render("user-landing", { posts, user });
});

router.get('/new', withAuth, (req, res) => {
  // Create the correct get route
  res.render("new-post");
});

router.get('/edit/:id', withAuth, async (req, res) => {
  // Create the correct get route functionality using an asychronous function
  const postData = await Post.findByPk(req.params.id);
  const post = postData.get({ plain: true });
  res.render("edit-post", post);
});

module.exports = router;
