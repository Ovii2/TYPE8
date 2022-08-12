require('dotenv').config();
const { MongoClient } = require('mongodb');

const dbClient = new MongoClient(process.env.MONGO_DB_STRING);
const PORT = process.env.PORT || 5000;

module.exports = {
  dbClient,
  PORT,
};
