"use strict";

function requestServer(serverName, delayMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error(`${serverName} deployment failed.`));
      } else {
        resolve(`${serverName} deployment finished`);
      }
    }, delayMs);
  });
}

const serverA = requestServer("Server A", 2000);
const serverB = requestServer("Server B", 3000);

Promise.all([serverA, serverB])
  .then(() => console.log("Deployment completed for all servers"))
  .catch((error) => console.log(`Not all deployments completed: ${error.message}`));

const observedServerA = serverA.then(
  (message) => ({ server: "Server A", message, failed: false }),
  (error) => ({ server: "Server A", message: error.message, failed: true })
);
const observedServerB = serverB.then(
  (message) => ({ server: "Server B", message, failed: false }),
  (error) => ({ server: "Server B", message: error.message, failed: true })
);
Promise.race([observedServerA, observedServerB]).then((result) => {
  console.log(`Fastest response: ${result.server} — ${result.message}`);
});
