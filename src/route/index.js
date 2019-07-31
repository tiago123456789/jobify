const JobController  = require("../controller/JobController");
const jobController = new JobController();

module.exports = (app) => {

    app.get("/jobs", jobController.index);
    app.get("/jobs/new", jobController.newJob);
}