"use strict";

class BankAccount {
  #balance;

  constructor(initialBalance = 0) {
    if (!Number.isFinite(initialBalance) || initialBalance < 0) throw new RangeError("Initial balance must be zero or more.");
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (!Number.isFinite(amount) || amount <= 0) throw new RangeError("Deposit amount must be greater than zero.");
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (!Number.isFinite(amount) || amount <= 0) throw new RangeError("Withdrawal amount must be greater than zero.");
    if (amount > this.#balance) throw new Error("Insufficient balance for this withdrawal.");
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

registerExercise("07", () => {
  const account = new BankAccount(5000);
  const lines = [`Opening balance: ₹${account.getBalance()}`, `Deposit ₹1,500 → balance ₹${account.deposit(1500)}`];
  try {
    account.withdraw(10000);
  } catch (error) {
    lines.push(`Withdrawal handled: ${error.message}`, `Balance remains ₹${account.getBalance()}`);
  }
  lines.push(`Withdraw ₹2,000 → balance ₹${account.withdraw(2000)}`);
  showOutput("07", lines);
});
