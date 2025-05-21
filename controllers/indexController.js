const { body, validationResult } = require("express-validator");

const validateUser = [
    body("username").trim()
        .isAlphanumeric().withMessage("username must contain only letters and numbers")
        .isLength({ min: 8, max: 15 }).withMessage("username must be between 8 and 15 characters long"),
]

exports.userListGet = (req, res) => {
    res.render("index", { title: "Home" });
}

exports.userFormGet = (req, res) => {
    res.render("newUser", { title: "Create a New User" });
}

exports.userFormPost = [
    validateUser,

    (req, res) => {
        // Missing: Some logic to handle errors
        const { username } = req.body;
        console.log(username);
        res.redirect("/");
    }
];