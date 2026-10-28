"use strict";

function runCallbackStage(stage, callback) {
  setTimeout(() => {
    console.log(`Callback stage: ${stage}`);
    callback();
  }, 1000);
}
console.log("Starting nested callback pipeline:");
runCallbackStage("design", () => {
  runCallbackStage("build", () => {
    runCallbackStage("test", () => {
      runCallbackStage("deploy", () => {
        runCallbackStage("celebrate", () => {
          console.log("Callback pipeline complete.");
          runAsyncPipeline();
        });
      });
    });
  });
});

function runAsyncStage(stage) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Async stage: ${stage}`);
      resolve();
    }, 1000);
  });
}

async function runAsyncPipeline() {
  console.log("Starting async/await pipeline:");
  await runAsyncStage("design");
  await runAsyncStage("build");
  await runAsyncStage("test");
  await runAsyncStage("deploy");
  await runAsyncStage("celebrate");
  console.log("Async/await pipeline complete.");
}
