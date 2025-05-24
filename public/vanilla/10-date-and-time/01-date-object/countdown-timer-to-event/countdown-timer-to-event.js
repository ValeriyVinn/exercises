import { setupExercise } from "../../../scripts/vanilla-exercise-handler.js";

setupExercise({
  fileKey: "10-date-and-time",
  exerciseName: "Countdown timer (to event).",
  statement: "Implement a simple countdown to a specific date.",
});

// ! Рішення ----------
// const eventDate = new Date("2025-06-01T00:00:00");

// function countdown() {
//   const now = new Date();
//   const diff = eventDate - now;

//   if (diff <= 0) {
//     console.log("Подія вже настала!");
//     clearInterval(timer);
//     return;
//   }

//   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//   const minutes = Math.floor((diff / (1000 * 60)) % 60);
//   const seconds = Math.floor((diff / 1000) % 60);

//   console.log(`Залишилось: ${days}д ${hours}г ${minutes}хв ${seconds}с`);
// }

// const timer = setInterval(countdown, 1000);
