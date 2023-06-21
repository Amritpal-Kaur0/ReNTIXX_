const router = require('express').Router();
const home =  require('./home-routes');
const apiRoutes = require('./api');

router.use('/', home);

router.use('/api', apiRoutes);

module.exports = router;
