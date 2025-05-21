const { Pool } = require("pg");
require("dotenv").config();

//Comes from environmental variables
module.exports = new Pool({
    host: process.env.HOST,
    user: process.env.ROLE_NAME,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
});