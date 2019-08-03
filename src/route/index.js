const JobController  = require("../controller/JobController");
const jobController = new JobController();

module.exports = (app) => {

    app.get("/jobs", jobController.index);
    app.get("/jobs/new", jobController.newJob);
    app.get("/jobs/:id/delete", jobController.remove);
    app.get("/jobs/:id/edit", jobController.edit);
    app.post("/jobs/:id/edit", jobController.update);    
    app.post("/jobs/new", jobController.checkFields(), jobController.create);

    app.get("/auth", (request, response) => response.render("auth/login.ejs"));
    
}