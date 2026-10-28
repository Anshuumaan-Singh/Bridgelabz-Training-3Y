const currentSalary = 50000;
const annualIncrementRate = 8; // Percent
let projectedSalary = currentSalary;
const salaryProjection = [];

for (let year = 1; year <= 5; year++) {
  projectedSalary *= 1 + annualIncrementRate / 100; // Compound each yearly increase.
  projectedSalary = Math.round(projectedSalary);
  salaryProjection.push({ year, salary: `₹${projectedSalary.toLocaleString("en-IN")}` });
}

console.table(salaryProjection);
