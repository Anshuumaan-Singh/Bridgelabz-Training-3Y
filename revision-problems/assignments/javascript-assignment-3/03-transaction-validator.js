"use strict";

class NullTransactionError extends Error {
  constructor() { super("Transaction entry is null."); this.name = "NullTransactionError"; }
}
class MissingTransactionFieldError extends Error {
  constructor(field) { super(`Transaction is missing ${field}.`); this.name = "MissingTransactionFieldError"; }
}
class NegativeAmountError extends Error {
  constructor(amount) { super(`Transaction amount cannot be negative (${amount}).`); this.name = "NegativeAmountError"; }
}

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];
const validTransactions = [];
const invalidTransactions = [];

for (let index = 0; index < transactions.length; index++) {
  const transaction = transactions[index];
  debugger;

  try {
    if (transaction === null || transaction === undefined) throw new NullTransactionError();
    if (transaction.id === undefined || transaction.id === null) throw new MissingTransactionFieldError("id");
    if (transaction.amount === undefined || transaction.amount === null) throw new MissingTransactionFieldError("amount");
    if (typeof transaction.amount !== "number" || !Number.isFinite(transaction.amount)) {
      throw new TypeError("Transaction amount must be a finite number.");
    }
    if (transaction.amount < 0) throw new NegativeAmountError(transaction.amount);

    validTransactions.push(transaction);
    console.log(`Transaction ${transaction.id} is valid (₹${transaction.amount}).`);
  } catch (error) {
    invalidTransactions.push({ transaction, errorType: error.name, message: error.message });
    console.log(`Transaction at index ${index} rejected: ${error.name} - ${error.message}`);
  }
}

console.log(`Successful transactions: ${validTransactions.length}`);
console.log(`Failed transactions: ${invalidTransactions.length}`);
console.log(`Valid IDs: ${validTransactions.map((transaction) => transaction.id).join(", ")}`);
console.log(`Invalid error categories: ${invalidTransactions.map((entry) => entry.errorType).join(", ")}`);
