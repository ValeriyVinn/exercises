import { setupExercise } from "../../../../scripts/vanilla-exercise-handler.js";

setupExercise({
  fileKey: "08-asynchronous-js",
  exerciseName: "Sequence of promises",
  statement:
    "Create a sequence of two promises: the first waits for 1 second, the second for 2 seconds.",
});

// ! Рішення ----------
// function wait(seconds) {
//   return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
// }

// wait(1)
//   .then(() => {
//     console.log("1 second passed");
//     return wait(2);
//   })
//   .then(() => console.log("2 more seconds passed"));
