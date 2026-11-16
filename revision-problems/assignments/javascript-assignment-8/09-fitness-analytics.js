"use strict";

const workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
  constructor(data) {
    if (!Array.isArray(data) || data.length === 0) throw new Error("Workout dataset cannot be empty.");
    this.data = data;
  }

  getActiveUsers() {
    return this.data.filter((entry) => entry.steps > 7000);
  }

  getAverageCalories() {
    return this.data.reduce((total, entry) => total + entry.calories, 0) / this.data.length;
  }

  getUserSummary() {
    return this.data.map((entry) => `${entry.user}: ${entry.steps.toLocaleString("en-IN")} steps, ${entry.calories} calories`);
  }
}

registerExercise("09", () => {
  const analytics = new FitnessAnalytics(workoutData);
  const lines = [
    `Active users (> 7,000 steps): ${analytics.getActiveUsers().map((entry) => entry.user).join(", ")}`,
    `Average calories: ${analytics.getAverageCalories().toFixed(2)}`,
    "User summaries:",
    ...analytics.getUserSummary().map((summary) => `  ${summary}`)
  ];
  try {
    new FitnessAnalytics([]);
  } catch (error) {
    lines.push(`Empty data handled: ${error.message}`);
  }
  showOutput("09", lines);
});
