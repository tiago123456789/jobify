const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
require("./LoaderVariablesEnvironment");
const { db } = require("./Database");
const routesApp = require("../route");

const app = express();

// Enable session.
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
}));

// Setting middleware than make parse datas to json. 
app.use(bodyParser.urlencoded({ extended: true }));

// Setting directory files statics.
app.use(express.static(__dirname + "/../../public"));

// Setting directory views.
app.set("views", "views");
app.set("view engine", "ejs");

app.use((request, response, next) => {
    if (request.session.user) {
        app.locals.user = request.session.user;
    }

    next();
});

/**
 * @description Set routes application.
 */
routesApp(app);

module.exports = app;
