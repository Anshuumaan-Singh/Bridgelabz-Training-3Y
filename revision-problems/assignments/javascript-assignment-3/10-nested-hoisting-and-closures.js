"use strict";

function outer() {
  console.log(`Outer count before assignment: ${count}`); // undefined: outer's var is hoisted.
  var count = 5;

  function innerFunction() {
    console.log(`Inner function count before assignment: ${count}`); // undefined
    var count = 10;
    console.log(`Inner function count after assignment: ${count}`); // 10
  }

  innerFunction();
  console.log(`Outer count after inner function: ${count}`); // Still 5.

  const innerArrow = () => {
    debugger;
    console.log(`Inner arrow sees outer count: ${count}`); // 5
  };
  innerArrow();
}

outer();
