"use strict";

function showEndMessage() {
  console.log("Welcome to the course!");
}

function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  console.log("Calling the callback now...");
  callback();
}

greetUser("Anshuman", showEndMessage);
