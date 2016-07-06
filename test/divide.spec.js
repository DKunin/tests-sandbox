// var assert = require('chai').assert;
import { assert } from 'chai';
import { divide } from '../lib';

describe('divide', function() {
    // Async operations
    // beforeEach(function(done) {
    //     setTimeout(done, 1000);
    // });

    // Pending tests that should be written
    describe('#divide by zero()', function() {
        it('should throw when dividing by zero');
    });

    // or :
    // it.skip('should throw when dividing by zero');
    // or :
    // it('should throw when dividing by zero');
    // if (/* check test environment */) {
    // // make assertions
    // } else {
    //   this.skip();
    // }

    it('should return zero if first argument is missing', function() {
        assert.equal(divide(0, 2), 0, 'additional error message');
    });

    it.skip('should throw if second argument is zero', function() {
        // assert.throws(divide(2, 0), 'Cannot divide by zero');
    });

    it('should divide two by two', function() {
        assert.equal(divide(4, 2), 2);
    });

    it('should take long', function(done) {
        setTimeout(function() {
            assert.equal(divide(5, 2), 2.5);
            done();
        }, 1900);
    });
});
