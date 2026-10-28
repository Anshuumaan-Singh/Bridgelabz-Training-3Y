"use strict";

function createModuleLoader(moduleName, delayMs, shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error(`${moduleName} could not be loaded.`));
      else resolve(`${moduleName} Loaded`);
    }, delayMs);
  });
}

async function loadDashboardModules() {
  const startTime = Date.now();
  const modules = ["profile", "posts", "messages"];
  const rejectedModuleIndex = Math.floor(Math.random() * modules.length);
  const loadingPromises = [
    createModuleLoader("Profile", 2000, rejectedModuleIndex === 0),
    createModuleLoader("Posts", 1500, rejectedModuleIndex === 1),
    createModuleLoader("Messages", 1000, rejectedModuleIndex === 2)
  ];
  const results = await Promise.allSettled(loadingPromises);

  results.forEach((result, index) => {
    const moduleName = modules[index];
    if (result.status === "fulfilled") console.log(`${moduleName}: succeeded - ${result.value}`);
    else console.log(`${moduleName}: failed - ${result.reason.message}`);
  });
  console.log(`Total loading time: ${Date.now() - startTime} ms`);
}

loadDashboardModules().catch((error) => console.log(`Dashboard loading failed: ${error.message}`));
