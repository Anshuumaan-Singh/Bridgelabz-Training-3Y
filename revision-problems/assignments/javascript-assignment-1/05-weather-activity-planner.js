const temperature = 22;
const isRaining = false;
const windSpeed = 12;
const isColdAndWindy = temperature < 15 && windSpeed > 20;

if (isRaining || isColdAndWindy) {
  if (isRaining) {
    console.log("Stay indoors with hot coffee.");
  } else {
    console.log("Too cold and windy — stay home.");
  }
} else if (temperature > 35) {
  console.log("Go swimming.");
} else {
  console.log("Perfect day for a walk.");
}
