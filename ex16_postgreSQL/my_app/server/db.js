// interacting with postgress database through pg package
const Pool = require("pg").Pool
// using dotenv package to handle the env variables:
require("dotenv").config()


//  the pool object is a pool of database connections,
//  and we can use its query method to perform database queries.
// This code is trying to create a connection to a PostgreSQL database. It uses a library
// called "Pool" to manage and optimize these connections. The code reads some environment
// variables (USERNAME, PASS, HOST) to get the necessary credentials for connecting to the database.
// It then specifies the default port number for PostgreSQL, which is 5432, and sets the database name
// to 'todoapp'. The purpose of this connection is to interact with the PostgreSQL database named
// 'todoapp' using the provided credentials and configuration.

const pool = new Pool({
    user: process.env.USERNAME, // interesting, how we handle the credentials
    password: process.env.PASS,
    host: 'localhost',
    port: 5432,
    database: 'todoapp'
})

module.exports = pool