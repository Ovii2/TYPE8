const mysql = require('mysql2/promise');
const { dbConfig } = require('../config');

async function executeDb(sql, dataToDBArr = []) {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    const [result] = await conn.execute(sql, dataToDBArr);
    return result;
  } catch (error) {
    console.log('error executeDb', error);
    throw new Error('error executeDb');
  } finally {
    conn?.end();
  }
}

function getAllBooks() {
  const sql = 'SELECT * FROM books';
  return executeDb(sql);
}

function addBook(title, author, year, category) {
  const sql = 'INSERT INTO books (title, author, year, category) VALUES (?, ?, ?, ?)';
  return executeDb(sql, [title, author, year, category]);
}

module.exports = {
  getAllBooks,
  addBook,
};
