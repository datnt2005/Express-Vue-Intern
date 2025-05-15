const Category = require('../models/categoryModel');

exports.getCategories = async (req, res) => {
    const categories = await Category.getAllCategories();
    res.render('categories/list', { categories, title: 'Danh sách danh mục' });
}

exports.getCategory = async (req, res) => {
    const category = await Category.getCategoryById(req.params.id);
    if (category) res.render('categories/detail', { category, title: 'Chi tiết danh mục' });
    else res.status(404).json({ message: 'Không tìm thấy danh mục' });
}

exports.showCreateCategoryForm = (req, res) => {
    res.render('categories/create', { title: 'Thêm danh mục' });
};
exports.createCategory = async (req, res) => {
    const { name, description } = req.body;
    await Category.createCategory(name, description);
    res.redirect('/categories');
};
exports.showEditForm = async (req, res) => {
    const category = await Category.getCategoryById(req.params.id);
    if (category) res.render('categories/edit', { category, title: 'Chỉnh sửa danh mục' });
    else res.status(404).render('categories/404', { title: 'Không tìm thấy danh mục' });
};
exports.updateCategory = async (req, res) => {
    const { name, description } = req.body;
    await Category.updateCategory(req.params.id, name, description);
    res.redirect('/categories');
};
exports.deleteCategory = async (req, res) => {
    await Category.deleteCategory(req.params.id);
    res.redirect('/categories');
}