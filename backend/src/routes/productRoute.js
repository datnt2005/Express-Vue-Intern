const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const upload = require('../middlewares/upload');

router.get('/', productController.getProducts);
router.get('/create', productController.showCreateProductForm);
router.post('/create', upload.single('image'), productController.createProduct);

router.get('/:id', productController.getProduct);
router.get('/edit/:id', productController.showEditForm);
router.post('/edit/:id', upload.single('image'), productController.updateProduct);

router.post('/delete/:id', productController.deleteProduct);

module.exports = router;
