const mysql = require('mysql2/promise');
const { dbConfig } = require('../config');

async function executeDb(sql, dataToDbArr) {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    const [result] = await conn.execute(sql, dataToDbArr);
    return result;
  } catch (error) {
    console.log('error in executeDb ===', error);
    throw error;
  } finally {
    conn?.end();
  }
}

function assignGroup(group_id, user_id) {
  const sql = 'INSERT INTO accounts (group_id, user_id) VALUES (?, ?)';
  return executeDb(sql, [group_id, user_id]);
}
function joinGroup(id) {
  const sql =
    'SELECT * FROM accounts LEFT JOIN groups ON accounts.group_id = groups.id WHERE user_id = ?';
  return executeDb(sql, [id]);
}

module.exports = {
  assignGroup,
  joinGroup,
};
