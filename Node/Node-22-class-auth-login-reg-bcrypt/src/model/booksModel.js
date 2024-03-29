const mysql = require('mysql2/promise');
const { dbConfig } = require('../config');

async function getArrayFromDb(sql) {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    const [result] = await conn.execute(sql, []);
    return result;
  } catch (error) {
    console.log('error ===', error);
    throw new Error('error in getArrayFromDb');
  } finally {
    conn?.end();
  }
}

async function getAllBooksDb() {
  const sql = 'SELECT * FROM books';
  return getArrayFromDb(sql);
}

async function authorBookCount() {
  const sql = `
   SELECT authors.name, authors.surname, COUNT(books.id) AS bookCount FROM authors
   LEFT JOIN books
   ON books.author_id = authors.id
   GROUP BY authors.id
  `;
  return getArrayFromDb(sql);
}

async function allBooksWithAuthors() {
  const sql = `
    SELECT books.id, authors.name, authors.surname, books.title, books.year FROM books
    LEFT JOIN authors
    ON books.author_id = authors.id
    `;
  return getArrayFromDb(sql);
}

async function executeDb(sql, dataToDbArr) {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    const [result] = await conn.execute(sql, dataToDbArr);
    return result;
  } catch (error) {
    console.log('error ===', error);
    throw new Error('error in executeDb');
  } finally {
    conn?.end();
  }
}

async function insertBookDb(newBookObj) {
  const { title, year, author_id } = newBookObj;
  // executeDb
  const sql = `
    INSERT INTO books (title, year, author_id) 
    VALUES (?, ?, ?)
    `;
  return executeDb(sql, [title, year, author_id]);
}

module.exports = {
  getAllBooksDb,
  allBooksWithAuthors,
  insertBookDb,
  authorBookCount,
};
