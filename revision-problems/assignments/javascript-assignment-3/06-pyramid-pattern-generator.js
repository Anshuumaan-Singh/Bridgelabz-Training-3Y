"use strict";

const commandLineLimit = typeof process !== "undefined" ? process.argv[2] : undefined;
const requestedLimit = commandLineLimit === undefined ? 5 : Number(commandLineLimit);
const rowLimit = Number.isInteger(requestedLimit) && requestedLimit > 0 ? requestedLimit : 5;
if (rowLimit !== requestedLimit) console.log("Please provide a positive whole-number row limit; using the default of 5.");

function printPatternWithLet(limit) {
  console.log(`Pattern using let (rows: ${limit}):`);
  for (let row = 1; row <= limit; row++) {
    let line = "";
    for (let column = 1; column <= row; column++) line += "* ";
    console.log(line.trimEnd());
  }
  console.log("The let loop variable is block-scoped and cannot be read after its loop.");
}

function printPatternWithVar(limit) {
  console.log(`Pattern using var (rows: ${limit}):`);
  for (var row = 1; row <= limit; row++) {
    var line = "";
    for (var column = 1; column <= row; column++) line += "* ";
    console.log(line.trimEnd());
  }
  debugger;
  console.log(`After the var loop, row is ${row} and column is ${column}; var is function-scoped.`);
}

printPatternWithLet(rowLimit);
printPatternWithVar(rowLimit);
console.log("Both patterns look the same; var's loop variables remain available after the loop.");
