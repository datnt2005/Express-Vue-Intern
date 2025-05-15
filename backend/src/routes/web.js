const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/userController');

router.get('/', HomeController.index);
router.get('/about', HomeController.about);

module.exports = router;
