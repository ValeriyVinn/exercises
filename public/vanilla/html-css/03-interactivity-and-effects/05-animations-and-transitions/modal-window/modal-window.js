import { setupExercise } from "../../../../scripts/html-css-exercise-handler.js";

setupExercise({
  fileKey: "03-interactivity-and-effects",
  exerciseName: "Modal window",
  statement: "Create a modal window.",
});

// ! Рішення ----------

const refs = {
  openModalBtn: document.querySelector("[data-open-modal]"),
  closeModalBtn: document.querySelector("[data-close-modal]"),
  backdrop: document.querySelector("[data-backdrop]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

refs.backdrop.addEventListener("click", logBackdropClick);

function toggleModal() {
  refs.backdrop.classList.toggle("is-hidden");
}
