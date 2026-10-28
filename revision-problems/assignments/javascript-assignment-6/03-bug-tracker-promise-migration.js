"use strict";

function getBugs() {
  return new Promise((resolve, reject) => {
    const shouldFail = Math.random() < 0.25;
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("The bug tracker API is unavailable."));
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

getBugs()
  .then((bugs) => {
    console.log("Open bugs:");
    console.table(bugs.map((description, index) => ({ number: index + 1, description })));
  })
  .catch((error) => console.log(`Could not load bugs: ${error.message}`));
