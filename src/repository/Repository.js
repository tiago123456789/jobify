const { db } = require("../config/Database");

class Repository {

    constructor(table) {
        this._table = table;
    }

    update(id, datasModified) {
        return db(this._table).where("id", "=", id).update(datasModified);
    }

    create(newRegister) {
        return db(this._table).insert(newRegister);
    }

    findAll() {
        return db.select().from(this._table);
    }

    findById(id) {
        return db(this._table).where({ id: id }).select();
    }

    remove(id) {
        return db(this._table).where({ id: id }).del();
    }

    getDb() {
        return db(this._table);
    }
}

module.exports = Repository;