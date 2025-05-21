const { Pool } = require("pg");

//Comes from environmental variables
module.exports = new Pool({
    host: "",
    user: "",
    database: "",
    password: "",
    port: "",
});