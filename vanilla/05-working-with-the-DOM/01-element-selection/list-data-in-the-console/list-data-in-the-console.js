import { setupExercise } from "../../../scripts/vanilla-exercise-handler.js";

setupExercise({
  fileKey: "05-working-with-the-DOM",
  exerciseName: "List data in the console",
  statement:
    "Log to the console the number and text of the headers according to the condition.",
});

// ! Рішення ----------

const numberOfCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});