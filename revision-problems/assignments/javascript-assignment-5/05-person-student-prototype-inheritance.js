"use strict";

function Person(name) {
  this.name = name;
}
Person.prototype.introduce = function introduce() {
  return `My name is ${this.name}.`;
};

function Student(name, branch) {
  Person.call(this, name); // Initialize the inherited Person property.
  this.branch = branch;
}
Student.prototype = Object.create(Person.prototype); // Connect the prototype chain.
Student.prototype.constructor = Student;
Student.prototype.showBranch = function showBranch() {
  return `I study ${this.branch}.`;
};

const student = new Student("Anshuman Singh", "Computer Science");
console.log(student.introduce());
console.log(student.showBranch());
console.log(`Student -> Person prototype chain works: ${student instanceof Student && student instanceof Person}`);
