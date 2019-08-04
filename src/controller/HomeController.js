const Controller = require("./Controller");
const JobService = require("../service/JobService");

class HomeController extends Controller {

    constructor() {
        super();
        this._service = new JobService();
        this.index = this.index.bind(this);
    }

    async index(request, response) {
        const jobs = await this._service.findAll();
        response.render("home.ejs", { jobs });
    }
}

module.exports = HomeController;