const bcrypt = require('bcrypt');
const db = require('../config/db');
class User {
  static async findById(id) {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  }

  static async findAll() {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
  }

  static async create(name, email, password) {
    const [result] = await db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
    return { id: result.insertId, name, email };
  }

  static async update(id, name, email, password) {
    await db.query('UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?', [name, email, password, id]);
  }

  static async delete(id) {
    await db.query('DELETE FROM users WHERE id = ?', [id]);
  }

  static async loginUser(email, password) {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email , password]);
    const user = rows[0];

    if (!user) {
      return null;
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role 
    };
  }
}
module.exports = User;
