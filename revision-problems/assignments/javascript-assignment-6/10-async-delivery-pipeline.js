"use strict";

function runDeliveryStep(stepName, successMessage) {
  return new Promise((resolve, reject) => {
    const delayMs = 1000 + Math.floor(Math.random() * 1001);
    setTimeout(() => {
      if (Math.random() < 0.12) {
        reject(new Error(`${stepName} could not be completed.`));
      } else {
        console.log(successMessage);
        resolve(stepName);
      }
    }, delayMs);
  });
}

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    await runDeliveryStep("takeOrder", "Step 1: Order taken");
    await runDeliveryStep("prepare", "Step 2: Food prepared");
    await runDeliveryStep("pack", "Step 3: Package ready");
    await runDeliveryStep("dispatch", "Step 4: Out for delivery");
    await runDeliveryStep("deliver", "Delivery completed!");
  } catch (error) {
    console.log("Pipeline failed!");
    console.log(`Failure detail: ${error.message}`);
  }
}

runPipeline();
