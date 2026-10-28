"use strict";

function Person(name) {
  this.name = name;
}
Person.prototype.introduce = function introduce() {
  return `Hello, I am ${this.name}.`;
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.teach = function teach() {
  return `I teach in the ${this.department} department.`;
};

function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.research = function research() {
  return `My research subject is ${this.subject}.`;
};

const professor = new Professor("Dr. Meera Sharma", "Computer Science", "Artificial Intelligence");
console.log(professor.introduce()); // Inherited from Person.prototype.
console.log(professor.teach()); // Inherited from Faculty.prototype.
console.log(professor.research()); // Defined on Professor.prototype.
console.log(`Professor -> Faculty -> Person chain works: ${professor instanceof Professor && professor instanceof Faculty && professor instanceof Person}`);
