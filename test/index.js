'use strict';

var assert = require('assert');
var getCommon = require('..');

describe('common elements', function() {
  it('should only accept array parameters', function() {
    getCommon([1], [2, 3]);

    var shouldThrow = false;
    try {
      getCommon({});
    } catch(e) {
      shouldThrow = true;
    }
    assert.equal(shouldThrow, true);
  });

  it('should have correct results', function() {
    var result1 = getCommon([1]);
    var result2 = getCommon([1, 2], [2, 3], [3, 4]);
    var result3 = getCommon([1, 2, 3], [2, 3], [3, 4]);
    assert.equal(result1.length, 0);
    assert.equal(result2.length, 0);
    assert.equal(result3.length, 1);
    assert.equal(result3[0], 3);
  });
});
