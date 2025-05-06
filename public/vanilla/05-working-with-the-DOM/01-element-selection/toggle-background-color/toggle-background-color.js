import { setupExercise } from "../../../scripts/vanilla-exercise-handler.js";

setupExercise({
  fileKey: "05-working-with-the-DOM",
  exerciseName: "Toggle background color",
  statement:
    "There are several buttons on a page. Write a script that toggled the color of the button to yellow/black when clicked.",
});

// ! Рішення ----------

const highlightButtons = document.querySelectorAll(".action-btn");

highlightButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("yellow");
  });
});
