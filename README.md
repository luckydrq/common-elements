# common-elements
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Find common elements in multiple arrays

## Example
```javascript
var getCommon = require('common-elements');
var commonArr = getCommon([1, 2, 3], [2, 3], [2, 3, 4]);
console.log(commonArr); // [2, 3]
```

## Lisence
MIT

[npm-image]: https://img.shields.io/npm/v/common-elements.svg?style=flat-square
[npm-url]: https://npmjs.org/package/common-elements
[travis-image]: https://img.shields.io/travis/luckydrq/common-elements/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/luckydrq/common-elements
[coveralls-image]: https://img.shields.io/coveralls/luckydrq/common-elements/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/luckydrq/common-elements?branch=master
