const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const totalScore = scores.reduce((total, score) => total + score, 0);
const averageScore = totalScore / scores.length;
const passingScores = scores.filter((score) => score >= 50);
const scoreRows = scores.map((score, index) => ({ student: index + 1, score, result: score >= 50 ? "Passed" : "Not passed" }));

console.log("Student score details:");
console.table(scoreRows);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students who passed: ${passingScores.length} of ${scores.length}`);
