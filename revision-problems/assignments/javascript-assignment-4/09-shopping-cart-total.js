"use strict";

class Cart {
  constructor() { this.items = []; }

  addItem(name, price, quantity) {
    if (!name.trim() || !Number.isFinite(price) || price < 0 || !Number.isInteger(quantity) || quantity < 1) {
      throw new TypeError("Enter an item name, a non-negative price, and a positive whole-number quantity.");
    }
    this.items.push({ name: name.trim(), price, quantity });
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  applyCoupon(code) {
    const normalizedCode = code.trim().toUpperCase();
    const match = /^(SAVE|DISC)(\d{1,2})$/.exec(normalizedCode);
    if (!match) return { valid: false, message: "Coupon must look like SAVE20 or DISC10." };
    const percent = Number(match[2]);
    if (percent < 1 || percent > 100) return { valid: false, message: "Coupon discount must be from 1% to 100%." };
    const discountAmount = this.getTotal() * percent / 100;
    return { valid: true, code: normalizedCode, percent, discountAmount, finalTotal: this.getTotal() - discountAmount };
  }
}

const cart = new Cart();
cart.addItem("Football", 899, 1);
cart.addItem("Training shoes", 2499, 2);
let activeCoupon = null;

function renderCart() {
  const itemsContainer = document.querySelector("#cart-items");
  if (!itemsContainer) return;
  itemsContainer.innerHTML = cart.items.map((item) => `<li>${item.name} — ₹${item.price.toFixed(2)} × ${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}</li>`).join("") || "<li>Your cart is empty.</li>";
  const subtotal = cart.getTotal();
  const result = activeCoupon ? cart.applyCoupon(activeCoupon) : null;
  document.querySelector("#cart-subtotal").textContent = `Subtotal: ₹${subtotal.toFixed(2)}`;
  document.querySelector("#cart-final-total").textContent = `Final total: ₹${result && result.valid ? result.finalTotal.toFixed(2) : subtotal.toFixed(2)}`;
}

function attachCartControls() {
  const addForm = document.querySelector("#cart-add-form");
  const couponForm = document.querySelector("#coupon-form");
  if (!addForm || !couponForm) return;
  renderCart();

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(addForm).entries());
    try {
      cart.addItem(values.name, Number(values.price), Number(values.quantity));
      addForm.reset();
      document.querySelector("#cart-item-status").textContent = "Item added.";
      renderCart();
    } catch (error) {
      document.querySelector("#cart-item-status").textContent = error.message;
    }
  });

  couponForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const code = new FormData(couponForm).get("coupon");
    const result = cart.applyCoupon(code);
    document.querySelector("#coupon-status").textContent = result.message || `${result.code} applied: ${result.percent}% off (₹${result.discountAmount.toFixed(2)} saved).`;
    activeCoupon = result.valid ? code : null;
    renderCart();
  });
}

if (typeof document !== "undefined") attachCartControls();
else {
  const exampleDiscount = cart.applyCoupon("SAVE20");
  console.log(`Cart subtotal: ₹${cart.getTotal().toFixed(2)}; SAVE20 total: ₹${exampleDiscount.finalTotal.toFixed(2)}`);
}
