"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumericData = [];
const invalidNumericData = [];

for (let index = 0; index < apiData.length; index++) {
  const originalValue = apiData[index];
  const numericValue = Number(originalValue);
  const booleanValue = Boolean(originalValue);
  const stringValue = String(originalValue);
  const isBlankString = typeof originalValue === "string" && originalValue.trim() === "";
  const isValidNumber = !Number.isNaN(numericValue) && !isBlankString;

  const reportLine = `Item ${index + 1}: original=${stringValue}, number=${numericValue}, boolean=${booleanValue}, string=${JSON.stringify(stringValue)}`;
  if (isValidNumber) {
    validNumericData.push({ originalValue, numericValue, booleanValue, stringValue });
    console.log(`VALID   | ${reportLine}`);
  } else {
    const reason = isBlankString ? "blank string is not accepted as numeric data" : "conversion did not produce a valid number";
    invalidNumericData.push({ originalValue, reason });
    console.log(`INVALID | ${reportLine} | reason=${reason}`);
  }
}

console.log(`Valid numeric values (${validNumericData.length}): ${validNumericData.map((entry) => entry.numericValue).join(", ")}`);
console.log(`Invalid values (${invalidNumericData.length}): ${invalidNumericData.map((entry) => String(entry.originalValue)).join(", ")}`);
