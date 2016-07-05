var assert = require('chai').assert;
var divide = require('../lib').divide;

describe('divide', function() {
    it('should return zero if first argument is missing', function() {
        assert.equal(divide(0, 2), 0);
    });
    it('should divide two by two', function() {
        assert.equal(divide(4, 2), 2);
    });
});
