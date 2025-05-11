import { setupExercise } from "../../../scripts/vanilla-exercise-handler.js";

setupExercise({
  fileKey: "08-asynchronous-js",
  exerciseName: "Delayed promise",
  statement:
    "Write a function delay(ms) that returns a promise that will be fulfilled after a given time.",
});
 
// ! Рішення ----------
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// delay(1000).then(() => console.log("1 second passed"));
