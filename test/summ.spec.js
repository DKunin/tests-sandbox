import { assert } from 'chai';
import { summ } from '../lib';

describe('summ', function() {
    it('should add two and two', function() {
        assert.equal(summ(2, 2), 4);
    });

    it('should return zero, if first argument is zero', function() {
        assert.equal(summ(0, 2), 0);
    });
});
