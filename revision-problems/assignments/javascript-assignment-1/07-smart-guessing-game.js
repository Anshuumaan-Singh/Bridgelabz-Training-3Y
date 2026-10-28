const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25;
const distanceFromSecret = Math.abs(userGuess - secretNumber);

console.log(`Your guess: ${userGuess}`);
console.log(`Secret number: ${secretNumber}`);

if (userGuess >= 1 && userGuess <= 50) {
  if (userGuess === secretNumber) {
    console.log("Correct guess!");
  } else if (distanceFromSecret <= 3) {
    console.log("Very close!");
  } else if (userGuess > secretNumber) {
    console.log("Too high");
  } else {
    console.log("Too low");
  }
} else {
  console.log("Please choose a number from 1 to 50.");
}
