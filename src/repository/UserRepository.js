const Repository = require("./Repository");

class UserRepository extends Repository {

    constructor() {
        super("users");
    }

    findByEmail(email) {
        return this.getDb().where("email", email).select();
    }
}

module.exports = UserRepository;