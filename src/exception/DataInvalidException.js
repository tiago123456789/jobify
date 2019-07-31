function DataInvalidException(message) {
    this.name = "DATA_INVALID";
    this.message = message;
};

DataInvalidException.prototype = Error.prototype;

module.exports = DataInvalidException;