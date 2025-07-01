
  const modal = document.getElementById("trailerModal");
  const trailerBtn = document.querySelector("button:nth-child(1)");
  const trailerVideo = document.getElementById("trailerVideo");
  const closeBtn = document.querySelector(".close");

  trailerBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    trailerVideo.currentTime = 0;
    trailerVideo.play();
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    trailerVideo.pause();
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      trailerVideo.pause();
    }
  });

