require("./config/LoaderVariablesEnvironment");
const bcrypt = require("bcryptjs");
const db = require("./config/Database")["db"];
const saltRounds = 10;
const passwordTextPlain = "123456";

bcrypt.hash(passwordTextPlain, saltRounds).then(async function(hash) {
    const password = hash;
    await db("users").insert({
        name: "Admin",
        email: "admin@gmail.com",
        password: password
    });
    console.log("Create user with: name(Admin), email(admin@gmail.com), password(123456)");
    process.exit();
});

