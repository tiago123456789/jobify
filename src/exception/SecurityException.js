function SecurityException(message) {
    this.name = "NOT_FOUND";
    this.message = message;
};

SecurityException.prototype = Error.prototype;

module.exports = SecurityException;