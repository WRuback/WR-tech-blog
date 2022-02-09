const router = require('express').Router();

// Pulls in the API Routes.
const commentRoutes = require('./comment-routes.js');
const postRoutes = require('./post-routes.js');
const userRoutes = require('./user-routes.js');

// Add the routes to the output router.
router.use("/comment",commentRoutes);
router.use("/post",postRoutes);
router.use("/user",userRoutes);

module.exports = router;