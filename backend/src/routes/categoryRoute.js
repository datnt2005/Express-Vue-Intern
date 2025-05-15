const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.getCategories);
router.get('/create', categoryController.showCreateCategoryForm);
router.post('/create', categoryController.createCategory);

router.get('/:id', categoryController.getCategory);
router.get('/edit/:id', categoryController.showEditForm);
router.post('/edit/:id', categoryController.updateCategory);
router.post('/delete/:id', categoryController.deleteCategory);

module.exports = router;
