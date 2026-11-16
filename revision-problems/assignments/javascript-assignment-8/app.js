"use strict";

const assignmentExercises = new Map();

function registerExercise(id, run) {
  assignmentExercises.set(id, run);
}

function showOutput(id, lines) {
  const output = document.querySelector(`#output-${id}`);
  output.textContent = lines.join("\n");
}

function runExercise(id) {
  const exercise = assignmentExercises.get(id);
  if (exercise) exercise();
}

document.querySelectorAll("[data-run]").forEach((button) => {
  button.addEventListener("click", () => runExercise(button.dataset.run));
});

document.querySelector("#run-all").addEventListener("click", () => {
  assignmentExercises.forEach((run) => run());
});

window.addEventListener("DOMContentLoaded", () => {
  assignmentExercises.forEach((run) => run());
});
