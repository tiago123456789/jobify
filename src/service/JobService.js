const JobRepository = require("../repository/JobRepository");
const NotFoundException = require("../exception/NotFoundException");

class JobService {

    constructor() {
        this._respository = new JobRepository();
    }
    
    create($newRegister) {
        this._respository.create();
    }    

    findAll() {
        return this._respository.findAll()
    }

    findById(id) {
        const job = this._respository.findById(id);
        if (!job) {
            throw new NotFoundException("Job not found!");
        }
        return job;
    }
}

module.exports = JobService;