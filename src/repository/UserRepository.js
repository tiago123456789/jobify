const Repository = require("./Repository");

class UserRepository extends Repository {

    constructor() {
        super("users");
    }
}

module.exports = UserRepository;