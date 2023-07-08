const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');

router.post('/createParameters', userControllers.createParameters);
router.get('/getParameters', userControllers.getParameters);
router.post('/createBidDetails', userControllers.createBidDetails);
router.put('/updateBidDetails/:id', userControllers.updateBidDetails);
router.get('/getBidDetails/:id', userControllers.getBidDetails);
router.get('/getUnitPriceCIF/:id', userControllers.getUnitPriceCIF);
router.get('/getUnitPriceDuties/:id', userControllers.getUnitPriceDuties);
router.get('/getTotalUnitPrice/:id', userControllers.getTotalUnitPrice);

module.exports = router;