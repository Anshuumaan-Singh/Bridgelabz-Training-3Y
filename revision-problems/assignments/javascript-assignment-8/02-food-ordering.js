"use strict";

const menu = [
  { name: "Paneer wrap", price: 180 },
  { name: "Masala dosa", price: 140 },
  { name: "Mango lassi", price: 80 }
];

function calculateBill(orderItems) {
  const prices = orderItems.map((itemName) => {
    const item = menu.find((menuItem) => menuItem.name === itemName);
    if (!item) throw new Error(`\"${itemName}\" is not on the menu.`);
    return item.price;
  });
  return { prices, total: prices.reduce((sum, price) => sum + price, 0) };
}

registerExercise("02", () => {
  const lines = [`Menu: ${menu.map(({ name, price }) => `${name} ₹${price}`).join(" · ")}`];
  try {
    const { prices, total } = calculateBill(["Paneer wrap", "Mango lassi"]);
    lines.push(`Order prices (map): ₹${prices.join(" + ₹")}`, `Order total (reduce): ₹${total}`);
  } catch (error) {
    lines.push(`Order error: ${error.message}`);
  }
  try {
    calculateBill(["Paneer wrap", "Mystery dish"]);
  } catch (error) {
    lines.push(`Invalid order handled: ${error.message}`);
  }
  showOutput("02", lines);
});
