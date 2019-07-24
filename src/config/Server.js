const express = require("express");
const bodyParser = require("body-parser");
require("./LoaderVariablesEnvironment");
const { db } = require("./Database");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/", (request, response) => {
    response.render("job/index.ejs");
});

app.get("/jobs/:id", (request, response) => {
    response.render("job/detail.ejs");
});

module.exports = app;
