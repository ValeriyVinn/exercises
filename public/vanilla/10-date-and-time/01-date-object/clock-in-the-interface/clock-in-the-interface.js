import { setupExercise } from "../../../scripts/vanilla-exercise-handler.js";

setupExercise({
  fileKey: "10-date-and-time",
  exerciseName: "Сlock in the interface",
  statement: "Create a clock that updates every second in the browser.",
});

// ! Рішення ----------
// function updateClock() {
//   const now = new Date();
//   const time = now.toLocaleTimeString();
//   document.getElementById("clock").textContent = time;
// }

// setInterval(updateClock, 1000);
// updateClock(); // одразу показати перше значення





