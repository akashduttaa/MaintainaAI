const router = require('express').Router();
const auth = require('../middleware/auth');
const { createSubscription, listSubscriptions, dashboard, insights, predict } = require('../controllers/subscriptionController');

router.use(auth);
router.get('/', listSubscriptions);
router.post('/', createSubscription);
router.get('/dashboard', dashboard);
router.get('/insights', insights);
router.get('/predict', predict);

module.exports = router;
