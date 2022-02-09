const router = require('express').Router();

// Import the routes.
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const apiRoutes = require('./api/index.js');

// Link to the router.
router.use(homeRoutes);
router.use('/dashboard/', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;
