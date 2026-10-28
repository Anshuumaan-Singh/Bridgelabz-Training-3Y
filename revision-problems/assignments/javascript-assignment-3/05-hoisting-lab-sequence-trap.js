"use strict";

console.log("Hoisting prediction: score is undefined; announce runs; status is initialized before startGame runs, so it prints ready.");

const score = 50;
const status = "ready";
function announce() { console.log("Game started"); }
function startGame() { console.log(`Game status: ${status}`); }
console.log(`Score: ${score}`);
announce();
startGame();

const announceWithArrow = () => console.log("Game started (arrow function)");
const startGameWithArrow = () => console.log(`Game status (arrow function): ${status}`);
announceWithArrow();
startGameWithArrow();
console.log("Hoisting comparison: function declarations can be called before their declaration; const arrow functions cannot be used before initialization.");
