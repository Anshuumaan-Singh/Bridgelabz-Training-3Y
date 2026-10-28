"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  "{invalid}",
  '{"user":"Mina","age":"22"}'
];
const cleanUsers = [];
const auditErrors = [];

for (let index = 0; index < rawData.length; index++) {
  const lineNumber = index + 1;
  try {
    debugger;
    const parsedEntry = JSON.parse(rawData[index]);
    if (!Object.prototype.hasOwnProperty.call(parsedEntry, "user")) {
      throw new Error("Missing required key: user");
    }
    if (!Object.prototype.hasOwnProperty.call(parsedEntry, "age")) {
      throw new Error("Missing required key: age");
    }

    const numericAge = Number(parsedEntry.age);
    if (!Number.isFinite(numericAge)) throw new Error("Age must be a valid number");

    const cleanEntry = { ...parsedEntry, age: numericAge };
    cleanUsers.push(cleanEntry);
    console.log(`Line ${lineNumber}: valid record for ${cleanEntry.user}, age ${cleanEntry.age}.`);
  } catch (error) {
    auditErrors.push({ lineNumber, errorType: error.name, message: error.message });
    console.log(`Line ${lineNumber}: ${error.name} - ${error.message}`);
  }
}

const under18Users = cleanUsers.filter((user) => user.age < 18);
console.log(`Valid records: ${cleanUsers.length}; errors: ${auditErrors.length}.`);
console.log(`Clean users: ${JSON.stringify(cleanUsers)}`);
console.log(`Users under 18: ${JSON.stringify(under18Users)}`);
