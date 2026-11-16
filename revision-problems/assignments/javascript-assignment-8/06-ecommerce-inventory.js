"use strict";

const inventory = [
  { id: 1, name: "Notebook", category: "Stationery", price: 80, stock: 4 },
  { id: 2, name: "Desk lamp", category: "Electronics", price: 1250, stock: 12 },
  { id: 3, name: "Pen set", category: "Stationery", price: 150, stock: 2 },
  { id: 4, name: "Keyboard", category: "Electronics", price: 2100, stock: 3 },
  { id: 5, name: "Travel mug", category: "Home", price: 650, stock: 8 }
];

function getLowStockProducts(products, threshold = 5) {
  return products.filter((product) => product.stock < threshold);
}

function sortProductsByPrice(products) {
  return [...products].sort((first, second) => first.price - second.price);
}

function calculateTotalInventoryValue(products) {
  return products.reduce((total, product) => total + product.price * product.stock, 0);
}

function groupByCategory(products) {
  return products.reduce((groups, product) => {
    (groups[product.category] ??= []).push(product.name);
    return groups;
  }, {});
}

registerExercise("06", () => {
  const lowStock = getLowStockProducts(inventory);
  const sorted = sortProductsByPrice(inventory);
  const groups = groupByCategory(inventory);
  const lines = [
    `Low stock (< 5): ${lowStock.map(({ name, stock }) => `${name} (${stock})`).join(", ")}`,
    `Price order: ${sorted.map(({ name, price }) => `${name} ₹${price}`).join(" → ")}`,
    `Total inventory value: ₹${calculateTotalInventoryValue(inventory).toLocaleString("en-IN")}`,
    "Products by category:",
    ...Object.entries(groups).map(([category, names]) => `  ${category}: ${names.join(", ")}`)
  ];
  showOutput("06", lines);
});
