const router = require('express').Router();
const { Post, Comment, User } = require('../models');

// Get all posts to display on webpage.
router.get('/', async (req, res) => {
    const postData = await Post.findAll({
        include: [{model: User}]
    });
    const posts = postData.map(element => {
        return element.get({ plain: true });
    });
    res.render("all-posts", {posts});
});

// Get single post to display, along with comments.
router.get('/post/:id', async (req, res) => {
    const postData = await Post.findByPk(req.params.id,{
        // Grabs the users, the comments, and the user the comment is linked too.
        include: [{model: User}, {model: Comment, include: {model: User}}]
    });
    const post =  postData.get({ plain: true });
    res.render("single-post", {post, user_id: req.session.user_id});
});

router.get('/login', (req, res) => {
    res.render("login");
});

router.get('/signup', (req, res) => {
    res.render("signup");
});

module.exports = router;
