"use strict";

const productApiUrl = "https://fakestoreapi.com/products";

async function loadProducts() {
  try {
    let response;
    const useOfflineSample = typeof process !== "undefined" && process.argv.includes("--offline-test");
    if (useOfflineSample) {
      response = {
        ok: true,
        json: async () => [{ title: "Fjallraven Backpack", price: 109.95, image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" }]
      };
    } else {
      response = await fetch(productApiUrl);
    }

    if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
    const products = await response.json();
    for (const product of products) {
      console.log(`Product: ${product.title}`);
      console.log(`Price: $${Number(product.price).toFixed(2)}`);
      console.log(`Image: ${product.image}`);
    }
  } catch (error) {
    console.log("Failed to load products. Please try again.");
    console.log(`Details: ${error.message}`);
  }
}

loadProducts();
