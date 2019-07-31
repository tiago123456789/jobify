const { check, validationResult } = require('express-validator');
const DataInvalidException = require("../exception/DataInvalidException");

class Controller {

    constructor() {
        this.checkFields = this.checkFields.bind(this);
        this.isValid = this.isValid.bind(this);
    }

    checkFields() {
        return [];
    }

    isValid(request) {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            const messages = errors.array().map(error => error.msg);
            throw new DataInvalidException(messages);
        }
    }
}

module.exports = Controller;