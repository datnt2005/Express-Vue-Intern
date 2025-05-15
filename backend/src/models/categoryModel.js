const db = require('../config/db');

const getCategory = async (id) => {
    const [rows] = await db.query('SELECT * FROM categories  WHERE id = ?', [id]);
    return rows[0];
}
const getAllCategories = async () => {
    const [rows] = await db.query('SELECT * FROM categories');
    return rows;
};

const getCategoryById = async (id) => {
    const [rows] = await db.query('SELECT * FROM categories WHERE id = ?', [id]);
    return rows[0];
};

const createCategory = async (name, description) => {
    const [result] = await db.query('INSERT INTO categories (name, description) VALUES (?, ?)', [name, description]);
    return { id: result.insertId, name, description };
};

const updateCategory = async (id, name, description) => {
    await db.query('UPDATE categories SET name = ?, description = ? WHERE id = ?', [name, description, id]);
}

const deleteCategory = async (id) => {
    await db.query('DELETE FROM categories WHERE id = ?', [id]);
};

module.exports = {
    getCategory,
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
};
