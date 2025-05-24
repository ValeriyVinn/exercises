import { setupExercise } from "../../../scripts/vanilla-exercise-handler.js";

setupExercise({
  fileKey: "10-date-and-time",
  exerciseName: "Stand in days between two dates",
  statement: "Calculate how many days are left until the New Year.",
});

// ! Рішення ----------
// const today = new Date();
// const newYear = new Date(today.getFullYear() + 1, 0, 1); // 1 січня наступного року

// const diffInMs = newYear - today;
// const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

// console.log(`До Нового року залишилось: ${diffInDays} днів`);
