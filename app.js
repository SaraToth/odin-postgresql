const express = require("express");
const app = express();
const path = require("node:path");
const { body, validationResult } = require("express-validator");
const indexRouter = require("./routes/indexRouter");

// app.use("views", path.join(__dirname, "views"));
// app.use("view engine", "ejs");
// app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {

});