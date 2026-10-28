let bonus = 5000;

function calculateSalary(permanentStatus) {
  let salary = 40000;
  const isPermanent = permanentStatus;

  if (isPermanent) {
    salary += bonus;
  }

  console.log(`Permanent employee: ${isPermanent}`);
  console.log(`Total salary: ₹${salary}`);
  console.log(`Global bonus remains: ₹${bonus}`);
}

calculateSalary(true);
calculateSalary(false);
