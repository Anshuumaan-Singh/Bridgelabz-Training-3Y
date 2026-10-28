"use strict";

class Employee {
  constructor(id, name, department, monthlySalary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = monthlySalary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    if (!Number.isFinite(percent) || percent < 0) throw new RangeError("Bonus percent must be zero or greater.");
    return this.getAnnualSalary() * (percent / 100);
  }
}

const employees = [
  new Employee(1, "Aarav", "Engineering", 60000),
  new Employee(2, "Meera", "Design", 52000),
  new Employee(3, "Kabir", "Finance", 48000),
  new Employee(4, "Riya", "Marketing", 45000),
  new Employee(5, "Dev", "Support", 40000)
];
const employeePayouts = employees.map((employee) => ({
  id: employee.id,
  name: employee.name,
  department: employee.department,
  annualSalary: employee.getAnnualSalary(),
  bonus: employee.applyBonus(10),
  annualPayout: employee.getAnnualSalary() + employee.applyBonus(10)
}));
const totalAnnualPayout = employeePayouts.reduce((total, employee) => total + employee.annualPayout, 0);

for (const employee of employeePayouts) {
  console.log(`${employee.name} (${employee.department}): annual salary ₹${employee.annualSalary.toFixed(2)}, bonus ₹${employee.bonus.toFixed(2)}, annual payout ₹${employee.annualPayout.toFixed(2)}`);
}
console.log(`Total annual company payout: ₹${totalAnnualPayout.toFixed(2)}`);
