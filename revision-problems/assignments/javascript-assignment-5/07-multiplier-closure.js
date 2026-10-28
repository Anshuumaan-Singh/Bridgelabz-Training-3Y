"use strict";

function makeMultiplier(multiplier) {
  return function multiply(number) {
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);
console.log(`triple(5) = ${triple(5)}`);
console.log(`triple(8) = ${triple(8)}`);
console.log("Closure note: makeMultiplier has finished, but multiply still remembers the multiplier value from its lexical scope.");
