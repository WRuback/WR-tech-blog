const router = require('express').Router();
const { Post, Comment, User } = require('../models');

// get all posts for homepage
router.get('/', async (req, res) => {
    const postData = Post.findAll({
        include: [{model: User}]
    });
    const posts = postData.map(element => {
        element.get({ plain: true });
    });
    console.log(posts);
    res.render("all-posts", posts);
});

// get single post
router.get('/post/:id', async (req, res) => {
    const dummy = {test: 24}
    res.render("single-post", dummy);
});

router.get('/login', (req, res) => {
    const dummy = {test: 24}
    res.render("login", dummy);
});

router.get('/signup', (req, res) => {
    const dummy = {test: 24}
    res.render("signup", dummy);
});

module.exports = router;
