var assert = require('chai').assert;
var summ = require('../lib').summ;

describe('summ', function() {
    it('should add two and two', function() {
        assert.equal(summ(2, 2), 4);
    });

    it('should return zero, if first argument is zero', function() {
        assert.equal(summ(0, 2), 0);
    });
});
