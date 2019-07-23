const { db } = require("../config/Database");

class Repository {

    constructor(table) {
        this._table = table;
    }

    create($newRegister) {
        db(this._table).insert($newRegister);
    }

    findAll() {
        return db.select().from(this._table);
    }

    findById(id) {
        return db(this._table).where({ id }).select();
    }

    getDb() {
        return db;
    }
}

module.exports = Repository;