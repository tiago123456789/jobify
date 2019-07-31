const { check } = require('express-validator');
const JobService = require("../service/JobService");
const Controller = require("./Controller");

class JobController extends Controller {

    constructor() {
        super();
        this._service = new JobService();
        this.index = this.index.bind(this);
        this.newJob = this.newJob.bind(this);
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
    }

    async index(request, response) {
        try {
            const jobs = await this._service.findAll();
            response.render("job/index.ejs", { jobs: jobs, errors: null });
        } catch (e) {
            console.log(e);
        }
    }

    async newJob(request, response) {
        try {
            response.render("job/new.ejs", { errors: null });
        } catch (e) {
            console.log(e);
        }
    }

    async create(request, response) {
        try {
            this.isValid(request);
            const newJob = request.body;
            await this._service.create(newJob);
            response.redirect("/jobs");
        } catch (e) {
            response.render("job/new.ejs", { ...this.newJob, errors: [...e.message] });
        }
    }

    async remove(request, response) {
        const id = request.params.id;
        await this._service.remove(id);
        response.redirect("/jobs");
    }

    checkFields() {
        return [
            check("title").isLength({ min: 1 }).withMessage("The field title is required."),
            check("description").isLength({ min: 1 }).withMessage("The field description is required."),
        ]
    }


}

module.exports = JobController;