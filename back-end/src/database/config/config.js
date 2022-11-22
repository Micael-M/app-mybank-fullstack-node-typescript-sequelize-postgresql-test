require('dotenv').config();

const config = {
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: 'mybankcrud',
  host: process.env.PG_HOST,
  dialect: 'postgres',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
