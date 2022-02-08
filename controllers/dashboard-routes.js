const router = require('express').Router();
const Post = require('../models/Post.js');
const withAuth = require('../utils/auth.js');
//Require the correct files from the models and authorizations

router.get('/', withAuth, async (req, res) => {
  //Create the correct asychronous get route for this function
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id
      }
    });
    const posts = postData.map(Element => Element.get({ plain: true}));
    console.log(posts);
    res.render("user-landing", {posts});
});

router.get('/new', withAuth, (req, res) => {
  // Create the correct get route
  const dummy = {test: 24, layout: 'dashboard'}
  res.render("new-post", dummy);
});

router.get('/edit/:id', withAuth, async (req, res) => {
  // Create the correct get route functionality using an asychronous function
  const dummy = {test: 24, layout: 'dashboard'}
  res.render("edit-post", dummy);
});

module.exports = router;
