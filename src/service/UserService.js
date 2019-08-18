const bcrypt = require("bcryptjs");
const UserRepository = require("../repository/UserRepository");
const SecurityException = require("../exception/SecurityException");

class UserService {

    constructor() {
        this._respository = new UserRepository();
    }

    async authenticate(credentials) {
        if (!credentials["email"] || !credentials["password"]) {
            throw new SecurityException("Datas invalids.");
        }

        let user = await this._respository.findByEmail(credentials["email"]);
        user = user[0];
        const isPasswordValid = await bcrypt.compare(credentials["password"], user["password"]);
        if (!isPasswordValid) {
            throw new SecurityException("Datas invalids.");
        }

        return {
            "email": user.email,
            "name": user.name
        };
    }

}

module.exports = UserService;