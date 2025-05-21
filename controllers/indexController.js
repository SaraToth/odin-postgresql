const { body, validationResult } = require("express-validator");
const db = require("../db/queries");
const asyncHandler = require("express-async-handler");

const validateUser = [
    body("username").trim()
        .isAlphanumeric().withMessage("username must contain only letters and numbers")
        .isLength({ min: 8, max: 15 }).withMessage("username must be between 8 and 15 characters long"),
]

const userListGet = asyncHandler(async (req, res) => {
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.render("index", { title: "Home", usernames });
})

const userFormGet = asyncHandler(async (req, res) => {
    res.render("newUser", { title: "Create a New User" });
})


const userFormPost = asyncHandler(async (req, res) => {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
})

module.exports = {
    userListGet,
    userFormGet,
    userFormPost
};