import { setupExercise } from "../../../scripts/vanilla-exercise-handler.js";

setupExercise({
  fileKey: "08-asynchronous-js",
  exerciseName: "Countdown timer",
  statement:
    "Create a function countdown(start, callback) that counts down from a given number to zero at 1 second intervals.",
});

// ! Рішення ----------

// function countdown(start, callback) {
//   console.log("Get Ready!");
//   let current = start;
//   const timer = setInterval(() => {
//     console.log(current);
//     current -= 1;
//     if (current <= 0) {
//       clearInterval(timer);
//       callback();
//     }
//   }, 1000);
// }

// countdown(5, () => {
//   console.log("Lets gooo!");
// });
