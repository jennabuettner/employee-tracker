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