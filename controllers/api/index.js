const router = require('express').Router();

//Require the correct files into the api folder
const commentRoutes = require('./comment-routes.js');
const postRoutes = require('./post-routes.js');
const userRoutes = require('./user-routes.js');
//Create the router.use functionality for each required file

router.use("/comment",commentRoutes);
router.use("/post",postRoutes);
router.use("/user",userRoutes);

module.exports = router;