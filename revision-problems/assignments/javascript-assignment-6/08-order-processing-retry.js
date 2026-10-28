"use strict";

function submitOrder() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) resolve({ orderId: "ORD-1001", status: "accepted" });
    else reject(new Error("Temporary order service error."));
  });
}

async function processOrder() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const order = await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      console.log(`Order ${order.orderId} ${order.status}.`);
      return order;
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed (${error.message})`);
    }
  }
  throw new Error("Order could not be processed");
}

processOrder().catch((error) => console.log(`Final result: ${error.message}`));
