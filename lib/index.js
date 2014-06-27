/**
 * Mongoose validator for Elefrant Framework
 *
 * @package elefrant-mongoose-validator
 * @author Marcos Sanz <marcos.sanz@13genius.com>
 */

'use strict';

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

    // Check if is value is more than min
    validator.extend('isMin', function (value, min) {
        return value >= min;
    }, 'Value less than minimum');

    // Check if is value is less than max
    validator.extend('isMax', function (value, max) {
        return value <= max;
    }, 'Value more than maximum');

    // Return validator functions
    return validator;
};
