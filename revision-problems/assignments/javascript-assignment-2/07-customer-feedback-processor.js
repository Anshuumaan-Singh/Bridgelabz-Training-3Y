const feedback = "Great product! Fast delivery and amazing sound quality!";
const feedbackWords = feedback.trim().split(/\s+/);
const normalizedFeedback = feedback.toLowerCase();
const containsNegativeWord = normalizedFeedback.includes("bad") || normalizedFeedback.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${feedbackWords.length}`);

if (!containsNegativeWord) {
  console.log("Positive Feedback");
} else {
  console.log("Needs Improvement");
}
