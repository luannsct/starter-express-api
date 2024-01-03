require('dotenv').config();

const knex = require('knex')({
    client: process.env.PG_CLIENT,
    connection: {
        host: process.env.DB_URI,
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DATABASE,
        ssl: { rejectUnauthorized: false }
    }
});

module.exports = knex;
