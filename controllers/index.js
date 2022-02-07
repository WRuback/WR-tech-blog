const router = require('express').Router();

//Create the api routes and require them to use them within the controllers

const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use(homeRoutes);
router.use('/dashboard/', dashboardRoutes);

module.exports = router;
