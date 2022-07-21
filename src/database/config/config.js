require('dotenv').config();

const environment = process.env.NODE_ENV || 'test';

const suffix = {
  dev: '_dev',
  development: '_dev',
  test: '_test',
};

const options = {
  host: process.env.HOSTNAME || process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database:
    `${process.env.MYSQL_DB_NAME}${suffix[environment] || suffix.test}`,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: process.env.DEBUG !== 'false',
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
};
