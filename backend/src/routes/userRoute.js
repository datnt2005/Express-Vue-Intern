const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.get('/create', userController.showCreateUserForm);
router.post('/create', userController.createUser);

router.get('/:id', userController.getUser);
router.get('/edit/:id', userController.showEditForm);
router.post('/edit/:id', userController.updateUser);

router.post('/delete/:id', userController.deleteUser);

module.exports = router;
