'use strict';

var assert = require('assert');

module.exports = function() {
  var arrs = Array.prototype.slice.call(arguments);

  // should be Array
  arrs.forEach(function(arr) {
    assert(Array.isArray(arr));
  });

  if (arrs.length <= 1) {
    return [];
  }

  var eleMap = {};
  var pointer = 0;
  var len = arrs.length;
  var commonArr = [];

  while(true) {
    for (var i = 0; i < len; i++) {
      var arr = arrs[i];
      var ele = arr[pointer];
      if (ele == null) {
        return commonArr;
      }
      if (!eleMap.hasOwnProperty(ele)) {
        eleMap[ele] = { count: 1 };
      } else {
        eleMap[ele].count++;
        if (eleMap[ele].count === len) {
          commonArr.push(ele);
        }
      }
    }
    ++pointer;
  }
};
