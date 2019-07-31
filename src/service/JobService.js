const JobRepository = require("../repository/JobRepository");
const NotFoundException = require("../exception/NotFoundException");

class JobService {

    constructor() {
        this._respository = new JobRepository();
    }
    
    create(newRegister) {
        return this._respository.create(newRegister);
    }    

    findAll() {
        return this._respository.findAll()
    }

    async findById(id) {
        const job = await this._respository.findById(id);
        const isNull = job.length == 0;
        if (isNull) {
            throw new NotFoundException("Job not found!");
        }
        return job;
    }

    async remove(id) {
        await this.findById(id);
        return this._respository.remove(id);
    }
}

module.exports = JobService;