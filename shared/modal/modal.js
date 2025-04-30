// export function createModal({ title, contentHTML }) {
//   const template = document.getElementById("shared-modal-template");
//   const modalNode = template.content.cloneNode(true);
//   const overlay = modalNode.querySelector(".modal-overlay");
//   const titleEl = modalNode.querySelector(".modal-title");
//   const contentEl = modalNode.querySelector(".modal-content");
//   const closeBtn = modalNode.querySelector(".close-btn");

//   titleEl.textContent = title;
//   contentEl.innerHTML = contentHTML;

//   closeBtn.addEventListener("click", () => overlay.remove());

//   document.body.appendChild(overlay);
//   overlay.style.display = "flex";
// }

export function createModal({ title, contentHTML, extraClass = "" }) {
  const template = document.getElementById("shared-modal-template");
  const modalNode = template.content.cloneNode(true);
  const overlay = modalNode.querySelector(".modal-overlay");
  const modal = modalNode.querySelector(".modal");
  const titleEl = modalNode.querySelector(".modal-title");
  const contentEl = modalNode.querySelector(".modal-content");
  const closeBtn = modalNode.querySelector(".close-btn");

  if (extraClass) modal.classList.add(extraClass);

  titleEl.textContent = title;
  contentEl.innerHTML = contentHTML;

  document.body.appendChild(overlay);
  requestAnimationFrame(() => {
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  const escHandler = (e) => {
    if (e.key === "Escape") close();
  };
  document.addEventListener("keydown", escHandler);

  function close() {
    overlay.classList.remove("active");
    setTimeout(() => {
      overlay.remove();
      document.removeEventListener("keydown", escHandler);
    }, 300);
  }
}
