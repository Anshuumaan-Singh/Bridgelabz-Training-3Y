const rawProductName = " wireless headphones PRO ";
const trimmedProductName = rawProductName.trim().toLowerCase();

const titleCasedName = trimmedProductName
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

const cleanedProductName = titleCasedName.replace("Pro", "Pro Edition");

console.log(`Product title: ${cleanedProductName}`);
console.log(`Title length: ${cleanedProductName.length} characters`);
