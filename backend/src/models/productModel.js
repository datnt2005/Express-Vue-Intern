const db = require('../config/db');

const getProduct = async (id) => {
    const [rows] = await db.query('SELECT * FROM products p JOIN categories c ON p.category_id = c.id  WHERE id = ?', [id]);
    return rows[0];
}

const getAllProducts = async () => {
    const [rows] = await db.query('SELECT p.*, c.name as category FROM products p JOIN categories c ON p.category_id = c.id');
    return rows;
};

const getProductById = async (id) => {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0];
};

const createProduct = async (name, description, price, quantity, image, category_id) => {
    const [result] = await db.query('INSERT INTO products (name, description, price,quantity, image, category_id) VALUES (?, ?, ?, ?, ?, ?)', [name, description, price,quantity, image, category_id]);
    return { id: result.insertId, name, description, price,quantity, image, category_id };
};

const updateProduct = async (id, name, description, price, quantity, image, category_id) => {
    await db.query('UPDATE products SET name = ?, description = ?, price = ?, quantity = ?, image = ?, category_id = ? WHERE id = ?', [name, description, price, quantity, image, category_id, id]);
};

const deleteProduct = async (id) => {
    await db.query('DELETE FROM products WHERE id = ?', [id]);
};

module.exports = {
    getProduct,
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
