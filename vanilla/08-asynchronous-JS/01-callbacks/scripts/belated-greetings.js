import { setupExercise } from "../../../scripts/vanilla-exercise-handler.js";

setupExercise({
  fileKey: "08-asynchronous-JS",
  exerciseName: "Belated greetings",
  statement:
    "Write a function greet(name, callback) that takes a name and a callback function. Print a 'Greeting complete!' after 3 seconds.",
});

// ! Рішення ----------
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  setTimeout(() => {
    callback();
  }, 3000);
}

greet("Alex", () => {
  console.log("Greeting complete!");
});
