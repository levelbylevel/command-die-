const cmd = document.getElementById("cmd");
const core = document.getElementById("core");

/* always focus terminal */
document.addEventListener("click", () => cmd.focus());

cmd.addEventListener("keydown", e => {
  if (e.key !== "Enter") return;

  const value = cmd.value.trim().toLowerCase();
  cmd.value = "";

  if (value !== "die") return;

  // ACTIVATE COLLAPSE
  document.body.classList.add("collapse");

  // CORE IMPLOSION
  core.style.transition = "all 1.6s ease-in";
  core.style.transform = "translate(-50%, -50%) scale(0) rotate(1080deg)";
  core.style.opacity = "0";

  // FAKE ERROR SPAM
  const errors = [
    "KERNEL PANIC",
    "MEMORY CORRUPTION",
    "STACK OVERFLOW",
    "ACCESS VIOLATION",
    "SYSTEM FAILURE",
    "SEGMENTATION FAULT"
  ];

  const spam = setInterval(() => {
    const err = document.createElement("div");
    err.className = "error";
    err.textContent = errors[Math.floor(Math.random() * errors.length)];
    err.style.left = Math.random() * window.innerWidth + "px";
    err.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(err);
    setTimeout(() => err.remove(), 1400);
  }, 70);

  // TOTAL BLACKOUT
  setTimeout(() => {
    clearInterval(spam);
    const black = document.createElement("div");
    black.className = "blackout";
    document.body.appendChild(black);
  }, 2200);
});