/**
 * Mongoose validator for Elefrant Framework
 *
 * @package elefrant-mongoose-validator
 * @author Marcos Sanz <marcos.sanz@13genius.com>
 */

var validator = require('mongoose-validator');

module.exports = function () {
    // Check if is Boolean
    validator.extend('isBoolean', function () {
        return 'boolean' === typeof this.str;
    }, 'Not a boolean');

    // Check if is type is correct
    validator.extend('isType', function (type) {
        return type === typeof this.str;
    }, 'Not correct type');

    // Return validator functions
    return validator;
};
