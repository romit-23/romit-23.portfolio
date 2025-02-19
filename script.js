document.addEventListener("mousemove", (e) => {
  const videoBg = document.querySelector(".video-bg");
  if (!videoBg) return;

  const { clientX: x, clientY: y } = e;
  const moveX = (x / window.innerWidth - 0.5) * 25; // Adjust for strength
  const moveY = (y / window.innerHeight - 0.5) * 25;

  videoBg.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
