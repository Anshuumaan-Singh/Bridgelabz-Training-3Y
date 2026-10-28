"use strict";

Object.defineProperty(Array.prototype, "myMap", {
  value: function myMap(callback, thisArg) {
    if (this === null || this === undefined) throw new TypeError("myMap called on null or undefined.");
    if (typeof callback !== "function") throw new TypeError("myMap callback must be a function.");

    const source = Object(this);
    const length = source.length >>> 0;
    const result = new Array(length);
    for (let index = 0; index < length; index++) {
      if (index in source) result[index] = callback.call(thisArg, source[index], index, source);
    }
    return result;
  },
  writable: true,
  configurable: true,
  enumerable: false
});

console.log(`[1, 2, 3].myMap(double) = ${JSON.stringify([1, 2, 3].myMap((number) => number * 2))}`);
console.log(`[1, 2, 3].myMap(square) = ${JSON.stringify([1, 2, 3].myMap((number) => number ** 2))}`);
