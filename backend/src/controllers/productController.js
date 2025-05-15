const Product = require('../models/productModel');
const Category = require('../models/categoryModel');
const Minio = require('minio');
const minioClient = new Minio.Client({
  endPoint: process.env.MINIO_ENDPOINT || 'localhost',
  port: parseInt(process.env.MINIO_PORT) || 9000,
  useSSL: false,
  accessKey: process.env.MINIO_ACCESS_KEY,
  secretKey: process.env.MINIO_SECRET_KEY,
});

const BUCKET_NAME = 'product-images';

exports.getProducts = async (req, res) => {
    const products = await Product.getAllProducts();
    res.render('products/list', { products, title: 'Danh sách san pham' });
};

exports.getProduct = async (req, res) => {
    const product = await Product.getProductById(req.params.id);
    if (product) res.render('products/detail', { product, title: 'Chi tiết san pham' });
    else res.status(404).json({ message: 'Không tìm thấy người dùng' });
};

exports.showCreateProductForm = async(req, res) => {
    const categories = await Category.getAllCategories();
    if (categories) res.render('products/create', { categories, title: 'Thêm san pham' });
    else res.status(404).json({ message: 'Không tìm thấy danh mục' });
};
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, quantity, category_id } = req.body;

    let imageUrl = '';
    if (req.file) {
      const fileName = Date.now() + '_' + req.file.originalname;
      await minioClient.putObject(BUCKET_NAME, fileName, req.file.buffer, {
        'Content-Type': req.file.mimetype,
        'x-amz-acl': 'public-read',
      });
      imageUrl = `http://localhost:${process.env.MINIO_PORT}/${BUCKET_NAME}/${fileName}`;
    }

    await Product.createProduct(name, description, price, quantity, imageUrl, category_id);
    res.redirect('/products');
  } catch (error) {
    console.error('Create product error:', error);
    res.status(500).send('Internal Server Error');
  }
};
exports.showEditForm = async (req, res) => {
    const categories = await Category.getAllCategories();
    const product = await Product.getProductById(req.params.id);
    if (product) res.render('products/edit', { product, categories, title: 'Chỉnh sửa san pham' });
    else res.status(404).render('products/404', { title: 'Không tìm thấy san pham' });
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, description, price, quantity, image, category_id } = req.body;

    let imageUrl = image; // dùng lại ảnh cũ nếu không có ảnh mới
    if (req.file) {
      const fileName = Date.now() + '_' + req.file.originalname;
      await minioClient.putObject(BUCKET_NAME, fileName, req.file.buffer, {
        'Content-Type': req.file.mimetype,
      });
      imageUrl = `http://localhost:${process.env.MINIO_PORT}/${BUCKET_NAME}/${fileName}`;
    }

    await Product.updateProduct(req.params.id, name, description, price, quantity, imageUrl, category_id);
    res.redirect('/products');
  } catch (error) {
    console.error('Update product error:', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.deleteProduct = async (req, res) => {
    await Product.deleteProduct(req.params.id);
    res.redirect('/products');
};
