const { check } = require('express-validator');
const UserService = require("../service/UserService");
const Controller = require("./Controller");

class AuthController extends Controller {

    constructor() {
        super();
        this._service = new UserService();
        this.pageAuth = this.pageAuth.bind(this);
        this.authenticate = this.authenticate.bind(this);
    }

    pageAuth(request, response) {
        if (request.session.user) {
            response.redirect("/jobs");
        } else {
            response.render("auth/login.ejs");
        }
    }

    async authenticate(request, response) {
        try {
            const credentials = request.body;
            const user = await this._service.authenticate(credentials);
            request.session.user = user;
            response.redirect("/jobs");
        } catch(e) {
            response.redirect("/auth");
        }
    }
}

module.exports = AuthController;