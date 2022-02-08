const router = require('express').Router();

//Create the api routes and require them to use them within the controllers

const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const apiRoutes = require('./api/index.js');

router.use(homeRoutes);
router.use('/dashboard/', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;
