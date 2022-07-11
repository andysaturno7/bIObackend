const path = require('path');

module.exports = {
  development: {
    username: "root",
    password: null,
    database: "texqr_dev",
    host: "localhost",
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite")
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER || "admin",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || "asintel_db",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: process.env.DB_DIALECT || "mysql",
  },
};
