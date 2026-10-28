const expenses = [
  { category: "Food", amount: 6500 },
  { category: "Travel", amount: 2200 },
  { category: "Rent", amount: 12000 },
  { category: "Bills", amount: 1800 },
  { category: "Leisure", amount: 1500 }
];

let totalExpense = 0;
for (const expense of expenses) {
  totalExpense += expense.amount; // Assignment operator keeps a running total.
}

const averageExpense = totalExpense / expenses.length;
const taxRate = 0.10;
let finalAmount = totalExpense;
finalAmount += totalExpense * taxRate; // Add 10% tax to the total.

console.table(expenses);
console.log(`Total before tax: ₹${totalExpense.toFixed(2)}`);
console.log(`Average per category: ₹${averageExpense.toFixed(2)}`);
console.log(`Final amount after 10% tax: ₹${finalAmount.toFixed(2)}`);
