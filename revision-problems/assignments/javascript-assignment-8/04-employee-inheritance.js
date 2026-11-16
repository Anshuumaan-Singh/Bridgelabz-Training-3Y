"use strict";

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} completes ${this.department} tasks.`;
  }
}

class Manager extends Employee {
  work() {
    return `${this.name} leads the ${this.department} team.`;
  }
}

registerExercise("04", () => {
  const team = [new Employee("Ravi", "Engineering"), new Manager("Nina", "Product")];
  showOutput("04", [...team.map((employee) => employee.work()), `Runtime polymorphism: ${team[0].work()} / ${team[1].work()}`]);
});
