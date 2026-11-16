"use strict";

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
  if (!Number.isFinite(percent) || percent < 0 || percent > 100) {
    throw new RangeError("Discount must be between 0 and 100 percent.");
  }
  return this.price * (1 - percent / 100);
};

registerExercise("03", () => {
  const products = [new Product("Backpack", 2400), new Product("Headphones", 3600), new Product("Water bottle", 800)];
  const discounts = [10, 25, 15];
  const lines = products.map((product, index) => `${product.name}: ₹${product.price} → ${discounts[index]}% off → ₹${product.applyDiscount(discounts[index]).toFixed(2)}`);
  lines.push("Abstraction: each product exposes one discount operation; callers do not repeat the price formula.");
  showOutput("03", lines);
});
