const JobController  = require("../controller/JobController");
const AuthController = require("../controller/AuthController");
const HomeController = require("../controller/HomeController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const authController = new AuthController();
const jobController = new JobController();
const homeController= new HomeController();

module.exports = (app) => {

    app.get("/jobs", AuthMiddleware.isAuthenticated, jobController.index);
    app.get("/jobs/new", AuthMiddleware.isAuthenticated, jobController.newJob);
    app.get("/jobs/:id/delete", AuthMiddleware.isAuthenticated, jobController.remove);
    app.get("/jobs/:id/edit", AuthMiddleware.isAuthenticated, jobController.edit);
    app.post("/jobs/:id/edit", AuthMiddleware.isAuthenticated, jobController.update);    
    app.post("/jobs/new", AuthMiddleware.isAuthenticated, jobController.checkFields(), 
    jobController.create);

    app.get("/auth", authController.pageAuth);
    app.post("/auth", authController.authenticate);
    app.get("/auth/logout", (request, response) => {
        request.session.user = null;
        response.redirect("/auth");
    });

    app.get("/home", homeController.index);
    app.use("*", (request, response) => response.redirect("/auth"));
}