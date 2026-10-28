"use strict";

function PrototypePerson(name) { this.name = name; }
PrototypePerson.prototype.introduce = function introduce() { return `My name is ${this.name}.`; };
function PrototypeStudent(name, branch) {
  PrototypePerson.call(this, name);
  this.branch = branch;
}
PrototypeStudent.prototype = Object.create(PrototypePerson.prototype);
PrototypeStudent.prototype.constructor = PrototypeStudent;
PrototypeStudent.prototype.showBranch = function showBranch() { return `I study ${this.branch}.`; };

class Person {
  constructor(name) { this.name = name; }
  introduce() { return `My name is ${this.name}.`; }
}
class Student extends Person {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }
  showBranch() { return `I study ${this.branch}.`; }
}

const prototypeStudent = new PrototypeStudent("Anshuman Singh", "Computer Science");
const classStudent = new Student("Anshuman Singh", "Computer Science");
const prototypeOutput = `${prototypeStudent.introduce()} ${prototypeStudent.showBranch()}`;
const classOutput = `${classStudent.introduce()} ${classStudent.showBranch()}`;
console.log(`Prototype version: ${prototypeOutput}`);
console.log(`Class version: ${classOutput}`);
console.log(`Both versions behave the same: ${prototypeOutput === classOutput}`);
