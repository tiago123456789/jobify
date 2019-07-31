const JobService = require("../service/JobService");

class JobController {

    constructor() {
        this._service = new JobService();
        this.index = this.index.bind(this);
        this.newJob = this.newJob.bind(this);
    }

    async index(request, response) {
        try {
            const jobs = await this._service.findAll();
            response.render("job/index.ejs", { jobs });
        } catch(e) {
            console.log(e);
        }
    }

    async newJob(request, response) {
        try {
            response.render("job/new.ejs");
        } catch(e) {
            console.log(e);
        }
    }


}

module.exports = JobController;