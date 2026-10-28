"use strict";

function runCoffeeStep(stepName, successMessage) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.floor(Math.random() * 1001);
    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error(`${stepName} failed while preparing coffee.`));
      } else {
        console.log(stepName);
        resolve(successMessage);
      }
    }, delay);
  });
}

runCoffeeStep("Boiling water...", "Water is boiling.")
  .then(() => runCoffeeStep("Brewing coffee...", "Coffee is brewed."))
  .then(() => runCoffeeStep("Pouring into a cup...", "Coffee is poured."))
  .then(() => console.log("Coffee ready for the team!"))
  .catch((error) => console.log(`Coffee process failed: ${error.message}`));
