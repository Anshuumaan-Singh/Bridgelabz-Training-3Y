const marks = [88, 91, 79, 85, 93];
const passingMark = 35;
const totalMarks = marks.reduce((total, mark) => total + mark, 0);
const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;
const hasFailedSubject = marks.some((mark) => mark < passingMark);

console.log(`Average marks: ${average.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);

if (hasFailedSubject || percentage < 50) {
  console.log("Detained");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
  console.log("Promoted");
}
