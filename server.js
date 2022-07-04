const express = require("express");
const inquirer = require("./config/inquirer");
const sql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const dbConnection = sql.createConnection(
  {
    host: "localhost",
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  },
  console.log("Connection to database has been established.")
);

module.exports = dbConnection;