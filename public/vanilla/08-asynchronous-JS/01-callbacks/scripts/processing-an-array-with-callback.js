import { setupExercise } from "../../../scripts/vanilla-exercise-handler.js";

setupExercise({
  fileKey: "08-asynchronous-JS",
  exerciseName: "Processing an array with callback",
  statement:
    "Write a function processArray(arr, callback) that processes each element of the array through a callback function.",
});

// ! Рішення ----------
function processArray(arr, callback) {
  arr.forEach((item, index) => {
    callback(item, index);
  });
}

processArray([1, 2, 3], (item, index) => {
  console.log(`Item ${index + 1}: ${item}`);
});
