exports.userListGet = (req, res) => {
    res.render("index", { title: "Home" });
}

exports.userFormGet = (req, res) => {
    res.render("newUser", { title: "Create a New User" });
}

exports.userFormPost = (req, res) => {
    console.log("username to be saved: ");
}