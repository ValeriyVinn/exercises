import { setupExercise } from "../../../scripts/vanilla-exercise-handler.js";

setupExercise({
  fileKey: "08-asynchronous-js",
  exerciseName: "Belated greetings",
  statement:
    "Write a function greet(name, callback) that takes a name and a callback function. Print a 'Greeting complete!' after 3 seconds.",
});
// 09.05.2025 - 20:25 --score is: 6:39
// 09.05.2025 - 20:40 --score is: 4:30
// 10.05.2025 - 21:10 --score is: 6:37
// ! Рішення ----------
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  setTimeout(() => {
    callback();
  }, 3000);
}

greet("Alex", () => {
  console.log("Sorry, time is up, you have to go.");
});
