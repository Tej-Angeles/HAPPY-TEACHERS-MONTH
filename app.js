document.addEventListener("DOMContentLoaded", () => {
  const openSurpriseBtn = document.getElementById("openSurpriseBtn");
  const openLetterBtn = document.getElementById("openLetterBtn");
  const closeLetterBtn = document.getElementById("closeLetterBtn");
  const letterModal = document.getElementById("letterModal");

  if (openSurpriseBtn) {
    openSurpriseBtn.addEventListener("click", () => {
      document.getElementById("mentors").scrollIntoView({ behavior: "smooth" });
    });
  }

  const bgMusic = document.getElementById("bgMusic");

if (openLetterBtn) {
    openLetterBtn.addEventListener("click", () => {
      if (letterModal) {
        letterModal.classList.add("active");
      }

      if (bgMusic) {
        bgMusic.play();
      }
    });
  }

  if (closeLetterBtn) {
    closeLetterBtn.addEventListener("click", () => {
      if (letterModal) {
        letterModal.classList.remove("active");
      }
    });
  }

  if (letterModal) {
    letterModal.addEventListener("click", (e) => {
      if (e.target === letterModal) {
        letterModal.classList.remove("active");
      }
    });
  }
});
