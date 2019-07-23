const Repository = require("./Repository");

class JobRepository extends Repository {

    constructor() {
        super("jobs");
    }
}

module.exports = JobRepository;