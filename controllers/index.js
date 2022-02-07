const router = require('express').Router();

//Create the api routes and require them to use them within the controllers

const homeRoutes = require('./home-routes.js');

router.use(homeRoutes);

module.exports = router;
