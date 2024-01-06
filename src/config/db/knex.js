require('dotenv').config();

const knexDeploy = require('knex')({
    client: process.env.PG_CLIENT,
    connection: process.env.DB_URI,
    ssl: { rejectUnauthorized: false }
});
const knexLocal = require('knex')({
    client: process.env.PG_CLIENT,
    connection: {
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        database: process.env.PG_DATABASE,
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD
    }

})
module.exports = { knexLocal, knexDeploy };
