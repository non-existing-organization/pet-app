/**
 * Database module for creating a pool of PostgreSQL connections.
 * Utilizes environment variables for database configuration.
 * 
 * @module db
 * @requires pg
 */

const { Pool } = require('pg');
require('dotenv').config();

/**
 * A pool of PostgreSQL connections.
 * @type {Pool}
 */
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
});

module.exports = pool;
