const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const backdrop = document.getElementById("backdrop");

function openModal() {
  backdrop.classList.add("active");
}
function closeModal() {
  backdrop.classList.remove("active");
}
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) {
    closeModal();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
