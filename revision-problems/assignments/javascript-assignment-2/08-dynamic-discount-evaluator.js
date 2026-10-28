const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];
const originalCartTotal = cart.reduce((total, product) => total + product.price, 0);
let discountedSubtotal = 0;
const discountedItems = [];

for (const product of cart) {
  let discountRate = 0;

  if (product.category === "electronics") {
    discountRate = 0.10;
  } else if (product.category === "fashion") {
    discountRate = 0.05;
  }

  const discountAmount = product.price * discountRate;
  const finalItemPrice = product.price - discountAmount;
  discountedSubtotal += finalItemPrice;
  discountedItems.push({
    item: product.item,
    category: product.category,
    originalPrice: product.price,
    discount: `${discountRate * 100}%`,
    finalPrice: finalItemPrice
  });
}

const extraDiscountRate = originalCartTotal > 50000 ? 0.05 : 0;
const extraDiscountAmount = discountedSubtotal * extraDiscountRate;
const finalCartTotal = discountedSubtotal - extraDiscountAmount;

console.table(discountedItems);
console.log(`Original cart value: ₹${originalCartTotal.toFixed(2)}`);
console.log(`Extra cart discount: ${extraDiscountRate * 100}% (₹${extraDiscountAmount.toFixed(2)})`);
console.log(`Final cart total: ₹${finalCartTotal.toFixed(2)}`);
