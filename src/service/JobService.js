const JobRepository = require("../repository/JobRepository");
const NotFoundException = require("../exception/NotFoundException");

class JobService {

    constructor() {
        this._respository = new JobRepository();
    }

    async update(id, datasModified) {
        await this.findById(id);
        return this._respository.update(id, datasModified);
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
        return job[0];
    }

    async remove(id) {
        await this.findById(id);
        return this._respository.remove(id);
    }
}

module.exports = JobService;