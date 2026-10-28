"use strict";

function outer() {
  console.log(`Outer count before assignment: ${count}`);
  var count = 5;

  function innerFunction() {
    console.log(`Inner function count before assignment: ${count}`);
    var count = 10;
    console.log(`Inner function count after assignment: ${count}`);
  }

  innerFunction();
  console.log(`Outer count after inner function: ${count}`);

  const innerArrow = () => {
    debugger;
    console.log(`Inner arrow sees outer count: ${count}`);
  };
  innerArrow();
}

outer();
