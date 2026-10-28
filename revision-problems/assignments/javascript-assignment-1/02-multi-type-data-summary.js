const userName = "Anshuman Singh";
const age = 20;
const isStudent = true;
const favoriteActivities = ["football", "web development"];
const profile = { college: "GLA University Mathura", course: "Web Development" };
const middleName = null;
let alternateContact;

const dataEntries = [
  { label: "Name", value: userName, detectedType: typeof userName },
  { label: "Age", value: age, detectedType: typeof age },
  { label: "Student", value: isStudent, detectedType: typeof isStudent },
  { label: "Favorite activities", value: favoriteActivities.join(", "), detectedType: Array.isArray(favoriteActivities) ? "array" : typeof favoriteActivities },
  { label: "Profile", value: JSON.stringify(profile), detectedType: typeof profile },
  { label: "Middle name", value: middleName, detectedType: middleName === null ? "null" : typeof middleName },
  { label: "Alternate contact", value: String(alternateContact), detectedType: typeof alternateContact }
];

console.table(dataEntries);
