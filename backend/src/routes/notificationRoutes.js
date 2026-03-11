const router = require('express').Router();
const auth = require('../middleware/auth');
const { renewalTimeline } = require('../controllers/notificationController');

router.get('/timeline', auth, renewalTimeline);

module.exports = router;
