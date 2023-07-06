const mysql = require('mysql2/promise');

require('dotenv').config();


const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DATABASE_URL,
    port: process.env.MYSQL_PORT,
});

module.exports = connection;

