const UserRepository = require("../repository/UserRepository");
const NotFoundException = require("../exception/NotFoundException");

class UserService {

    constructor() {
        this._respository = new UserRepository();
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
        const user = await this._respository.findById(id);
        const isNull = user.length == 0;
        if (isNull) {
            throw new NotFoundException("Job not found!");
        }
        return user[0];
    }

    async remove(id) {
        await this.findById(id);
        return this._respository.remove(id);
    }
}

module.exports = UserService;