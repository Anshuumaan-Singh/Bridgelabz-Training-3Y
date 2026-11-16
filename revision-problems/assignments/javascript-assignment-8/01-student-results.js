"use strict";

class Student {
  constructor(name, marks) {
    if (!Array.isArray(marks) || marks.length === 0 || marks.some((mark) => !Number.isFinite(mark) || mark < 0 || mark > 100)) {
      throw new TypeError("Marks must be a non-empty array of numbers from 0 to 100.");
    }
    this.name = name;
    this.marks = [...marks];
  }

  calculateAverage() {
    return this.marks.reduce((total, mark) => total + mark, 0) / this.marks.length;
  }

  getGrade() {
    const average = this.calculateAverage();
    if (average >= 80) return "A";
    if (average >= 60) return "B";
    if (average >= 40) return "C";
    return "F";
  }
}

registerExercise("01", () => {
  const students = [
    new Student("Aisha", [92, 85, 88]),
    new Student("Kabir", [74, 68, 79]),
    new Student("Meera", [38, 45, 32])
  ];
  showOutput("01", students.map((student) => `${student.name}: average ${student.calculateAverage().toFixed(2)} | Grade ${student.getGrade()}`));
});
