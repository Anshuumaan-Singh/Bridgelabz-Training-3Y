"use strict";

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    if (!Number.isFinite(percent) || percent < 0 || percent > 100) {
      throw new RangeError("Discount must be between 0 and 100 percent.");
    }
    return this.price * (1 - percent / 100);
  }

  displayDetails(discountPercent = 0) {
    return `${this.name} (${this.category}) | Original: ₹${this.price.toFixed(2)} | ${discountPercent}% off: ₹${this.applyDiscount(discountPercent).toFixed(2)}`;
  }
}

const products = [
  new Product(1, "Wireless Headphones", 2499, "Electronics"),
  new Product(2, "Football", 899, "Sports"),
  new Product(3, "Study Lamp", 1299, "Home")
];

console.log("Products priced over ₹1,000:");
for (const product of products.filter((item) => item.price > 1000)) {
  console.log(product.displayDetails(10));
}
