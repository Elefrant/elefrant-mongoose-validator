var test = require('tap').test,
    elefrant_mongoose_validator = require(__dirname + '/../../index.js');

elefrant_mongoose_validator(function (err) {
    test('unit', function (t) {
        t.equal(err, null, 'error object is null');
        t.end();
    });
});
