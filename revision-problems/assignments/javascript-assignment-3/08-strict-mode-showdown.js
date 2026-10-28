"use strict";

const sloppyDemo = Function("a", "a", "total = 10; return total;");
console.log(`Without strict mode: duplicate parameters are accepted; total=${sloppyDemo(5, 10)}.`);
console.log(`Sloppy assignment created globalThis.total: ${globalThis.total}`);
delete globalThis.total;

try {
  Function('"use strict"; return function(a, a) { return a; };');
} catch (error) {
  console.log(`With strict mode, duplicate parameters: ${error.name} - ${error.message}`);
}

const strictAssignmentDemo = Function('"use strict"; return function(a, b) { total = 10; };')();
try {
  strictAssignmentDemo(5, 10);
} catch (error) {
  console.log(`With strict mode, undeclared assignment: ${error.name} - ${error.message}`);
}

try {
  Function('"use strict"; return function() { const total = 10; delete total; };');
} catch (error) {
  console.log(`With strict mode, deleting a local identifier: ${error.name} - ${error.message}`);
}

function correctedDemo(firstValue, secondValue) {
  const total = firstValue + secondValue;
  return total;
}
console.log(`Correct ES6 version total: ${correctedDemo(5, 10)}`);
