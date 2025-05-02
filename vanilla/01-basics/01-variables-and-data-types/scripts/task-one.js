import { setupExercise } from "../../../scripts/vanilla-exercise-handler.js";

setupExercise({
  fileKey: "01-basics",
  exerciseName: "Task 1: Personal Info Card",
  statement:
    "Create variables to store your name, age, and whether you’re a student (true/false). Print a message to the console using these values.",
});

const birthYear = new Date("1970-02-22");
let today = new Date();
// let year = today.getDay();

console.log(today);
console.log(birthYear);
