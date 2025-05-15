const db = require('../config/db');

const getUser = async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
}
const getAllUsers = async () => {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
};

const getUserById = async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
};

const createUser = async (name, email) => {
    const [result] = await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    return { id: result.insertId, name, email };
};

const updateUser = async (id, name, email) => {
    await db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
};

const deleteUser = async (id) => {
    await db.query('DELETE FROM users WHERE id = ?', [id]);
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
