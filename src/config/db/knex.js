require('dotenv').config();

const knex = require('knex')({
    client: process.env.PG_CLIENT,
    connection: process.env.DB_URI,
    ssl: { rejectUnauthorized: false }
});

module.exports = knex;
