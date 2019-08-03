const express = require("express");
const bodyParser = require("body-parser");
require("./LoaderVariablesEnvironment");
const { db } = require("./Database");
const routesApp = require("../route");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../../public"));

app.set("views", "views");
app.set("view engine", "ejs");

/**
 * @description Set routes application.
 */
routesApp(app);

module.exports = app;
